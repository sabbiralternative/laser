import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import { useOrderMutation } from "../../../redux/features/events/events";
import {
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const BetSlip = () => {
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);
  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  const [betDelay, setBetDelay] = useState("");

  useEffect(() => {
    dispatch(setPrice(placeBetValues?.price));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null
      )
    );
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
        betDelay: placeBetValues?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: placeBetValues?.betDelay,
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
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    const payloadData = [
      {
        ...payload,
        site: Settings.siteUrl,
        nounce: uuidv4(),
        isbetDelay: Settings.betDelay,
      },
    ];
    setLoading(true);
    let delay = 0;
    if (
      (eventTypeId == 4 || eventTypeId == 2) &&
      placeBetValues?.btype === "MATCH_ODDS" &&
      price > 3 &&
      placeBetValues?.name?.length === 2
    ) {
      delay = 9000;
    }
    if (
      (eventTypeId == 4 || eventTypeId == 2) &&
      placeBetValues?.btype === "MATCH_ODDS" &&
      price > 7 &&
      placeBetValues?.name?.length === 3
    ) {
      delay = 9000;
    } else {
      setBetDelay(placeBetValues?.betDelay);
      delay = Settings.betDelay ? placeBetValues?.betDelay * 1000 : 0;
    }
    // Introduce a delay before calling the API
    setTimeout(async () => {
      const res = await createOrder(payloadData).unwrap();
      if (res?.success) {
        setLoading(false);
        refetchExposure();
        refetchBalance();
        dispatch(setRunnerId(null));
        refetchCurrentBets();
        setBetDelay("");
        toast.success(res?.result?.result?.placed?.[0]?.message);
      } else {
        setLoading(false);
        toast.error(
          res?.error?.status?.[0]?.description || res?.error?.errorMessage
        );
        setBetDelay("");
      }
    }, delay);
  };

  const closeBetSlip = () => {
    dispatch(setRunnerId(null));
  };

  useEffect(() => {
    if (betDelay > 0) {
      setTimeout(() => {
        setBetDelay((prev) => prev - 1);
      }, 1000);
    } else {
      setBetDelay(null);
    }
  }, [setBetDelay, betDelay]);
  return (
    <div className="col-md-12 px-0">
      <div>
        <div className="bettingTable back">
          <div className="row justify-content-end py-1">
            <div className="col-md-8">
              <div className="row">
                <div
                  onClick={closeBetSlip}
                  className="col-md-2 px-0 mbetting-table-none"
                >
                  <button className="btn btn-cancel">cacnel</button>
                </div>
                <div className="col-md-7 px-0">
                  <div className="row">
                    <div className="col-md-7 col-6 px-1">
                      <div className="input-group">
                        {!placeBetValues?.isWeak && (
                          <div
                            onClick={() =>
                              handleDecreasePrice(
                                price,
                                placeBetValues,
                                dispatch,
                                setPrice
                              )
                            }
                            className="input-group-prepend"
                          >
                            <span className="input-group-text">
                              <i className="mdi mdi-minus" />
                            </span>
                          </div>
                        )}

                        <input
                          onChange={(e) => dispatch(setPrice(e.target.value))}
                          type="number"
                          min="1.01"
                          max="999.99"
                          className="form-control ng-untouched ng-pristine"
                          value={price}
                        />
                        {!placeBetValues?.isWeak && (
                          <div
                            onClick={() =>
                              handleIncreasePrice(
                                price,
                                placeBetValues,
                                dispatch,
                                setPrice
                              )
                            }
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
                        onChange={(e) => dispatch(setStake(e.target.value))}
                        type="number"
                        min={0}
                        placeholder="Min: 000"
                        className="form-control mbetting-table-none ng-untouched ng-pristine ng-valid"
                        value={stake !== null && stake}
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
                  <li onClick={() => dispatch(setStake(button?.value))} key={i}>
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
                      onClick={() => dispatch(setStake(button?.value))}
                      key={i}
                      className="btn"
                    >
                      {button?.value}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="row">
            <div
              onClick={closeBetSlip}
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
