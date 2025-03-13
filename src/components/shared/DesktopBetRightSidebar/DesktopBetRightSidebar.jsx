import { useParams } from "react-router-dom";
import { useAccessTokenMutation } from "../../../redux/features/casino/casino.api";
import { useState } from "react";
import { useCurrentBets } from "../../../hooks/currentBets";

const DesktopBetRightSidebar = ({ hasVideo }) => {
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
          <div id="collapseSetting" className="collapse show">
            <div>
              <div style={{ position: "relative" }}>
                <div className="stakeDiv">
                  <h3>stake</h3>
                  <dl id className="setting-block stake-setting">
                    <dd className="ng-star-inserted">
                      <input
                        type="number"
                        className="ng-untouched ng-pristine ng-valid"
                      />
                    </dd>
                    <dd className="ng-star-inserted">
                      <input
                        type="number"
                        className="ng-untouched ng-pristine ng-valid"
                      />
                    </dd>
                    <dd className="ng-star-inserted">
                      <input
                        type="number"
                        className="ng-untouched ng-pristine ng-valid"
                      />
                    </dd>
                    <dd className="ng-star-inserted">
                      <input
                        type="number"
                        className="ng-untouched ng-pristine ng-valid"
                      />
                    </dd>
                    <dd className="ng-star-inserted">
                      <input
                        type="number"
                        className="ng-untouched ng-pristine ng-valid"
                      />
                    </dd>
                    <dd className="ng-star-inserted">
                      <input
                        type="number"
                        className="ng-untouched ng-pristine ng-valid"
                      />
                    </dd>
                    <dd className="ng-star-inserted">
                      <input
                        type="number"
                        className="ng-untouched ng-pristine ng-valid"
                      />
                    </dd>
                    <dd className="ng-star-inserted">
                      <input
                        type="number"
                        className="ng-untouched ng-pristine ng-valid"
                      />
                    </dd>

                    <dd className="col-stake_edit">
                      <a
                        href="javascript:;"
                        id="save"
                        className="btn-send ui-link"
                      >
                        Save
                      </a>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
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
            open bets
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
                              <td>Selname</td>
                              <td>Odds</td>
                              <td>Stake</td>
                              <td>Date/Time</td>
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
                                  No records Found
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
