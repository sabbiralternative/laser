import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Events from "../../components/modules/Sports/Events";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";
import Banner from "../../components/modules/Home/Banner";
import Notification from "../../components/ui/Notification/Notification";
import EventTab from "../../components/modules/Sports/EventTab";
import { useLocation } from "react-router-dom";

const Sports = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div>
              <div className="row">
                <div className="col-xl-8 px-lg-1">
                  <div className="card">
                    <div className="card-body p-0">
                      <Notification />
                      <Banner />
                      {pathname !== "/sports/0" && <EventTab />}

                      <Events />
                    </div>
                  </div>
                  <div className="row mobile-hide">
                    <div className="col-md-12">
                      <div className="inner-footer">
                        <div className="support-wrap">
                          <dl className="support-mail">
                            <a className="rules-btn-home">Privacy Policy</a>
                            <a className="rules-btn-home arrow">KYC</a>
                            <a className="rules-btn-home arrow">
                              Terms and Conditions
                            </a>
                            <a className="rules-btn-home arrow">
                              Rules and Regulations
                            </a>
                            <a className="rules-btn-home arrow">
                              Responsible Gambling
                            </a>
                          </dl>
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

export default Sports;
