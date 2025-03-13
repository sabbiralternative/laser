import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { Status } from "../../../const";
import BetSlip from "./BetSlip";

const MatchOddsBookmaker = ({ data }) => {
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
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
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
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
        exposure: updatedPnl,
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

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId
  ) => {
    let runner, largerExposure, layValue, oppositeLayValue, lowerExposure;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, eventId]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  return (
    <>
      {data?.map((game) => {
        return (
          <div
            key={game?.id}
            className={`dScreen  ${
              game.btype === "BOOKMAKER" ? "book_makers" : ""
            }`}
          >
            <div className="row mx-0 head_bg">
              <div className="col-md-12 col-8 px-0">
                <p className="match-odds">
                  {game?.name?.toUpperCase()}
                  <a>
                    <i className="mdi mdi-information-outline" />
                  </a>
                </p>
              </div>
              <div className="col-md-6 col-4 text-end px-0 d-inline-block d-lg-none">
                <a
                  href="javascript:void(0)"
                  className="btn btn-tv-bets mob_open_bets"
                >
                  <span>Bets</span>
                </a>
              </div>
            </div>
            <div className="row mx-0 odds_header">
              <div className="col-md-5 col-7 px-0">
                <div className="minmax mm-fi">
                  <dl className="fancy-info">
                    <dt>Min/Max</dt>
                    <dd>100-{game?.maxLiabilityPerBet}</dd>
                  </dl>
                </div>
              </div>
              <div className="col-md-7 col-5 px-0">
                <div className="btn-group dOddsBox">
                  <button className="back2" />
                  <button className="back1" />
                  <button className="back">back</button>
                  <button className="lay">lay</button>
                  <button className="min-max-bet">
                    <dl className="fancy-info">
                      <dt>Min/Max</dt>
                      <dd>0-1</dd>
                    </dl>
                  </button>
                </div>
              </div>
            </div>
            {game?.runners?.map((runner) => {
              const pnl = pnlBySelection?.find(
                (pnl) => pnl?.RunnerId === runner?.id
              );
              const predictOddValues = predictOdd?.find(
                (val) => val?.id === runner?.id
              );

              return (
                <div key={runner?.id} className="row mx-0 odds_body">
                  <div className="col-md-5 col-7 px-0">
                    <p className="team-name">{runner?.name}</p>
                  </div>
                  <div className="col-md-7 col-5 px-0">
                    <div className="btn-group dOddsBox">
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "back",
                            game,
                            runner,
                            runner?.back[2]?.price
                          )
                        }
                        className="back back2"
                      >
                        {runner?.back?.[2]?.price}
                        <span> {runner?.back?.[2]?.size}</span>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "back",
                            game,
                            runner,
                            runner?.back[1]?.price
                          )
                        }
                        className="back back1"
                      >
                        {runner?.back?.[1]?.price}
                        <span> {runner?.back?.[1]?.size}</span>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "back",
                            game,
                            runner,
                            runner?.back[0]?.price
                          )
                        }
                        className="back"
                      >
                        {runner?.back?.[0]?.price}
                        <span> {runner?.back?.[0]?.size}</span>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "lay",
                            game,
                            runner,
                            runner?.lay[0]?.price
                          )
                        }
                        className="lay"
                      >
                        {runner?.lay?.[0]?.price}
                        <span> {runner?.lay?.[0]?.size}</span>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "lay",
                            game,
                            runner,
                            runner?.lay?.[1]?.price
                          )
                        }
                        className="lay lay1"
                      >
                        {runner?.lay?.[1]?.price}
                        <span> {runner?.lay?.[1]?.size}</span>
                      </button>
                      <button
                        onClick={() =>
                          handleBetSlip(
                            "lay",
                            game,
                            runner,
                            runner?.lay?.[2]?.price
                          )
                        }
                        className="lay lay2"
                      >
                        {runner?.lay?.[2]?.price}
                        <span> {runner?.lay?.[2]?.size}</span>
                      </button>

                      {runner?.status === Status.SUSPENDED && (
                        <div className="suspended">suspended</div>
                      )}
                    </div>
                  </div>
                  {runnerId === runner?.id && <BetSlip />}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default MatchOddsBookmaker;
