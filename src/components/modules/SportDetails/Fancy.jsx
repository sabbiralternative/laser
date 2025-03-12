const Fancy = () => {
  return (
    <div className="dScreen fancy_odds">
      <div className="row mx-0 head_bg">
        <div className="col-md-12 col-8 px-0">
          <p className="match-odds">
            fancy
            <i className="mdi mdi-information-outline" />
          </p>
        </div>
      </div>
      <div type="nav de_fancyTab" className="tab-container">
        <ul
          role="tablist"
          className="nav nav-nav de_fancyTab"
          aria-label="Tabs"
        >
          <li className="active nav-item">
            <a
              href="javascript:void(0);"
              role="tab"
              className="nav-link active"
              aria-controls="tab1"
              aria-selected="true"
              id="tab1-link"
            >
              <span />
              <span style={{ textTransform: "uppercase" }}>all</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              role="tab"
              className="nav-link"
              aria-controls="tab1"
              aria-selected="false"
              id="tab1-link"
            >
              <span />
              <span style={{ textTransform: "uppercase" }}>odd/even</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              role="tab"
              className="nav-link"
              aria-controls="tab1"
              aria-selected="false"
              id="tab1-link"
            >
              <span />
              <span style={{ textTransform: "uppercase" }}>sessions</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              role="tab"
              className="nav-link"
              aria-controls="tab1"
              aria-selected="false"
              id="tab1-link"
            >
              <span />
              <span style={{ textTransform: "uppercase" }}>w/p market</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              role="tab"
              className="nav-link"
              aria-controls="tab1"
              aria-selected="false"
              id="tab1-link"
            >
              <span />
              <span style={{ textTransform: "uppercase" }}>xtra market</span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <tab
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-link"
            className="tab-pane active"
          >
            <div>
              <div className="row mx-0 odds_header">
                <div className="col-md-5 col-7 px-0" />
                <div className="col-md-7 col-5 px-0">
                  <div className="btn-group dOddsBox">
                    <button className="lay2" />
                    <button className="lay1" />
                    <button className="lay">no</button>
                    <button className="back">yes</button>
                    <button className="min-max-bet">Min-Max</button>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Runs ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          46
                          <span>100</span>
                        </button>
                        <button className="back">
                          48
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Runs AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          59
                          <span>100</span>
                        </button>
                        <button className="back">
                          61
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Runs ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          162
                          <span>100</span>
                        </button>
                        <button className="back">
                          165
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Runs AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          224
                          <span>100</span>
                        </button>
                        <button className="back">
                          227
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Match 1st Over Run Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          6<span>100</span>
                        </button>
                        <button className="back">
                          7<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Fall of 1st wkt Runs AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          28
                          <span>120</span>
                        </button>
                        <button className="back">
                          28
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Fall of 1st wkt Runs ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          23
                          <span>120</span>
                        </button>
                        <button className="back">
                          23
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>E Morgan Runs Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          23
                          <span>120</span>
                        </button>
                        <button className="back">
                          23
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>P Mustard Runs Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          21
                          <span>120</span>
                        </button>
                        <button className="back">
                          21
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>C Ferguson Runs Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          24
                          <span>120</span>
                        </button>
                        <button className="back">
                          24
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>S Watson Runs Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          32
                          <span>120</span>
                        </button>
                        <button className="back">
                          32
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>C Ferguson Boundaries Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>S Watson Boundaries Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          5<span>100</span>
                        </button>
                        <button className="back">
                          6<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>P Mustard Boundaries Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>E Morgan Boundaries Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Pship Boundaries AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          4<span>100</span>
                        </button>
                        <button className="back">
                          5<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Pship Boundaries ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt lost to Balls ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          18
                          <span>120</span>
                        </button>
                        <button className="back">
                          18
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt lost to Balls AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          20
                          <span>120</span>
                        </button>
                        <button className="back">
                          20
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>H.M.B Face by E Morgan Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          18
                          <span>120</span>
                        </button>
                        <button className="back">
                          18
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>H.M.B Face by P Mustard Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          16
                          <span>120</span>
                        </button>
                        <button className="back">
                          16
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>H.M.B Face by S Watson Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          23
                          <span>120</span>
                        </button>
                        <button className="back">
                          23
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>H.M.B Face by C Ferguson Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          17
                          <span>120</span>
                        </button>
                        <button className="back">
                          17
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Total Match Fours Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          36
                          <span>100</span>
                        </button>
                        <button className="back">
                          39
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Most Balls Faced by a Batsman Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          44
                          <span>115</span>
                        </button>
                        <button className="back">
                          44
                          <span>85</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Top Batsman Runs in Match Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          78
                          <span>110</span>
                        </button>
                        <button className="back">
                          78
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Most Wickets by a Bowler Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>E Morgan Odd Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>E Morgan Even Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>P Mustard Odd Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>P Mustard Even Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>S Watson Odd Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>S Watson Even Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>C Ferguson Even Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>C Ferguson Odd Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>10 Over Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>10 Over Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>15 Over Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>15 Over Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>10 Over Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>10 Over Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>15 Over Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>15 Over Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab>
          <tab
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-link"
            className="tab-pane"
          >
            <div>
              <div className="row mx-0 odds_header">
                <div className="col-md-5 col-7 px-0" />
                <div className="col-md-7 col-5 px-0">
                  <div className="btn-group dOddsBox">
                    <button className="lay2" />
                    <button className="lay1" />
                    <button className="lay">no</button>
                    <button className="back">yes</button>
                    <button className="min-max-bet">Min-Max</button>
                  </div>
                </div>
              </div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>E Morgan Odd Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>E Morgan Even Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>P Mustard Odd Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>P Mustard Even Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>S Watson Odd Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>S Watson Even Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>C Ferguson Even Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>C Ferguson Odd Run Bhav Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>10 Over Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>10 Over Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>15 Over Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>15 Over Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Odd Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Even Run Bhav ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>10 Over Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>10 Over Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>15 Over Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>15 Over Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Odd Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Even Run Bhav AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          0<span>0</span>
                        </button>
                        <button className="back">
                          1<span>98</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab>
          <tab
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-link"
            className="tab-pane"
          >
            <div>
              <div className="row mx-0 odds_header">
                <div className="col-md-5 col-7 px-0" />
                <div className="col-md-7 col-5 px-0">
                  <div className="btn-group dOddsBox">
                    <button className="lay2" />
                    <button className="lay1" />
                    <button className="lay">no</button>
                    <button className="back">yes</button>
                    <button className="min-max-bet">Min-Max</button>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Runs ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          46
                          <span>100</span>
                        </button>
                        <button className="back">
                          48
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>6 Over Runs AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          59
                          <span>100</span>
                        </button>
                        <button className="back">
                          61
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Runs ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          162
                          <span>100</span>
                        </button>
                        <button className="back">
                          165
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>20 Over Runs AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          224
                          <span>100</span>
                        </button>
                        <button className="back">
                          227
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Match 1st Over Run Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          6<span>100</span>
                        </button>
                        <button className="back">
                          7<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
            </div>
          </tab>
          <tab
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-link"
            className="tab-pane"
          >
            <div>
              <div className="row mx-0 odds_header">
                <div className="col-md-5 col-7 px-0" />
                <div className="col-md-7 col-5 px-0">
                  <div className="btn-group dOddsBox">
                    <button className="lay2" />
                    <button className="lay1" />
                    <button className="lay">no</button>
                    <button className="back">yes</button>
                    <button className="min-max-bet">Min-Max</button>
                  </div>
                </div>
              </div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Fall of 1st wkt Runs AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          28
                          <span>120</span>
                        </button>
                        <button className="back">
                          28
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Fall of 1st wkt Runs ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          23
                          <span>120</span>
                        </button>
                        <button className="back">
                          23
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>E Morgan Runs Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          23
                          <span>120</span>
                        </button>
                        <button className="back">
                          23
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>P Mustard Runs Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          21
                          <span>120</span>
                        </button>
                        <button className="back">
                          21
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>C Ferguson Runs Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          24
                          <span>120</span>
                        </button>
                        <button className="back">
                          24
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>S Watson Runs Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          32
                          <span>120</span>
                        </button>
                        <button className="back">
                          32
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>C Ferguson Boundaries Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>S Watson Boundaries Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          5<span>100</span>
                        </button>
                        <button className="back">
                          6<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>P Mustard Boundaries Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>E Morgan Boundaries Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Pship Boundaries AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          4<span>100</span>
                        </button>
                        <button className="back">
                          5<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt Pship Boundaries ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt lost to Balls ENG M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          18
                          <span>120</span>
                        </button>
                        <button className="back">
                          18
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>1st wkt lost to Balls AUS M Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          20
                          <span>120</span>
                        </button>
                        <button className="back">
                          20
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>H.M.B Face by E Morgan Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          18
                          <span>120</span>
                        </button>
                        <button className="back">
                          18
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>H.M.B Face by P Mustard Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          16
                          <span>120</span>
                        </button>
                        <button className="back">
                          16
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>H.M.B Face by S Watson Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          23
                          <span>120</span>
                        </button>
                        <button className="back">
                          23
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>H.M.B Face by C Ferguson Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-10k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          17
                          <span>120</span>
                        </button>
                        <button className="back">
                          17
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-10k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
            </div>
          </tab>
          <tab
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-link"
            className="tab-pane"
          >
            <div>
              <div className="row mx-0 odds_header">
                <div className="col-md-5 col-7 px-0" />
                <div className="col-md-7 col-5 px-0">
                  <div className="btn-group dOddsBox">
                    <button className="lay2" />
                    <button className="lay1" />
                    <button className="lay">no</button>
                    <button className="back">yes</button>
                    <button className="min-max-bet">Min-Max</button>
                  </div>
                </div>
              </div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Total Match Fours Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          36
                          <span>100</span>
                        </button>
                        <button className="back">
                          39
                          <span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Most Balls Faced by a Batsman Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          44
                          <span>115</span>
                        </button>
                        <button className="back">
                          44
                          <span>85</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Top Batsman Runs in Match Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          78
                          <span>110</span>
                        </button>
                        <button className="back">
                          78
                          <span>90</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="row mx-0 odds_body">
                    <div className="col-md-5 col-7 px-0">
                      <p className="team-name">
                        <b>Most Wickets by a Bowler Adv</b>
                      </p>
                      <span className="mo_min-max">
                        <b>min max</b>100-25k
                      </span>
                    </div>
                    <div className="col-md-7 col-5 px-0">
                      <div className="btn-group dOddsBox">
                        <button className="back back2" />
                        <button className="back back1"></button>
                        <button className="lay">
                          3<span>100</span>
                        </button>
                        <button className="back">
                          4<span>100</span>
                        </button>
                        <button className="min-max-bet">
                          <dl className="fancy-info">
                            <dd>100-25k</dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
              <div>{/**/}</div>
            </div>{" "}
          </tab>
        </div>
      </div>
    </div>
  );
};

export default Fancy;
