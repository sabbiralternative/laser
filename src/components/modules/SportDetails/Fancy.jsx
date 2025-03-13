import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { Status } from "../../../const";
import BetSlip from "./BetSlip";
import Ladder from "../../modals/Ladder";

const Fancy = ({ data }) => {
  const [ladderData, setLadderData] = useState([]);
  const [getLadder] = useGetLadderMutation();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { runnerId } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
        const pnl = pnlBySelection?.find((p) => p?.RunnerId === games?.id);
        if (pnl) {
          updatedPnl.push(pnl?.pnl);
        }
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      navigate("/login");
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (marketId) => {
    if (marketId) {
      const res = await getLadder({ marketId }).unwrap();

      if (res.success) {
        setLadderData(res.result);
      }
    }
  };
  return (
    <>
      {ladderData?.length > 0 && (
        <Ladder ladderData={ladderData} setLadderData={setLadderData} />
      )}
      <div className="dScreen fancy_odds">
        <div className="row mx-0 head_bg">
          <div className="col-md-12 col-8 px-0">
            <p className="match-odds">
              fancy
              <i className="mdi mdi-information-outline" />
            </p>
          </div>
        </div>
        <div type="nav de_fancyTab" className="tab-container">
          <ul
            role="tablist"
            className="nav nav-nav de_fancyTab"
            aria-label="Tabs"
          >
            <li className="active nav-item">
              <a
                href="javascript:void(0);"
                role="tab"
                className="nav-link active"
                aria-controls="tab1"
                aria-selected="true"
                id="tab1-link"
              >
                <span />
                <span style={{ textTransform: "uppercase" }}>all</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="javascript:void(0);"
                role="tab"
                className="nav-link"
                aria-controls="tab1"
                aria-selected="false"
                id="tab1-link"
              >
                <span />
                <span style={{ textTransform: "uppercase" }}>odd/even</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="javascript:void(0);"
                role="tab"
                className="nav-link"
                aria-controls="tab1"
                aria-selected="false"
                id="tab1-link"
              >
                <span />
                <span style={{ textTransform: "uppercase" }}>sessions</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="javascript:void(0);"
                role="tab"
                className="nav-link"
                aria-controls="tab1"
                aria-selected="false"
                id="tab1-link"
              >
                <span />
                <span style={{ textTransform: "uppercase" }}>w/p market</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="javascript:void(0);"
                role="tab"
                className="nav-link"
                aria-controls="tab1"
                aria-selected="false"
                id="tab1-link"
              >
                <span />
                <span style={{ textTransform: "uppercase" }}>xtra market</span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <tab
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-link"
              className="tab-pane active"
            >
              <div>
                <div className="row mx-0 odds_header">
                  <div className="col-md-5 col-7 px-0" />
                  <div className="col-md-7 col-5 px-0">
                    <div className="btn-group dOddsBox">
                      <button className="lay2" />
                      <button className="lay1" />
                      <button className="lay">no</button>
                      <button className="back">yes</button>
                      <button className="min-max-bet">Min-Max</button>
                    </div>
                  </div>
                </div>
                {data?.map((game) => {
                  const pnl =
                    pnlBySelection?.find((pnl) => pnl?.MarketId === game?.id) ||
                    {};

                  return (
                    <div key={game?.id}>
                      <div>
                        <div className="row mx-0 odds_body">
                          <div className="col-md-5 col-7 px-0">
                            <p
                              onClick={() => handleGetLadder(pnl?.MarketId)}
                              className="team-name"
                              style={{
                                cursor: pnl?.MarketId ? "pointer" : "auto",
                              }}
                            >
                              <b>{game?.name}</b>
                              {pnl && (
                                <span
                                  className={`${
                                    pnl?.pnl > 0 ? "plus-book" : "minus-book"
                                  }`}
                                >
                                  <i className="mdi mdi-arrow-right"></i>
                                  {pnl?.pnl}{" "}
                                </span>
                              )}
                            </p>
                            <span className="mo_min-max">
                              <b>min max</b>100- {game?.maxLiabilityPerBet}
                            </span>
                          </div>
                          <div className="col-md-7 col-5 px-0">
                            <div className="btn-group dOddsBox">
                              <button className="back back2" />
                              <button className="back back1"></button>
                              <button
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.lay?.[0]?.line
                                  )
                                }
                                className="lay"
                              >
                                {game?.runners?.[0]?.lay?.[0]?.line}
                                <span>
                                  {" "}
                                  {game?.runners?.[0]?.lay?.[0]?.price}
                                </span>
                              </button>
                              <button
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.back?.[0]?.line
                                  )
                                }
                                className="back"
                              >
                                {game?.runners?.[0]?.back?.[0]?.line}
                                <span>
                                  {" "}
                                  {game?.runners?.[0]?.back?.[0]?.price}
                                </span>
                              </button>
                              <button className="min-max-bet">
                                <dl className="fancy-info">
                                  <dd>100- {game?.maxLiabilityPerBet}</dd>
                                </dl>
                              </button>
                              {game?.status === Status.SUSPENDED && (
                                <div className="suspended">suspended</div>
                              )}
                            </div>
                          </div>
                          {runnerId === game?.id && (
                            <BetSlip setRunnerId={setRunnerId} />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </tab>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fancy;
