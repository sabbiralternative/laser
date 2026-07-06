import { useEffect, useState } from "react";
import ChooseAmount from "../../components/modules/Deposit/ChooseAmount";
import PaymentMethod from "../../components/modules/Deposit/PaymentMethod";
import PaymentProof from "../../components/modules/Deposit/PaymentProof";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";
import Sidebar from "../../components/shared/Sidebar/Sidebar";

const Deposit = () => {
  const [amount, setAmount] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState(false);
  const [uploadTransaction, setUploadTransaction] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const [tabs, setTabs] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paymentMethods, uploadTransaction]);

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
                        {!paymentMethods && !uploadTransaction && (
                          <ChooseAmount
                            amount={amount}
                            setAmount={setAmount}
                            setPaymentMethods={setPaymentMethods}
                          />
                        )}

                        {/* step 2 */}
                        {paymentMethods && (
                          <PaymentMethod
                            setTabs={setTabs}
                            tabs={tabs}
                            paymentId={paymentId}
                            setUploadTransaction={setUploadTransaction}
                            setPaymentMethods={setPaymentMethods}
                            setPaymentId={setPaymentId}
                            amount={amount}
                          />
                        )}
                        {/* step 3 */}
                        {uploadTransaction && (
                          <PaymentProof
                            tabs={tabs}
                            paymentId={paymentId}
                            amount={amount}
                          />
                        )}
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

export default Deposit;
