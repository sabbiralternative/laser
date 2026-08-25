import { useParams } from "react-router-dom";
import { useAccessTokenMutation } from "../../../redux/features/casino/casino.api";
import { useState } from "react";
import { useCurrentBets } from "../../../hooks/currentBets";
import { useSelector } from "react-redux";
import EditStake from "./EditStake";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const DesktopBetRightSidebar = ({ hasVideo }) => {
  const { getLanguage } = useLanguage();
  const { showEditStake } = useSelector((state) => state.global);
  const { eventTypeId, eventId } = useParams();
  const { data: currentBet } = useCurrentBets(eventId);
  const [getIFrame, { data: IFrame }] = useAccessTokenMutation();
  const [showIFrame, setShowIFrame] = useState(true);

  const handleSportsVideo = () => {
    if (showIFrame) {
      setShowIFrame(false);
      const payload = {
        eventTypeId,
        eventId,
        type: "video",
      };
      getIFrame(payload);
    } else {
      setShowIFrame(true);
    }
  };

  return (
    <div className="col-xl-4">
      <div className="col-xl-4">
        <div className="openBets">
          {showEditStake && <EditStake />}

          {IFrame?.result?.url && hasVideo && showIFrame && (
            <div
              id="collapseBasic"
              aria-hidden="false"
              className="collapse ng-star-inserted in show"
              style={{ display: "block" }}
            >
              <div
                className="tv-block ng-star-inserted"
                style={{ position: "relative" }}
              >
                <iframe
                  id="tvStr"
                  className="LiveStream-video-col"
                  src={IFrame?.result?.url}
                />
              </div>
            </div>
          )}

          <h2>
            {getLanguage(LanguageKey.OPEN_BETS)}
            {hasVideo && (
              <a
                onClick={handleSportsVideo}
                aria-controls="collapseBasic"
                className="desk-tv-icon ng-star-inserted"
                aria-expanded="true"
              >
                <i className="mdi mdi-television" />
              </a>
            )}
          </h2>
          <div>
            <div>
              <div className="openBetsTabs">
                <div className="tab-container">
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane active"
                    >
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <td>{getLanguage(LanguageKey.NATION)}</td>
                              <td>{getLanguage(LanguageKey.ODDS)}</td>
                              <td>{getLanguage(LanguageKey.STAKE)}</td>
                              <td>{getLanguage(LanguageKey.DATE)}</td>
                            </tr>
                          </thead>
                          <tbody>
                            {currentBet?.map((bet) => {
                              return (
                                <tr
                                  key={bet?.betId}
                                  className={`ng-star-inserted  ${
                                    bet?.betType === "Back"
                                      ? "greenbg"
                                      : "redbg"
                                  }`}
                                >
                                  <td>{bet?.nation}</td>
                                  <td>{bet?.userRate}</td>
                                  <td>{bet?.amount}</td>
                                  <td>{bet?.placeDate}</td>
                                </tr>
                              );
                            })}
                            {!currentBet?.length && (
                              <tr>
                                <td colSpan="10" className="text-center">
                                  {getLanguage(LanguageKey.NO_RECORD_FOUND)}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopBetRightSidebar;
