const DesktopBetRightSidebar = () => {
  return (
    <div className="col-xl-4">
      <div className="openBets">
        <div id="collapseSetting" className="collapse">
          <div>
            <div style={{ position: "relative" }}>
              <div className="stakeDiv">
                <h3>stake</h3>
                <dl id className="setting-block stake-setting">
                  <dd>
                    <input
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </dd>
                  <dd>
                    <input
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </dd>
                  <dd>
                    <input
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </dd>
                  <dd>
                    <input
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </dd>
                  <dd>
                    <input
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </dd>
                  <dd>
                    <input
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </dd>
                  <dd>
                    <input
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </dd>
                  <dd>
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
        <h2>open bets</h2>
      </div>
    </div>
  );
};

export default DesktopBetRightSidebar;
