import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";

const BetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();

  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),

        apk: closePopupForForever ? true : false,
        isbetDelay: isBetDelay(placeBetValues),
      },
    ];

    let delay = 0;

    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();

          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };

  return (
    <div className="col-md-12 px-0">
      {loading && (
        <div className="full-overlay ng-star-inserted">
          <div id="loading" className="loading-wrap loader">
            <ul className="loading">
              <li className="flex items-center justify-center">
                <img src="/icon/loading.gif" />
              </li>
              <li>Loading...</li>
            </ul>
          </div>
        </div>
      )}

      <div>
        <div className="bettingTable back">
          <div className="row justify-content-end py-1">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2 px-0 mbetting-table-none">
                  <button onClick={handleCancelBet} className="btn btn-cancel">
                    cacnel
                  </button>
                </div>
                <div className="col-md-7 px-0">
                  <div className="row">
                    <div className="col-md-7 col-6 px-1">
                      <div className="input-group">
                        {!placeBetValues?.isWeak && (
                          <div
                            onClick={() => {
                              handleDecreasePrice(
                                price,
                                placeBetValues,
                                dispatch,
                                setPrice,
                              );
                              setIsCashOut(false);
                            }}
                            className="input-group-prepend"
                          >
                            <span className="input-group-text">
                              <i className="mdi mdi-minus" />
                            </span>
                          </div>
                        )}

                        <input
                          onChange={(e) => {
                            dispatch(setPrice(e.target.value));
                            setIsCashOut(false);
                          }}
                          value={price}
                          type="number"
                          min="1.01"
                          max="999.99"
                          className="form-control ng-untouched ng-pristine"
                        />
                        {!placeBetValues?.isWeak && (
                          <div
                            onClick={() => {
                              handleIncreasePrice(
                                price,
                                placeBetValues,
                                dispatch,
                                setPrice,
                              );
                              setIsCashOut(false);
                            }}
                            className="input-group-append"
                          >
                            <span className="input-group-text">
                              <i className="mdi mdi-plus" />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-5 col-6 px-1">
                      <input
                        onChange={(e) => {
                          dispatch(setStake(e.target.value));
                          setIsCashOut(false);
                        }}
                        type="number"
                        min={0}
                        className="form-control mbetting-table-none ng-untouched ng-pristine ng-valid"
                        placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
                        value={stake || ""}
                      />
                      <div className="input-group dbetting-table-none">
                        <div
                          onClick={() =>
                            dispatch(setStake(stake >= 200 ? stake - 100 : 100))
                          }
                          className="input-group-prepend"
                        >
                          <span className="input-group-text">
                            <i className="mdi mdi-minus" />
                          </span>
                        </div>
                        <input
                          onChange={(e) => dispatch(setStake(e.target.value))}
                          type="number"
                          min={0}
                          placeholder="Min: 000"
                          className="form-control ng-untouched ng-pristine ng-valid"
                          value={stake !== null && stake}
                        />
                        <div
                          onClick={() => dispatch(setStake(stake + 100))}
                          className="input-group-append"
                        >
                          <span className="input-group-text">
                            <i className="mdi mdi-plus" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={handleOrderBets}
                  className="col-md-3 mbetting-table-none"
                >
                  <button className="btn btn-betplace">betplace</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-1">
            <ul className="stakesBtns mbetting-table-none">
              {parseButtonValues?.map((button, i) => {
                return (
                  <li onClick={() => handleButtonValue(button?.value)} key={i}>
                    <a className="btn">{button?.value}</a>
                  </li>
                );
              })}
            </ul>
            <div className="col-12 dbetting-table-none">
              <div className="m_stakesBtns">
                {parseButtonValues?.map((button, i) => {
                  return (
                    <a
                      onClick={() => handleButtonValue(button?.value)}
                      key={i}
                      className="btn"
                    >
                      {button?.value}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="col-12 mmac-btns">
              <div className="m_stakesBtns">
                <a
                  onClick={() =>
                    dispatch(setStake(parseButtonValues[0]?.value))
                  }
                  className="btn min-btn"
                >
                  MIN
                </a>
                <a
                  onClick={() =>
                    dispatch(
                      setStake(
                        parseButtonValues?.[parseButtonValues?.length - 1]
                          ?.value,
                      ),
                    )
                  }
                  className="btn max-btn"
                >
                  MAX
                </a>

                <a
                  onClick={() => {
                    dispatch(setStake(null));
                  }}
                  className="btn clear-btn"
                >
                  CLEAR
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              onClick={handleCancelBet}
              className="col-6 dbetting-table-none pr-xs-1"
            >
              <button className="btn btn-cancel">cacnel</button>
            </div>
            <div
              onClick={handleOrderBets}
              className="col-6 dbetting-table-none pl-xs-1"
            >
              <button className="btn btn-betplace" disabled>
                betplace
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
