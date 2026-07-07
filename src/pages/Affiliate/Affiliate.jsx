import "./affiliate.css";
import TodayStatusSection from "../../components/modules/Affiliate/TodayStatusSection";
import InviteSection from "../../components/modules/Affiliate/InviteSection";
import BonusInformation from "../../components/modules/Affiliate/BonusInformation";
import TodayProfitLoss from "../../components/modules/Affiliate/TodayProfitLoss";
import { Fragment } from "react";
import UserList from "../../components/modules/Affiliate/UserList";
import ProfitLoss from "../../components/modules/Affiliate/ProfitLoss";
import Reports from "../../components/modules/Affiliate/Reports";
import Footer from "../../components/modules/Affiliate/Footer";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";

const Affiliate = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get("tab");

  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="ng-star-inserted">
              <div className="row">
                <div className="px-lg-1  flex-1 flex white bg-gray1">
                  <div className="h-full w-full overflow-auto hide-scrollbar">
                    <div className="w-full router-ctn max-md:pb-9">
                      <main className="flex w-full">
                        <div className="main-content w-full mt-2">
                          <div
                            data-v-4c49d924
                            className="container"
                            style={{ maxWidth: "100%" }}
                          >
                            <Footer />
                            {(tab === "dashboard" || !tab) && (
                              <Fragment>
                                <TodayStatusSection />
                                <InviteSection />
                                {/* <TopFiveLossUser /> */}
                                <BonusInformation />
                                <TodayProfitLoss />
                              </Fragment>
                            )}
                            {tab === "user-list" && (
                              <div data-v-4c49d924 className="">
                                <UserList />
                              </div>
                            )}
                            {tab === "pnl" && (
                              <div data-v-4c49d924 className="">
                                <ProfitLoss />
                              </div>
                            )}
                            {tab === "reports" && (
                              <div data-v-4c49d924 className="">
                                <Reports />
                              </div>
                            )}
                          </div>
                        </div>
                      </main>
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

export default Affiliate;
