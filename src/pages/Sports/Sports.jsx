import Banner from "../../components/modules/Sports/Banner";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Events from "../../components/modules/Sports/Events";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";

const Sports = () => {
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
                      <div>
                        <div className="marquee-box">
                          <h4>
                            <i className="mdi mdi-microphone-outline" />
                            News
                          </h4>
                        </div>
                      </div>
                      <Banner />
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
