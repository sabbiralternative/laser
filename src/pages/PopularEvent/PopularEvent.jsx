import { useNavigate } from "react-router-dom";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useLatestEvent } from "../../hooks/latestEvent";

const PopularEvent = () => {
  const { data } = useLatestEvent();
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="ng-star-inserted">
              <div className="row">
                <div className="col-xl-8 px-lg-1">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="match-menu inplay_section">
                        <div data-v-fe346d08 className="popular-events">
                          <div data-v-fe346d08 className="play-days-match">
                            {data?.map((item) => {
                              return (
                                <div
                                  onClick={() =>
                                    navigate(
                                      `/sports-details/${item?.eventTypeId}/${item?.eventId}`,
                                    )
                                  }
                                  key={item?.eventId}
                                  data-v-fe346d08
                                  className="match-item"
                                >
                                  <div data-v-fe346d08 className="match-icon">
                                    <img
                                      data-v-fe346d08
                                      src={`/icon/${item?.eventTypeId}.svg`}
                                      alt="cricket"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div data-v-fe346d08 className="match-info">
                                    <span
                                      data-v-fe346d08
                                      className="match-name"
                                    >
                                      {item?.eventName}
                                    </span>
                                    <span
                                      data-v-fe346d08
                                      className="match-time"
                                    >
                                      {item?.date}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default PopularEvent;
