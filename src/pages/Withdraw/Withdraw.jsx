import { useState } from "react";
import ChooseAmount from "../../components/modules/Withdraw/ChooseAmount";
import BankAccounts from "../../components/modules/Withdraw/BankAccounts";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [showBanks, setShowBanks] = useState(false);

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
                      <main className="flex w-full mt-2">
                        {!showBanks && (
                          <ChooseAmount
                            setShowBanks={setShowBanks}
                            setAmount={setAmount}
                            amount={amount}
                          />
                        )}
                        {showBanks && <BankAccounts amount={amount} />}
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

export default Withdraw;
