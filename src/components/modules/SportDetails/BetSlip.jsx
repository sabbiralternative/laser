const BetSlip = () => {
  return (
    <div className="col-md-12 px-0">
      <div>
        <div className="bettingTable back">
          <div className="row justify-content-end py-1">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2 px-0 mbetting-table-none">
                  <button className="btn btn-cancel">cacnel</button>
                </div>
                <div className="col-md-7 px-0">
                  <div className="row">
                    <div className="col-md-7 col-6 px-1">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="mdi mdi-minus" />
                          </span>
                        </div>
                        <input
                          type="number"
                          disabled
                          min="1.01"
                          max="999.99"
                          className="form-control ng-untouched ng-pristine"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="mdi mdi-plus" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-6 px-1">
                      <input
                        type="number"
                        min={0}
                        placeholder="Min: 000"
                        className="form-control mbetting-table-none ng-untouched ng-pristine ng-valid"
                      />
                      <div className="input-group dbetting-table-none">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="mdi mdi-minus" />
                          </span>
                        </div>
                        <input
                          type="number"
                          min={0}
                          placeholder="Min: 000"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="mdi mdi-plus" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mbetting-table-none">
                  <button className="btn btn-betplace" disabled>
                    betplace
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-1">
            <ul className="stakesBtns mbetting-table-none">
              <li>
                <a className="btn">100</a>
              </li>
              <li>
                <a className="btn">5000</a>
              </li>
              <li>
                <a className="btn">500</a>
              </li>
              <li>
                <a className="btn">25000</a>
              </li>
              <li>
                <a className="btn">50000</a>
              </li>
              <li>
                <a className="btn">100000</a>
              </li>
              <li>
                <a className="btn">500000</a>
              </li>
              <li>
                <a className="btn">1000000</a>
              </li>
            </ul>
            <div className="col-12 dbetting-table-none">
              <div className="m_stakesBtns">
                <a className="btn">100</a>
                <a className="btn">5000</a>
                <a className="btn">500</a>
                <a className="btn">25000</a>
                <a className="btn">50000</a>
                <a className="btn">100000</a>
                <a className="btn">500000</a>
                <a className="btn">1000000</a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 dbetting-table-none pr-xs-1">
              <button className="btn btn-cancel">cacnel</button>
            </div>
            <div className="col-6 dbetting-table-none pl-xs-1">
              <button className="btn btn-betplace" disabled>
                betplace
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
