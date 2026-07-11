import { useParams } from "react-router-dom";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetEventDetailsQuery,
  useVideoMutation,
} from "../../redux/features/events/events";
import { useEffect, useState } from "react";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import Fancy from "../../components/modules/SportDetails/Fancy";
import MatchOdds from "../../components/modules/SportDetails/MatchOdds";
import Score from "../../components/modules/SportDetails/Score";
import HorseGreyhoundSportsDetails from "../../components/modules/SportDetails/HorseGreyhoundSportsDetails";
import { Settings } from "../../api";
import Bookmaker from "../../components/modules/SportDetails/Bookmaker";
import Premium from "../../components/modules/SportDetails/Premium";

const SportDetails = () => {
  const [sportsVideo, { data: iframe }] = useVideoMutation();
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );

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
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const matchOdds = data?.result?.filter(
    (game) =>
      game.btype === "MATCH_ODDS" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );
  const bookmaker = data?.result?.filter(
    (game) =>
      game.btype === "BOOKMAKER" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );

  const tiedMatch = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true &&
      game?.name === "tied match",
  );

  useEffect(() => {
    const handleGetVideo = async () => {
      const payload = {
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        casinoCurrency: Settings.casino_currency,
      };
      await sportsVideo(payload).unwrap();
    };
    handleGetVideo();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div>
              <div className="row">
                <div className="col-xl-8 px-lg-0">
                  {eventTypeId != 7 && eventTypeId != 4339 ? (
                    <div className="row">
                      <div className="col-12 bg-dark">
                        <h2 className="eventTitle">
                          {data?.result?.[0]?.eventName}
                          <span>In Play</span>
                        </h2>
                      </div>
                    </div>
                  ) : null}

                  <div className="sr-widget-1" />
                  {eventTypeId == 4 && data?.iscore && (
                    <Score iscore={data?.iscore} />
                  )}
                  {data?.score &&
                    data?.score?.tracker &&
                    data?.score?.tracker !== null && (
                      <div className="w-full overflow-hidden h-[125px]">
                        <iframe
                          id="videoComponent"
                          className="w-full h-auto relative overflow-hidden   bg-transparent"
                          src={data?.score?.tracker}
                          width="100%"
                          allowfullscreen=""
                        ></iframe>
                      </div>
                    )}
                  {iframe?.result?.url && data?.score?.hasVideo && (
                    <iframe
                      id="videoComponent"
                      className="w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] relative overflow-hidden h-[55vw] md:h-[58vw] bg-transparent"
                      src={iframe?.result?.url}
                      width="100%"
                      allowfullscreen=""
                    ></iframe>
                  )}
                  {matchOdds?.length > 0 && <MatchOdds data={matchOdds} />}
                  {data?.premium && data?.premium?.eventId && (
                    <Premium premium={data?.premium} />
                  )}
                  {bookmaker?.length > 0 && <Bookmaker data={bookmaker} />}
                  {data?.result?.length > 0 && <Fancy data={data?.result} />}
                  {eventTypeId == 7 || eventTypeId == 4339 ? (
                    <HorseGreyhoundSportsDetails data={data?.result} />
                  ) : null}
                  {tiedMatch?.length > 0 && <MatchOdds data={tiedMatch} />}
                </div>

                <DesktopBetRightSidebar hasVideo={data?.score?.hasVideo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportDetails;
