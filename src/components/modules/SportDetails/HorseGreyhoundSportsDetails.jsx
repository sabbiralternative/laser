import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { Status } from "../../../const";
import BetSlip from "./BetSlip";

const HorseGreyhoundSportsDetails = ({ data }) => {
  const [timeDiff, setTimeDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const { eventId } = useParams();
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
        selectedBetName: runner?.horse_name,
        name: games.runners.map((runner) => runner.horse_name),
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

      dispatch(setRunnerId(runner?.id));

      dispatch(setPlaceBetValues(betData));
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  useEffect(() => {
    if (!data?.[0]?.openDate) return;

    const targetDateStr = data[0].openDate;
    const [date, time] = targetDateStr.split(" ");
    const [day, month, year] = date.split("/");
    const [hour, minute, second] = time.split(":");

    const targetDate = new Date(year, month - 1, day, hour, minute, second);

    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        const currentDate = new Date();
        const diffInMs = targetDate - currentDate;

        if (diffInMs <= 0) {
          clearInterval(interval);
          setTimeDiff({ day: 0, hour: 0, minute: 0, second: 0 });
          return;
        }

        const day = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minute = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setTimeDiff({ day, hour, minute, second });
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);
  return (
    <>
      <div className="horse-banner">
        <img
          style={{ width: "100%" }}
          src="https://g1ver.sprintstaticdata.com/v42/static/front/img/10.png"
          className="img-fluid"
        />
        <div className="horse-banner-detail">
          <div className="text-success">OPEN</div>
          {timeDiff?.day ||
          timeDiff?.hour ||
          timeDiff?.minute ||
          timeDiff?.second ? (
            <div className="horse-timer">
              <span style={{ display: "flex", gap: "5px" }}>
                {timeDiff?.day > 0 && (
                  <span>
                    {timeDiff?.day} <small>Day</small>
                  </span>
                )}
                {timeDiff?.hour > 0 && (
                  <span>
                    {timeDiff?.hour} <small>Hour</small>
                  </span>
                )}
                {timeDiff?.minute > 0 && (
                  <span>
                    {timeDiff?.minute} <small>Minutes</small>
                  </span>
                )}
                {timeDiff?.hour === 0 && timeDiff?.minute < 60 && (
                  <span>
                    {timeDiff?.second} <small>Seconds</small>
                  </span>
                )}
              </span>
              <span>Remaining</span>
            </div>
          ) : null}

          <div className="time-detail">
            <p>{data?.[0]?.eventName}</p>
            <h5>
              <span>{data?.[0]?.openDate}</span>
              <span>| {data?.[0]?.raceType}</span>
            </h5>
          </div>
        </div>
      </div>
      {data?.map((game) => {
        return (
          <div key={game?.id} className={`dScreen`}>
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
            {game?.runners?.map((runner, idx) => {
              const pnl = pnlBySelection?.find(
                (pnl) => pnl?.RunnerId === runner?.id
              );
              const predictOddValues = predictOdd?.find(
                (val) => val?.id === runner?.id
              );

              return (
                <div key={runner?.id} className="row mx-0 odds_body">
                  <div
                    className="col-md-5 col-7 px-0"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <input
                      className="sm-d-none"
                      type="checkbox"
                      name="checkbox-runner-0"
                      id="checkbox-runner-0"
                    />
                    <div
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <div className="sm-d-none">
                        {idx + 1}
                        <br />({idx + 1})
                      </div>
                    </div>
                    <div>
                      <img src={runner?.image_id} />
                    </div>
                    <div>
                      <p className="team-name">
                        {runner?.horse_name}

                        <span>
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
                          {stake && runnerId && predictOddValues && (
                            <b>
                              <span
                                className={`extra-pf ${
                                  predictOddValues?.exposure > 0
                                    ? "plus-book"
                                    : "minus-book"
                                } `}
                              >
                                ({predictOddValues?.exposure})
                              </span>
                            </b>
                          )}
                        </span>
                      </p>
                      <div
                        className="jockey-detail sm-d-none d-md-flex"
                        style={{ display: "flex" }}
                      >
                        {runner?.jocky && (
                          <span className="jockey-detail-box">
                            <b>Jockey:</b>
                            <span style={{ fontWeight: "normal" }}>
                              {runner?.jocky}
                            </span>
                          </span>
                        )}
                        {runner?.trainer && (
                          <span className="jockey-detail-box">
                            <b>Trainer:</b>
                            <span style={{ fontWeight: "normal" }}>
                              {runner?.trainer}
                            </span>
                          </span>
                        )}
                        {runner?.age && (
                          <span className="jockey-detail-box">
                            <b>Age:</b>
                            <span style={{ fontWeight: "normal" }}>
                              {runner?.age}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
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

export default HorseGreyhoundSportsDetails;
