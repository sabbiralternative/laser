import { useParams } from "react-router-dom";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import { useEffect } from "react";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import Fancy from "../../components/modules/SportDetails/Fancy";
import MatchOddsBookmaker from "../../components/modules/SportDetails/MatchOddsBookmaker";
import Score from "../../components/modules/SportDetails/Score";

const SportDetails = () => {
  const { eventTypeId, eventId } = useParams();
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    }
  );
  const filterMatchOddsBookmaker = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true
  );

  const fancyData = data?.result?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true
  );

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

  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div>
              <div className="row">
                <div className="col-xl-8 px-lg-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <div className="marquee-box">
                          <h4>
                            <i className="mdi mdi-microphone-outline" />
                            News
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 bg-dark">
                      <h2 className="eventTitle">
                        {data?.result?.[0]?.eventName}
                        <span>In Play</span>
                      </h2>
                    </div>
                  </div>

                  <div className="sr-widget-1" />
                  {eventTypeId == 4 &&
                    data?.result?.[0]?.score2?.length !== 0 &&
                    !Array.isArray(data?.result?.[0]?.score2) && (
                      <Score score2={data?.result?.[0]?.score2} />
                    )}
                  {filterMatchOddsBookmaker?.length > 0 && (
                    <MatchOddsBookmaker data={filterMatchOddsBookmaker} />
                  )}
                  {fancyData?.length > 0 && <Fancy data={fancyData} />}
                </div>

                <DesktopBetRightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportDetails;
