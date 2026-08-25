import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { LanguageKey } from "../../const";
import { useCurrentBets } from "../../hooks/currentBets";
import useLanguage from "../../hooks/use-language";

const UnsettledBets = () => {
  const { getLanguage } = useLanguage();
  const { data: currentBet } = useCurrentBets();
  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="ng-star-inserted">
              <div className="container-fluid">
                <div className="row my-1">
                  <div className="col-md-12">
                    <div className="userTables">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="ng-star-inserted">
                            {getLanguage(LanguageKey.UNSETTLED_BETS)}
                          </h2>

                          <div className="table-responsive">
                            <table className="table mb-0 table-bordered">
                              <thead>
                                <tr>
                                  <th>{getLanguage(LanguageKey.BET_ID)}</th>
                                  <th>{getLanguage(LanguageKey.EVENT_NAME)}</th>
                                  <th>{getLanguage(LanguageKey.MARKET)}</th>
                                  <th>{getLanguage(LanguageKey.SELECTION)}</th>
                                  <th>{getLanguage(LanguageKey.TYPE)}</th>
                                  <th>{getLanguage(LanguageKey.USER_RATE)}</th>
                                  <th>{getLanguage(LanguageKey.STAKE)}</th>
                                  <th>
                                    {getLanguage(LanguageKey.PLACED_DATE)}
                                  </th>
                                  <th>{getLanguage(LanguageKey.MATCH_DATE)}</th>
                                </tr>
                              </thead>
                              <tbody className="ng-star-inserted">
                                {currentBet?.map((bet) => {
                                  return (
                                    <tr
                                      key={bet?.betId}
                                      className={` ng-star-inserted ${
                                        bet?.betType === "Back" ? "back" : "lay"
                                      }`}
                                    >
                                      <td>{bet?.betId}</td>
                                      <td>{bet?.nation}</td>
                                      <td>{bet?.marketName}</td>
                                      <td>{bet?.eventName}</td>
                                      <td>{bet?.betType}</td>
                                      <td>{bet?.userRate}</td>
                                      <td>{bet?.amount}</td>
                                      <td>{bet?.placeDate}</td>
                                      <td>N/A</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            <div className="pagination ng-star-inserted">
                              <nav
                                aria-label="pagination example"
                                className="Pager1"
                              >
                                <ul className="pagination pagination-circle justify-content-center">
                                  <li className="page-item disabled ng-star-inserted">
                                    <a
                                      href="javascript:void(0)"
                                      className="page-link"
                                    >
                                      « Previous
                                    </a>
                                  </li>
                                  <li className="page-item active ng-star-inserted">
                                    <a
                                      href="javascript:void(0)"
                                      className="page-link"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li className="page-item disabled ng-star-inserted">
                                    <a
                                      href="javascript:void(0)"
                                      className="page-link"
                                    >
                                      Next »
                                    </a>
                                  </li>
                                </ul>
                              </nav>
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
        </div>
      </div>
    </div>
  );
};

export default UnsettledBets;
