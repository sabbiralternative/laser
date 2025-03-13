import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useCurrentBets } from "../../hooks/currentBets";

const UnsettledBets = () => {
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
                          <h2 className="ng-star-inserted">Unsettled Bets</h2>

                          <div className="table-responsive">
                            <table className="table mb-0 table-bordered">
                              <thead>
                                <tr>
                                  <th>bet id</th>
                                  <th>event</th>
                                  <th>market type</th>
                                  <th>selection</th>
                                  <th>type</th>
                                  <th>odds req.</th>
                                  <th>stake</th>
                                  <th>place time</th>
                                  <th>matched time</th>
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
