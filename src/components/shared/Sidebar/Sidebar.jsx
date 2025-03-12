const Sidebar = () => {
  return (
    <div>
      <div className="left-side-menu">
        <div data-simplebar="init" className="h-100">
          <div className="simplebar-wrapper" style={{ margin: "0px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{ right: "0px", bottom: "0px" }}
              >
                <div
                  className="simplebar-content-wrapper"
                  tabIndex={0}
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "100%", overflow: "hidden" }}
                >
                  <div className="simplebar-content" style={{ padding: "0px" }}>
                    <div className="user-box text-center">
                      <div className="dropdown">
                        <a
                          href="javascript: void(0);"
                          data-bs-toggle="dropdown"
                          className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                        >
                          Geneva Kennedy
                        </a>
                        <div className="dropdown-menu user-pro-dropdown">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <i className="fe-user me-1" />
                            <span>My Account</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <i className="fe-settings me-1" />
                            <span>Settings</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <i className="fe-lock me-1" />
                            <span>Lock Screen</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <i className="fe-log-out me-1" />
                            <span>Logout</span>
                          </a>
                        </div>
                      </div>
                      <p className="text-muted">Admin Head</p>
                    </div>
                    <div id="sidebar-menu">
                      <ul id="side-menu">
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse0">
                            <span> Cricket </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse0">
                            <ul className="nav-second-level">
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse00">
                                  Womens Premier League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse00">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/32127028"
                                        className="menu-link-redi"
                                      >
                                        Womens Premier League
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115392"
                                        className="menu-link-redi"
                                      >
                                        Mumbai Indians W v Gujarat Giants W
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse01">
                                  India / KCA Presidents Cup T20
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse01">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687391"
                                        className="menu-link-redi"
                                      >
                                        Kca Lions V Kca Eagles
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687393"
                                        className="menu-link-redi"
                                      >
                                        Kca Tigers V Kca Panthers
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse02">
                                  Others
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse02">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58633177"
                                        className="menu-link-redi"
                                      >
                                        Mira Bhayandar Lions V Thane Tigers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/1741636531"
                                        className="menu-link-redi"
                                      >
                                        🎮ENGLAND T10 VS INDIA T10
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/1741640320"
                                        className="menu-link-redi"
                                      >
                                        🎮AUSTRALIA T10 VS ENGLAND T10
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/1741636549"
                                        className="menu-link-redi"
                                      >
                                        🎮PAKISTAN T10 VS NEW ZEALAND T10
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/1741640337"
                                        className="menu-link-redi"
                                      >
                                        🎮SOUTH AFRICA T10 VS NEW ZEALAND T10
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/1741636568"
                                        className="menu-link-redi"
                                      >
                                        🎮KARACHI KINGS T10 VS ISLAMABAD UNITED
                                        T10
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/1741640357"
                                        className="menu-link-redi"
                                      >
                                        🎮INDIA T10 VS PAKISTAN T10
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57643127"
                                        className="menu-link-redi"
                                      >
                                        Walferdange Optimists V Old Victorians
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57643129"
                                        className="menu-link-redi"
                                      >
                                        Farmers Cc V Istanbul Ksk
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58633179"
                                        className="menu-link-redi"
                                      >
                                        Vashi Warriors v Belapur Blasters
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57643131"
                                        className="menu-link-redi"
                                      >
                                        Old Victorians V Ljubljana
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57643133"
                                        className="menu-link-redi"
                                      >
                                        Walferdange Optimists V Farmers Cc
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57643135"
                                        className="menu-link-redi"
                                      >
                                        Farmers Cc v Ljubljana
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57643137"
                                        className="menu-link-redi"
                                      >
                                        Istanbul Ksk v Walferdange Optimists
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57643139"
                                        className="menu-link-redi"
                                      >
                                        Old Victorians v Farmers Cc
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57643141"
                                        className="menu-link-redi"
                                      >
                                        Walferdange Optimists v Ljubljana
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse03">
                                  Simulated Reality League / Premier League SRL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse03">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58439507"
                                        className="menu-link-redi"
                                      >
                                        Gujarat Titans SRL V Lucknow Super
                                        Giants SRL
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58439509"
                                        className="menu-link-redi"
                                      >
                                        Rajasthan Royals SRL V Sunrisers
                                        Hyderabad SRL
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse04">
                                  Simulated Reality League / T20 International
                                  SRL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse04">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58439375"
                                        className="menu-link-redi"
                                      >
                                        Pakistan SRL V England SRL
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse05">
                                  International Clubs / T20 Asian Legends League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse05">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58253913"
                                        className="menu-link-redi"
                                      >
                                        Srilankan Lions V Afghanistan Pathans
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse06">
                                  Simulated Reality League / Big Bash League SRL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse06">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58439265"
                                        className="menu-link-redi"
                                      >
                                        Sydney Sixers SRL V Perth Scorchers SRL
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse07">
                                  CSA Provincial One-Day Challenge Div 1
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse07">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114361"
                                        className="menu-link-redi"
                                      >
                                        Dolphins v Titans
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse08">
                                  West Indies / West Indies Championship
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse08">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57137929"
                                        className="menu-link-redi"
                                      >
                                        Guyana Harpy Eagles v Windward Islands
                                        Volcanoes
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57137931"
                                        className="menu-link-redi"
                                      >
                                        West Indies Academy v Jamaica Scorpions
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57137927"
                                        className="menu-link-redi"
                                      >
                                        Barbados Pride v TT Red Force
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57137939"
                                        className="menu-link-redi"
                                      >
                                        Leeward Islands Hurricanes v Combined
                                        Campuses And Colleges
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse09">
                                  International T20 Masters League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse09">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34112319"
                                        className="menu-link-redi"
                                      >
                                        England Masters v Australia Masters
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse010"
                                >
                                  ICC Cricket World Cup League 2
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse010">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114193"
                                        className="menu-link-redi"
                                      >
                                        Namibia v Netherlands
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse011"
                                >
                                  Womens International Twenty20 Matches
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse011">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34112215"
                                        className="menu-link-redi"
                                      >
                                        New Zealand Women v Sri Lanka Women
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse1">
                            <span> Football </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse1">
                            <ul className="nav-second-level">
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse10">
                                  UEFA Champions League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse10">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/78601"
                                        className="menu-link-redi"
                                      >
                                        UEFA Champions League
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34095057"
                                        className="menu-link-redi"
                                      >
                                        Lille v Dortmund
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34095060"
                                        className="menu-link-redi"
                                      >
                                        Atletico Madrid v Real Madrid
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34095059"
                                        className="menu-link-redi"
                                      >
                                        Arsenal v PSV
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34094795"
                                        className="menu-link-redi"
                                      >
                                        Aston Villa v Club Brugge
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse11">
                                  Ethiopia / Premier League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse11">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58108643"
                                        className="menu-link-redi"
                                      >
                                        Arba Minch Ketema vs. Mekelle 70 Enderta
                                        FC
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58108639"
                                        className="menu-link-redi"
                                      >
                                        Mechal SC vs. Fasil Kenema SC
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse12">
                                  China / Chinese Super League, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse12">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58682597"
                                        className="menu-link-redi"
                                      >
                                        Henan Wanxianshan WFC vs. Liaoning
                                        Shenbei Hefeng
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58682599"
                                        className="menu-link-redi"
                                      >
                                        Yongchuan Chashan vs. Shandong Ticai
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58682603"
                                        className="menu-link-redi"
                                      >
                                        Jiangsu LFC vs. Changchun Jiuyin Loans
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58682601"
                                        className="menu-link-redi"
                                      >
                                        Zhejiang Hangzhou vs. Shaanxi Chang An
                                        Athletic FC
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse13">
                                  Australian A-League Men
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse13">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34091870"
                                        className="menu-link-redi"
                                      >
                                        Melbourne City v Newcastle Jets
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse14">
                                  Turkiye Amateur / U19 Elit B
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse14">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58642841"
                                        className="menu-link-redi"
                                      >
                                        Goztepe vs. Giresunspor
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse15">
                                  AFC Champions League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse15">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110930"
                                        className="menu-link-redi"
                                      >
                                        Gwangju FC v Kobe
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110932"
                                        className="menu-link-redi"
                                      >
                                        Kawasaki v Shanghai Shenhua
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse16">
                                  Azerbaijan 1st Division
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse16">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113578"
                                        className="menu-link-redi"
                                      >
                                        Baku Sporting v Mil-Mugan FK
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse17">
                                  Italy / Coppa Italia Primavera
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse17">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57887619"
                                        className="menu-link-redi"
                                      >
                                        AC Milan vs. US Lecce
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse18">
                                  Kosovo / Superliga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse18">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58769343"
                                        className="menu-link-redi"
                                      >
                                        FC Prishtina vs. KF Dukagjini
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse19">
                                  UEFA Champions League SRL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse19">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58739521"
                                        className="menu-link-redi"
                                      >
                                        Lille OSC SRL vs. Borussia Dortmund SRL
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58739537"
                                        className="menu-link-redi"
                                      >
                                        Atletico Madrid SRL vs. Real Madrid SRL
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58739539"
                                        className="menu-link-redi"
                                      >
                                        Arsenal FC SRL vs. PSV Eindhoven SRL
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58739523"
                                        className="menu-link-redi"
                                      >
                                        Aston Villa SRL vs. Club Brugge SRL
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse110"
                                >
                                  Argentina / Primera Division, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse110">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58600633"
                                        className="menu-link-redi"
                                      >
                                        Social Atletico Television vs. Belgrano
                                        de Cordoba
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse111"
                                >
                                  International Clubs / AFC Champions League Two
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse111">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/56376081"
                                        className="menu-link-redi"
                                      >
                                        Lion City Sailors FC vs. Sanfrecce
                                        Hiroshima
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse112"
                                >
                                  Argentinian Womens Matches
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse112">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113354"
                                        className="menu-link-redi"
                                      >
                                        Social Atl Television (W) v CA Belgrano
                                        (W)
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse113"
                                >
                                  Indonesian Liga 1
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse113">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34106044"
                                        className="menu-link-redi"
                                      >
                                        Malut United v Persita Tangerang
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34103063"
                                        className="menu-link-redi"
                                      >
                                        Persebaya Surabaya v PSIS Semarang
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse114"
                                >
                                  Poland / III Liga, Group 1
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse114">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/55831589"
                                        className="menu-link-redi"
                                      >
                                        KS Warta Sieradz vs. Legia Warszawa II
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse115"
                                >
                                  Indian Super League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse115">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34103152"
                                        className="menu-link-redi"
                                      >
                                        Hyderabad FC v Kerala Blasters FC
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse116"
                                >
                                  Slovenian Premier League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse116">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110578"
                                        className="menu-link-redi"
                                      >
                                        NK Primorje v NK Maribor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113768"
                                        className="menu-link-redi"
                                      >
                                        Olimpija v Mura
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse117"
                                >
                                  Slovakian Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse117">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34111617"
                                        className="menu-link-redi"
                                      >
                                        Dukla Banska Bystrica v Tatran Presov
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34099258"
                                        className="menu-link-redi"
                                      >
                                        FC Kosice v Slovan Bratislava
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse118"
                                >
                                  Serbian Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse118">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115363"
                                        className="menu-link-redi"
                                      >
                                        FK Backa Topola v FK Spartak
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115599"
                                        className="menu-link-redi"
                                      >
                                        Radnik Surdulica v Partizan Belgrade
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse119"
                                >
                                  Bosnian Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse119">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113860"
                                        className="menu-link-redi"
                                      >
                                        FK Velez Mostar v Siroki Brijeg
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse120"
                                >
                                  Latvian Virsliga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse120">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115383"
                                        className="menu-link-redi"
                                      >
                                        SK Super Nova v FS Metta/Lu
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse121"
                                >
                                  Czech 1 Liga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse121">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34109372"
                                        className="menu-link-redi"
                                      >
                                        Dukla Prague v MFK Karvina
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse122"
                                >
                                  Czech Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse122">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34097781"
                                        className="menu-link-redi"
                                      >
                                        Hradec Kralove v FK Jablonec
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse123"
                                >
                                  South African Premier Division
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse123">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34097535"
                                        className="menu-link-redi"
                                      >
                                        Tshakhuma Tsha Madzivhadila v Sekhukhune
                                        United
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34097530"
                                        className="menu-link-redi"
                                      >
                                        Polokwane City v Golden Arrows
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34097529"
                                        className="menu-link-redi"
                                      >
                                        Kaizer Chiefs v Cape Town CIty F.C.
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse124"
                                >
                                  Italian Serie C
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse124">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114285"
                                        className="menu-link-redi"
                                      >
                                        Sorrento v Juventus B
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114269"
                                        className="menu-link-redi"
                                      >
                                        FC Giugliano v AZ Picerno ASD
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114280"
                                        className="menu-link-redi"
                                      >
                                        Monopoli v US Latina Calcio
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114266"
                                        className="menu-link-redi"
                                      >
                                        ASD Altamura v Casertana
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114270"
                                        className="menu-link-redi"
                                      >
                                        Cavese 1919 v ACR Messina
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114286"
                                        className="menu-link-redi"
                                      >
                                        Calcio Avellino SSD v Trapani
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114299"
                                        className="menu-link-redi"
                                      >
                                        Audace Cerignola v Foggia
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114293"
                                        className="menu-link-redi"
                                      >
                                        Benevento v Crotone
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse125"
                                >
                                  German 3 Liga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse125">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34108760"
                                        className="menu-link-redi"
                                      >
                                        Wehen Wiesbaden v 1860 Munich
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34109797"
                                        className="menu-link-redi"
                                      >
                                        Waldhof Mannheim v SV Sandhausen
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34108761"
                                        className="menu-link-redi"
                                      >
                                        Dynamo Dresden v Dortmund II
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34109804"
                                        className="menu-link-redi"
                                      >
                                        Viktoria Koln v Rot-Weiss Essen
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34109260"
                                        className="menu-link-redi"
                                      >
                                        Hansa Rostock v Erzgebirge
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse126"
                                >
                                  Egyptian Premier
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse126">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110444"
                                        className="menu-link-redi"
                                      >
                                        Ghazl El Mahallah v ZED FC
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110445"
                                        className="menu-link-redi"
                                      >
                                        Pyramids v Al-Masry
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34111473"
                                        className="menu-link-redi"
                                      >
                                        Pharco FC v National Bank
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse127"
                                >
                                  Egyptian 2nd Division
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse127">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113940"
                                        className="menu-link-redi"
                                      >
                                        Al Mokawloon v Asyut Petroleum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113944"
                                        className="menu-link-redi"
                                      >
                                        Aswan FC v El Daklyeh
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113950"
                                        className="menu-link-redi"
                                      >
                                        La Viena FC v Abo Qair Semads
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114073"
                                        className="menu-link-redi"
                                      >
                                        Wadi Degla v Kahraba Ismailia
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113995"
                                        className="menu-link-redi"
                                      >
                                        Proxy Work Club v Baladeyet Al-Mahalla
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse128"
                                >
                                  English Championship
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse128">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34106126"
                                        className="menu-link-redi"
                                      >
                                        Watford v Swansea
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34106143"
                                        className="menu-link-redi"
                                      >
                                        Hull v Oxford Utd
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34106155"
                                        className="menu-link-redi"
                                      >
                                        Portsmouth v Plymouth
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34106138"
                                        className="menu-link-redi"
                                      >
                                        Leeds v Millwall
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34106122"
                                        className="menu-link-redi"
                                      >
                                        Stoke v Blackburn
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse129"
                                >
                                  Argentinian Reserves
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse129">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115513"
                                        className="menu-link-redi"
                                      >
                                        Rosario Central (Res) v Atletico Tucuman
                                        (Res)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115517"
                                        className="menu-link-redi"
                                      >
                                        Racing Club (Res) v Boca Jrs (Res)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115520"
                                        className="menu-link-redi"
                                      >
                                        CA Banfield (Res) v Belgrano (Res)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115507"
                                        className="menu-link-redi"
                                      >
                                        CA Talleres (Res) v CA Lanus (Res)
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse130"
                                >
                                  Argentinian Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse130">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114380"
                                        className="menu-link-redi"
                                      >
                                        CA Platense v Argentino de Quilmes
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114387"
                                        className="menu-link-redi"
                                      >
                                        Huracan v CS General San Martin
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse131"
                                >
                                  Brazilian Carioca Matches
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse131">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113397"
                                        className="menu-link-redi"
                                      >
                                        Madureira v Sampaio Correa FE RJ
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113401"
                                        className="menu-link-redi"
                                      >
                                        Fluminense v Flamengo
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse132"
                                >
                                  Algerian Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse132">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34111615"
                                        className="menu-link-redi"
                                      >
                                        Belouizdad v US Chaouia
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse133"
                                >
                                  CONMEBOL Copa Libertadores
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse133">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34099660"
                                        className="menu-link-redi"
                                      >
                                        Cerro Porteno v Melgar
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse134"
                                >
                                  Brazilian Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse134">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34087604"
                                        className="menu-link-redi"
                                      >
                                        EC Vitoria Salvador v Nautico PE
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34088913"
                                        className="menu-link-redi"
                                      >
                                        Athletic Club v Gremio
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34088678"
                                        className="menu-link-redi"
                                      >
                                        Capital Clube de Futebol v Porto Velho
                                        EC
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34088617"
                                        className="menu-link-redi"
                                      >
                                        Maracana CE v Ceilandia Esporte Clube
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34087612"
                                        className="menu-link-redi"
                                      >
                                        Ceara SC Fortaleza v Confianca
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34088610"
                                        className="menu-link-redi"
                                      >
                                        Atletico GO v Retro FC Brasil
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse135"
                                >
                                  CONCACAF Champions League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse135">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34111480"
                                        className="menu-link-redi"
                                      >
                                        Monterrey v Vancouver Whitecaps
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse136"
                                >
                                  UEFA Europa League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse136">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34101259"
                                        className="menu-link-redi"
                                      >
                                        Eintracht Frankfurt v Ajax
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34101260"
                                        className="menu-link-redi"
                                      >
                                        Lazio v Plzen
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34101266"
                                        className="menu-link-redi"
                                      >
                                        Athletic Bilbao v Roma
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34101269"
                                        className="menu-link-redi"
                                      >
                                        Olympiakos v Bodo Glimt
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34101208"
                                        className="menu-link-redi"
                                      >
                                        Lyon v FCSB
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34101209"
                                        className="menu-link-redi"
                                      >
                                        Rangers v Fenerbahce
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34101318"
                                        className="menu-link-redi"
                                      >
                                        Tottenham v Az Alkmaar
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34101190"
                                        className="menu-link-redi"
                                      >
                                        Man Utd v Real Sociedad
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse2">
                            <span> Tennis </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse2">
                            <ul className="nav-second-level">
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse20">
                                  ATP Indian Wells 2025
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse20">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34089049"
                                        className="menu-link-redi"
                                      >
                                        ATP Indian Wells 2025
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113438"
                                        className="menu-link-redi"
                                      >
                                        Nakashima v Be Shelton
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34112997"
                                        className="menu-link-redi"
                                      >
                                        Cerundolo v Alex de Minaur
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113227"
                                        className="menu-link-redi"
                                      >
                                        Ja Draper v Fritz
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113895"
                                        className="menu-link-redi"
                                      >
                                        Dimitrov v Carlos Alcaraz
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse21">
                                  WTA Indian Wells 2025
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse21">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34086012"
                                        className="menu-link-redi"
                                      >
                                        WTA Indian Wells 2025
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113208"
                                        className="menu-link-redi"
                                      >
                                        C Gauff v Bencic
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113623"
                                        className="menu-link-redi"
                                      >
                                        Vekic v Keys
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113241"
                                        className="menu-link-redi"
                                      >
                                        A Sabalenka v Kartal
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113818"
                                        className="menu-link-redi"
                                      >
                                        L Samsonova v J Paolini
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse22">
                                  UTR Men / UTR Dubai M03
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse22">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58710551"
                                        className="menu-link-redi"
                                      >
                                        Liu, Yizhou_ vs. Siniakov, Daniel
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58710573"
                                        className="menu-link-redi"
                                      >
                                        Giusca, Teodor vs. Sakellaridis,
                                        Michalis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58710599"
                                        className="menu-link-redi"
                                      >
                                        Radu, Constantin vs. Vanta, Valentin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58710583"
                                        className="menu-link-redi"
                                      >
                                        Konov, Samuil vs. Fekete, Janos
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58710565"
                                        className="menu-link-redi"
                                      >
                                        Antonescu, Vasile vs. Baum, Stepan
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse23">
                                  Virtual Tennis In-Play / Virtual Tennis
                                  In-Play
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse23">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/29055087"
                                        className="menu-link-redi"
                                      >
                                        Fedirer vs. Raonnec
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/29055089"
                                        className="menu-link-redi"
                                      >
                                        Queray vs. Bertich
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/29055093"
                                        className="menu-link-redi"
                                      >
                                        Andorsen vs. Tsogna
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/29055094"
                                        className="menu-link-redi"
                                      >
                                        Nadel vs. Dimetriov
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse24">
                                  UTR Women / UTR Olomouc W03
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse24">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58711121"
                                        className="menu-link-redi"
                                      >
                                        Skrabalova, Gabriela vs. Novak, Nicol
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58711153"
                                        className="menu-link-redi"
                                      >
                                        Breckova, Nikola vs. Kroisová, Adéla
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58711165"
                                        className="menu-link-redi"
                                      >
                                        Perhacova, Terezia vs. Leykina, Polina
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse25">
                                  UTR Men / UTR Gyor M02
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse25">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58711315"
                                        className="menu-link-redi"
                                      >
                                        Perez Martin, Ivan vs. Szoke, Adam Gabor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58711363"
                                        className="menu-link-redi"
                                      >
                                        McDonnell, Cian vs. Beloborodko, Illya
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58711323"
                                        className="menu-link-redi"
                                      >
                                        Juhas, Kristijan vs. Sift, Barnabas
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58711325"
                                        className="menu-link-redi"
                                      >
                                        Pivnik, Oliver vs. Fajta, Peter
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse26">
                                  Heraklion Challenger 2025
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse26">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34111910"
                                        className="menu-link-redi"
                                      >
                                        S Sakellaridis v Negritu
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114355"
                                        className="menu-link-redi"
                                      >
                                        Fe Cina v Khu Sultanov
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114395"
                                        className="menu-link-redi"
                                      >
                                        T Wu v Novak
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114767"
                                        className="menu-link-redi"
                                      >
                                        Gengel v Er Kirkin
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse27">
                                  Cherbourg-en-Cotentin Challenger 2025
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse27">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114582"
                                        className="menu-link-redi"
                                      >
                                        Janvier v Yu Shimizu
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34107038"
                                        className="menu-link-redi"
                                      >
                                        Ja Paul v J Rodionov
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34112275"
                                        className="menu-link-redi"
                                      >
                                        Vandermeersch v Kachmazov
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114638"
                                        className="menu-link-redi"
                                      >
                                        Emil Ruusuvuori v Onclin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34107063"
                                        className="menu-link-redi"
                                      >
                                        Bouquier v Gueymard Wayenburg
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34114390"
                                        className="menu-link-redi"
                                      >
                                        Malige v Patric Zahraj
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse28">
                                  Simulated Reality / SRL Winter Invitational
                                  Aydin, TUR
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse28">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58676013"
                                        className="menu-link-redi"
                                      >
                                        Davidovich Fokina, Alejandro (SRL) vs.
                                        Rune, Holger (Srl)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58676019"
                                        className="menu-link-redi"
                                      >
                                        Fils, Arthur (Srl) vs. Nishioka,
                                        Yoshihito (Srl)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58676017"
                                        className="menu-link-redi"
                                      >
                                        Berrettini, Matteo (Srl) vs. Medvedev,
                                        Daniil (Srl)
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse29">
                                  Simulated Reality Women / SRL Winter
                                  Invitational Aydin, TUR, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse29">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58676489"
                                        className="menu-link-redi"
                                      >
                                        Andreeva, Mirra (Srl) vs. Li, Ann (Srl)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58676495"
                                        className="menu-link-redi"
                                      >
                                        Sramkova, Rebecca (Srl) vs. Muchova,
                                        Karolina (Srl)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58676493"
                                        className="menu-link-redi"
                                      >
                                        Alexandrova, Ekaterina (Srl) vs.
                                        Zarazua, Renata (Srl)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58676499"
                                        className="menu-link-redi"
                                      >
                                        Osaka, Naomi (Srl) vs. Pegula, Jessica
                                        (Srl)
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse210"
                                >
                                  Santiago Challenger 2025
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse210">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115071"
                                        className="menu-link-redi"
                                      >
                                        Mat Pucinelli de Almeid v Olivo
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115128"
                                        className="menu-link-redi"
                                      >
                                        Olivieri v Murkel Dellien
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34113233"
                                        className="menu-link-redi"
                                      >
                                        Sakamoto v Galan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34115731"
                                        className="menu-link-redi"
                                      >
                                        T Monteiro v L Midon
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse211"
                                >
                                  Phoenix Challenger 2025
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse211">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34116477"
                                        className="menu-link-redi"
                                      >
                                        Li Tu v Spizzirri
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110756"
                                        className="menu-link-redi"
                                      >
                                        P Kotov v Jo Fonseca
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110791"
                                        className="menu-link-redi"
                                      >
                                        Fearnley v Duckworth
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34116482"
                                        className="menu-link-redi"
                                      >
                                        Kukushkin v Uchiyama
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110761"
                                        className="menu-link-redi"
                                      >
                                        Walton v Hug Gaston
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110766"
                                        className="menu-link-redi"
                                      >
                                        Rinderknech v Opelka
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110771"
                                        className="menu-link-redi"
                                      >
                                        Bublik v Vukic
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110776"
                                        className="menu-link-redi"
                                      >
                                        Ri Hijikata v Bra Holt
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34116487"
                                        className="menu-link-redi"
                                      >
                                        Moutet v Basilashvili
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse212"
                                >
                                  UTR Women / UTR Boca Raton W04
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse212">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58711851"
                                        className="menu-link-redi"
                                      >
                                        Larke, Zara vs. Starastsenka, Katsiaryna
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse213"
                                >
                                  Cap Cana Challenger 2025
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse213">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34116037"
                                        className="menu-link-redi"
                                      >
                                        Re Sakamoto v Go Nanda
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110468"
                                        className="menu-link-redi"
                                      >
                                        Tr Boyer v Dzumhur
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110458"
                                        className="menu-link-redi"
                                      >
                                        Mensik v Garin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34116032"
                                        className="menu-link-redi"
                                      >
                                        Th Seyboth Wild v Ni Mejia
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110488"
                                        className="menu-link-redi"
                                      >
                                        Lajovic v Altmaier
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34116042"
                                        className="menu-link-redi"
                                      >
                                        Ot Virtanen v Jame McCabe
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/34110493"
                                        className="menu-link-redi"
                                      >
                                        Lestienne v Norrie
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse214"
                                >
                                  UTR Men / UTR Yokohama M04
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse214">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58825893"
                                        className="menu-link-redi"
                                      >
                                        Sato, Taiyo vs. Ishii, Ryoma
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58819615"
                                        className="menu-link-redi"
                                      >
                                        Matsumura, Ryotero vs. Imanishi, Hakuto
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58826375"
                                        className="menu-link-redi"
                                      >
                                        Sato, Daiki vs. Nakanishi, Seiya
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse215"
                                >
                                  UTR Yokohama W04
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse215">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58717175"
                                        className="menu-link-redi"
                                      >
                                        Nayuki, Seri vs. Maruyama, Akiho
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse3">
                            <span>Horse Racing </span>
                            <span className="menu-arrow" />
                          </a>

                          <div className="collapse" id="collapse3">
                            <ul className="nav-second-level">
                              <li>
                                <a
                                  href="#/guest/event/detail/34110616"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Sandown (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110616"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Sandown (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110616"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Sandown (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110581"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ascot (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110616"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Sandown (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110581"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ascot (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110616"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Sandown (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113421"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110616"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Sandown (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110581"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ascot (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113421"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110616"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Sandown (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110581"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ascot (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113421"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110581"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ascot (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113421"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113421"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34110581"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ascot (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113421"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse4">
                            <span>Greyhound Racing </span>
                            <span className="menu-arrow" />
                          </a>

                          <div className="collapse" id="collapse4">
                            <ul className="nav-second-level">
                              <li>
                                <a
                                  href="#/guest/event/detail/34112873"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113640"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Albion Park (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112873"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113640"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Albion Park (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112873"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113640"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Albion Park (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112873"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Bendigo (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113640"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Albion Park (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113633"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>The Meadows (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113428"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Richmond (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113633"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>The Meadows (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113428"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Richmond (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34116233"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Rockhampton (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113633"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>The Meadows (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113428"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Richmond (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34116233"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Rockhampton (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113633"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>The Meadows (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113428"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Richmond (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34116233"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Rockhampton (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113633"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>The Meadows (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113428"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Richmond (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34116233"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Rockhampton (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113633"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>The Meadows (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113428"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Richmond (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34116233"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Rockhampton (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113633"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>The Meadows (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34113428"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Richmond (AUS) 12th Mar</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#/guest/event/detail/34112872"
                                  className="menu-link-redi"
                                >
                                  <i className="fa fa-circle" />
                                  <span>Ballarat (AUS) 12th Mar</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse5">
                            <span> Binary </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse5">
                            <ul className="nav-second-level">
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse50">
                                  Others
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse50">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/1741737600"
                                        className="menu-link-redi"
                                      >
                                        Binary 2025/03/12
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse6">
                            <span> Basketball </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse6">
                            <ul className="nav-second-level">
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse60">
                                  New Zealand / NBL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse60">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/56353363"
                                        className="menu-link-redi"
                                      >
                                        Hawkes Bay Hawks vs. Indian Panthers
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse61">
                                  Australia / NBL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse61">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58657035"
                                        className="menu-link-redi"
                                      >
                                        Melbourne United vs. Illawarra Hawks
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse62">
                                  KBL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse62">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51635347"
                                        className="menu-link-redi"
                                      >
                                        Daegu Pegasus vs. Anyang Jungkwanjang
                                        Red Boosters
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse63">
                                  Japan / B1 League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse63">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53178067"
                                        className="menu-link-redi"
                                      >
                                        Sendai 89Ers vs. Kyoto Hannaryz
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53178071"
                                        className="menu-link-redi"
                                      >
                                        Yokohama B-Corsairs vs. Seahorses Mikawa
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53178055"
                                        className="menu-link-redi"
                                      >
                                        Ibaraki Robots vs. Hiroshima Dragonflies
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53178049"
                                        className="menu-link-redi"
                                      >
                                        Chiba Jets Funabashi vs. Saga Ballooners
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53178069"
                                        className="menu-link-redi"
                                      >
                                        Sun Rockers Shibuya vs. Kawasaki Brave
                                        Thunders
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53178059"
                                        className="menu-link-redi"
                                      >
                                        Fighting Eagles Nagoya vs. Alvark Tokyo
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53178057"
                                        className="menu-link-redi"
                                      >
                                        Koshigaya Alphas vs. Akita Northern
                                        Happinets
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53178065"
                                        className="menu-link-redi"
                                      >
                                        Ryukyu Golden Kings Okinawa vs. Shimane
                                        Susanoo Magic
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse64">
                                  B2 League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse64">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/56285749"
                                        className="menu-link-redi"
                                      >
                                        Toyama Grouses vs. Yamagata Wyverns
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse65">
                                  A1, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse65">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58772819"
                                        className="menu-link-redi"
                                      >
                                        PAOK Thessaloniki vs. Esperides
                                        Kallitheas
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58772809"
                                        className="menu-link-redi"
                                      >
                                        Panathlitikos SF Sykeon vs. AEO Proteas
                                        Voulas
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58772821"
                                        className="menu-link-redi"
                                      >
                                        Mgs Panseraikos vs. GS Iraklis
                                        Thessaloniki
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58772807"
                                        className="menu-link-redi"
                                      >
                                        Panathinaikos BC vs. AO Amintas
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse66">
                                  China / CBA
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse66">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53799189"
                                        className="menu-link-redi"
                                      >
                                        Guangdong Southern Tigers vs. Sichuan
                                        Blue Whales
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53799217"
                                        className="menu-link-redi"
                                      >
                                        Beijing Ducks vs. Qingdao Eagles
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53799793"
                                        className="menu-link-redi"
                                      >
                                        Fujian Sturgeons vs. Ningbo Rockets
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53799765"
                                        className="menu-link-redi"
                                      >
                                        Shanghai Sharks vs. Zhejiang Golden
                                        Bulls
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53799439"
                                        className="menu-link-redi"
                                      >
                                        Tianjin Pioneers vs. Guangzhou Loong
                                        Lions
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53799579"
                                        className="menu-link-redi"
                                      >
                                        Xinjiang Flying Tigers vs. Shenzhen
                                        Leopards
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse67">
                                  Tunisia / National A League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse67">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58618483"
                                        className="menu-link-redi"
                                      >
                                        Etoile Sportive Sahel vs. US Ansar
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58618481"
                                        className="menu-link-redi"
                                      >
                                        Club Africain vs. US Monastir
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse68">
                                  NKL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse68">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58807073"
                                        className="menu-link-redi"
                                      >
                                        BC Zalgiris Kaunas II vs. Suduva
                                        Mantinga Marijampole
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse69">
                                  Poland / 1. Liga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse69">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52624365"
                                        className="menu-link-redi"
                                      >
                                        Wkk Wroclaw vs. Polonia Warszawa
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52624369"
                                        className="menu-link-redi"
                                      >
                                        Decka Pelplin vs. KKK Mosir Krosno
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52624363"
                                        className="menu-link-redi"
                                      >
                                        Rosa Radom vs. GKS Tychy
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52624367"
                                        className="menu-link-redi"
                                      >
                                        AZS Politechnika Opolska vs. Bears
                                        Uniwersytet Gdanski Trefl Sopot
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse610"
                                >
                                  Finland / Korisliiga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse610">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57385671"
                                        className="menu-link-redi"
                                      >
                                        Pyrinto Tampere vs. KTP Basket Kotka
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57385631"
                                        className="menu-link-redi"
                                      >
                                        Kataja Basket Joensuu vs. Korihait
                                        Uusikaupunki
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse611"
                                >
                                  International / United League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse611">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51876151"
                                        className="menu-link-redi"
                                      >
                                        CSKA Moscow vs. Enisey Krasnoyarsk
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse612"
                                >
                                  International / Estonian-Latvian League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse612">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53336157"
                                        className="menu-link-redi"
                                      >
                                        Taltech vs. Valmiera Glass Via
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53336159"
                                        className="menu-link-redi"
                                      >
                                        Tartu Ulikool vs. Kk Viimsi
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53748007"
                                        className="menu-link-redi"
                                      >
                                        Latvijas Universitate vs. Rapla KK
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse613"
                                >
                                  Greece / Elite League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse613">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58807071"
                                        className="menu-link-redi"
                                      >
                                        Proteas Voulas vs. Ikaroi Trikalon
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse614"
                                >
                                  Czech Republic / NBL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse614">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57341447"
                                        className="menu-link-redi"
                                      >
                                        BK Nova Hut Ostrava vs. SK Slavia Prague
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse615"
                                >
                                  International / Europe Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse615">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57866015"
                                        className="menu-link-redi"
                                      >
                                        Tofas SK Bursa vs. Bilbao Basket
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57866021"
                                        className="menu-link-redi"
                                      >
                                        Riesen Ludwigsburg vs. JDA Dijon Basket
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse616"
                                >
                                  Denmark / Basketligaen
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse616">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58086995"
                                        className="menu-link-redi"
                                      >
                                        BMS Herlev Wolfpack vs. BK Amager
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse617"
                                >
                                  Cyprus / Division A
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse617">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58086175"
                                        className="menu-link-redi"
                                      >
                                        AEL Limassol BC vs. AEK Larnaca
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse618"
                                >
                                  Slovakia / Extraliga, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse618">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57586785"
                                        className="menu-link-redi"
                                      >
                                        Piestany vs. SCP Ruzomberok
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse619"
                                >
                                  Hungary / NB I. A
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse619">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57662729"
                                        className="menu-link-redi"
                                      >
                                        Budapesti Honved SE vs. Zalakeramia ZTE
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse620"
                                >
                                  Slovenia / 1. A SKL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse620">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58088033"
                                        className="menu-link-redi"
                                      >
                                        KK Krka Novo Mesto vs. Zlatorog Lasko
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse621"
                                >
                                  Switzerland / SB League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse621">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/56727463"
                                        className="menu-link-redi"
                                      >
                                        Lugano Tigers vs. Sam Basket Massagno
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse622"
                                >
                                  International / BNXT League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse622">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/55595963"
                                        className="menu-link-redi"
                                      >
                                        Feyenoord Basketbal Rotterdam vs.
                                        Landstede Hammers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/55595967"
                                        className="menu-link-redi"
                                      >
                                        Antwerp Giants vs. BC Oostende
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/55595969"
                                        className="menu-link-redi"
                                      >
                                        Limburg United vs. Spirou Charleroi
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/55595975"
                                        className="menu-link-redi"
                                      >
                                        Kortrijk Spurs vs. Okapi Aalst
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/55595973"
                                        className="menu-link-redi"
                                      >
                                        Brussels Basketball vs. Union
                                        Mons-Hainaut
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse623"
                                >
                                  Croatia / Premijer liga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse623">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58704467"
                                        className="menu-link-redi"
                                      >
                                        KK Furnir Dubrava vs. KK Dinamo Zagreb
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse624"
                                >
                                  Iceland / Urvalsdeild, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse624">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58249743"
                                        className="menu-link-redi"
                                      >
                                        Valur Reykjavik vs. UMF Njardvik
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse625"
                                >
                                  US Major League Soccer
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse625">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58659491"
                                        className="menu-link-redi"
                                      >
                                        Valencia Basket vs. FC Universitatea
                                        Cluj
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse626"
                                >
                                  Italy / A1 Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse626">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58772735"
                                        className="menu-link-redi"
                                      >
                                        Brixia Basket vs. Magnolia Basket
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse627"
                                >
                                  International / Champions League Americas
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse627">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58200667"
                                        className="menu-link-redi"
                                      >
                                        Minas Tenis Clube MG vs. IA Central
                                        Cordoba
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse628"
                                >
                                  USA / NBA
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse628">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52632045"
                                        className="menu-link-redi"
                                      >
                                        Toronto Raptors vs. Philadelphia 76ers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52631183"
                                        className="menu-link-redi"
                                      >
                                        Boston Celtics vs. Oklahoma City Thunder
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52631395"
                                        className="menu-link-redi"
                                      >
                                        Atlanta Hawks vs. Charlotte Hornets
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52630857"
                                        className="menu-link-redi"
                                      >
                                        Miami Heat vs. LA Clippers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52631117"
                                        className="menu-link-redi"
                                      >
                                        Houston Rockets vs. Phoenix Suns
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52630981"
                                        className="menu-link-redi"
                                      >
                                        Memphis Grizzlies vs. Utah Jazz
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52630243"
                                        className="menu-link-redi"
                                      >
                                        San Antonio Spurs vs. Dallas Mavericks
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52630515"
                                        className="menu-link-redi"
                                      >
                                        Portland Trail Blazers vs. New York
                                        Knicks
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52631581"
                                        className="menu-link-redi"
                                      >
                                        Denver Nuggets vs. Minnesota
                                        Timberwolves
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse629"
                                >
                                  Argentina / LNB
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse629">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/56445645"
                                        className="menu-link-redi"
                                      >
                                        Penarol Mar Del Plata vs. Ciclista
                                        Olimpico de La Banda
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse7">
                            <span> Baseball </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse7">
                            <ul className="nav-second-level">
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse70">
                                  Japan / NPB Preseason
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse70">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57490443"
                                        className="menu-link-redi"
                                      >
                                        Yokohama Dena Baystars vs. Hiroshima
                                        Toyo Carp
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57490445"
                                        className="menu-link-redi"
                                      >
                                        Chunichi Dragons vs. Orix Buffaloes
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57490447"
                                        className="menu-link-redi"
                                      >
                                        Fukuoka Hawks vs. Yomiuri Giants
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse71">
                                  Virtual Baseball / Virtual Baseball In-Play
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse71">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/49582641"
                                        className="menu-link-redi"
                                      >
                                        Cleveland Guardians vs. Texas Rangers
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse8">
                            <span>Table Tennis </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse8">
                            <ul className="nav-second-level">
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse80">
                                  International / TT Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse80">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834689"
                                        className="menu-link-redi"
                                      >
                                        Stepien, Marcin vs. Stapor, Dawid
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834691"
                                        className="menu-link-redi"
                                      >
                                        Wloszek, Sylwester vs. Stapor, Dawid
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834693"
                                        className="menu-link-redi"
                                      >
                                        Panczyk, Adrian vs. Chybinski, Marek
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834695"
                                        className="menu-link-redi"
                                      >
                                        Sanchez, Juan A vs. Martinez, Alejandro
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834305"
                                        className="menu-link-redi"
                                      >
                                        Vodal, Petr vs. Holik, Simon
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834697"
                                        className="menu-link-redi"
                                      >
                                        Warpas, Blazej vs. Sulkowski, Bartosz
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834699"
                                        className="menu-link-redi"
                                      >
                                        Sikora, Fabian vs. Matachowski, Bartosz
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834307"
                                        className="menu-link-redi"
                                      >
                                        Trefny, Jan vs. Zelezny, Daniel
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834311"
                                        className="menu-link-redi"
                                      >
                                        Vodal, Petr vs. Zelezny, Daniel
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834313"
                                        className="menu-link-redi"
                                      >
                                        Vojna, Daniel vs. Simecek, Jan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834315"
                                        className="menu-link-redi"
                                      >
                                        Holik, Simon vs. Trefny, Jan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834319"
                                        className="menu-link-redi"
                                      >
                                        Vodal, Petr vs. Trefny, Jan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834321"
                                        className="menu-link-redi"
                                      >
                                        Vonasek, Jan vs. Vojna, Daniel
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834323"
                                        className="menu-link-redi"
                                      >
                                        Zelezny, Daniel vs. Holik, Simon
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834327"
                                        className="menu-link-redi"
                                      >
                                        Simecek, Jan vs. Vonasek, Jan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834329"
                                        className="menu-link-redi"
                                      >
                                        Dvorak, Frantisek vs. Knazik, Ondrej
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834331"
                                        className="menu-link-redi"
                                      >
                                        Zelezny, Daniel vs. Trefny, Jan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834333"
                                        className="menu-link-redi"
                                      >
                                        Kolar, Vlastimil vs. Kotrbaty, Petr
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834335"
                                        className="menu-link-redi"
                                      >
                                        Dvorak, Frantisek vs. Trefny, Jan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834337"
                                        className="menu-link-redi"
                                      >
                                        Kosacky, Adam vs. Marat, Filip
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834339"
                                        className="menu-link-redi"
                                      >
                                        Knazik, Ondrej vs. Zelezny, Daniel
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834341"
                                        className="menu-link-redi"
                                      >
                                        Kolar, Vlastimil vs. Marat, Filip
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834343"
                                        className="menu-link-redi"
                                      >
                                        Dvorak, Frantisek vs. Zelezny, Daniel
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834347"
                                        className="menu-link-redi"
                                      >
                                        Trefny, Jan vs. Knazik, Ondrej
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834349"
                                        className="menu-link-redi"
                                      >
                                        Kolar, Vlastimil vs. Kosacky, Adam
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834351"
                                        className="menu-link-redi"
                                      >
                                        Marat, Filip vs. Kotrbaty, Petr
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse81">
                                  WTT Champions Chongqing, WS
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse81">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58778621"
                                        className="menu-link-redi"
                                      >
                                        Samara, Elizabeta vs. Xiao, Maria
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58778609"
                                        className="menu-link-redi"
                                      >
                                        Diaz, Adriana vs. Wang, Manyu
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58778615"
                                        className="menu-link-redi"
                                      >
                                        Harimoto, Miwa vs. Joo, Cheonhui
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58778613"
                                        className="menu-link-redi"
                                      >
                                        Szocs, Bernadette Cynthia vs. Yuan, Jia
                                        Nan
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse82">
                                  TT Elite Series
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse82">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827633"
                                        className="menu-link-redi"
                                      >
                                        Murawski, Michal vs. Czerwinski, Bartosz
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827635"
                                        className="menu-link-redi"
                                      >
                                        Wiecek, Adrian vs. Abbasi, Amirreza
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827639"
                                        className="menu-link-redi"
                                      >
                                        Iwasyszyn, Wojciech vs. Kotwica, Dawid
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827641"
                                        className="menu-link-redi"
                                      >
                                        Spychala, Adrian vs. Balcerzak, Marcin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827643"
                                        className="menu-link-redi"
                                      >
                                        Golebiowski, Mateusz vs. Kolasa, Szymon
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827649"
                                        className="menu-link-redi"
                                      >
                                        Nowalinski, Maciej vs. Czerwinski,
                                        Bartosz
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827651"
                                        className="menu-link-redi"
                                      >
                                        Felkel, Grzegorz vs. Wiecek, Adrian
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827661"
                                        className="menu-link-redi"
                                      >
                                        Sklensky, Miroslav vs. Abbasi, Amirreza
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827669"
                                        className="menu-link-redi"
                                      >
                                        Golebiowski, Mateusz vs. Wiecek, Adrian
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827677"
                                        className="menu-link-redi"
                                      >
                                        Felkel, Grzegorz vs. Sklensky, Miroslav
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827701"
                                        className="menu-link-redi"
                                      >
                                        Wiecek, Adrian vs. Kolasa, Szymon
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse83">
                                  WTT Champions Chongqing, MS
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse83">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58778297"
                                        className="menu-link-redi"
                                      >
                                        Jha, Kanak vs. Lebrun, Felix
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58778291"
                                        className="menu-link-redi"
                                      >
                                        Kallberg, Anton vs. Chen, Yuanyu
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58778287"
                                        className="menu-link-redi"
                                      >
                                        Moregaard, Truls vs. Groth, Jonathan
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse84">
                                  Czech Liga Pro
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse84">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820901"
                                        className="menu-link-redi"
                                      >
                                        Malek, Lukas vs. Dedek, Jiri
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58821127"
                                        className="menu-link-redi"
                                      >
                                        Jaros, Radim vs. Klusacek, Patrik
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820877"
                                        className="menu-link-redi"
                                      >
                                        Kolisnyk, Oleksandr vs. Sobisek, Martin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820831"
                                        className="menu-link-redi"
                                      >
                                        Vondrak, Michal vs. Klement, Milan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820809"
                                        className="menu-link-redi"
                                      >
                                        Dedek, Jiri vs. Darin, Kyryl
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820893"
                                        className="menu-link-redi"
                                      >
                                        Kolisnyk, Oleksandr vs. Vondrak, Michal
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58821177"
                                        className="menu-link-redi"
                                      >
                                        Jaros, Radim vs. Flesar, Milan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820875"
                                        className="menu-link-redi"
                                      >
                                        Andrle, Tomas vs. Dedek, Jiri
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820903"
                                        className="menu-link-redi"
                                      >
                                        Grohsgott, Jiri vs. Strnad, Jaroslav
                                        (1961)
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58821149"
                                        className="menu-link-redi"
                                      >
                                        Petracek, Vratislav vs. Huk, Martin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820845"
                                        className="menu-link-redi"
                                      >
                                        Vondrak, Michal vs. Pozarsky, Jiri
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820879"
                                        className="menu-link-redi"
                                      >
                                        Strnad, Jaroslav (1961) vs. Pycha, Matej
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58821183"
                                        className="menu-link-redi"
                                      >
                                        Kosprd, Antonin vs. Holas, Petr
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58821343"
                                        className="menu-link-redi"
                                      >
                                        Kliuchuk, Rostyslav vs. Bayer, Alesh
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58820815"
                                        className="menu-link-redi"
                                      >
                                        Cmerda, Ondrej vs. Regner, Michal
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse9">
                            <span> Volleyball </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse9">
                            <ul className="nav-second-level">
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse90">
                                  Pro League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse90">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827019"
                                        className="menu-link-redi"
                                      >
                                        Sokol-Pro vs. Feniks Tver
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58827087"
                                        className="menu-link-redi"
                                      >
                                        Plamya Pro vs. Vityaz
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse91">
                                  Kazakhstan / National League, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse91">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58829121"
                                        className="menu-link-redi"
                                      >
                                        Karaganda vs. VC Aktobe
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58829181"
                                        className="menu-link-redi"
                                      >
                                        VC Berel vs. VC Zhetysu
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse92">
                                  Republic of Korea / V League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse92">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/54044599"
                                        className="menu-link-redi"
                                      >
                                        Daejeon Bluefangs vs. Cheonan Skywalkers
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse93">
                                  Finland / Mestaruusliiga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse93">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52776231"
                                        className="menu-link-redi"
                                      >
                                        Kyky-Betset vs. TUTO Volley
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse94">
                                  Bulgaria / Super League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse94">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53999627"
                                        className="menu-link-redi"
                                      >
                                        Dobrudja Dobrich vs. Deya Volley Burgas
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53999629"
                                        className="menu-link-redi"
                                      >
                                        Beroe Stara Zagora vs. Pirin Razlog
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/53999633"
                                        className="menu-link-redi"
                                      >
                                        Montana vs. Neftochimic Burgas
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse95">
                                  Finland / Mestaruusliiga, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse95">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58767909"
                                        className="menu-link-redi"
                                      >
                                        LP Kangasala vs. LP Vampula
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse96">
                                  Slovakia / Extraliga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse96">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58767159"
                                        className="menu-link-redi"
                                      >
                                        TJ Spartak Myjava vs. TJ Slavia Svidnik
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse97">
                                  Czechia / Extraliga
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse97">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58769489"
                                        className="menu-link-redi"
                                      >
                                        Vk Pribram vs. Volejbal Brno
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse98">
                                  Denmark / VolleyLigaen Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse98">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58439575"
                                        className="menu-link-redi"
                                      >
                                        Ikast KFUM Volleyball vs. Brondby Vk
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a data-bs-toggle="collapse" href="#collapse99">
                                  Slovakia / Extraliga, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse99">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57795761"
                                        className="menu-link-redi"
                                      >
                                        VK Nove Mesto Nad Vahom vs. Slavia Eu
                                        Bratislava
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57795759"
                                        className="menu-link-redi"
                                      >
                                        Ftvs UK Bratislava vs. Va Uniza Zilina
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse910"
                                >
                                  Switzerland / Nationalliga A, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse910">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58772557"
                                        className="menu-link-redi"
                                      >
                                        Aesch Pfeffingen vs. Vbc Cheseaux
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58772555"
                                        className="menu-link-redi"
                                      >
                                        Volley Lugano vs. Volley Dudingen
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse911"
                                >
                                  Serie A2, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse911">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57816031"
                                        className="menu-link-redi"
                                      >
                                        Millenium Brescia vs. US Esperia
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/57816027"
                                        className="menu-link-redi"
                                      >
                                        Helvia Recina Macerata vs. Trentino
                                        Volley Femminile
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse912"
                                >
                                  Denmark / VolleyLigaen
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse912">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58439623"
                                        className="menu-link-redi"
                                      >
                                        Ikast KFUM vs. ASV Elite
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse913"
                                >
                                  International / CEV Cup
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse913">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58466555"
                                        className="menu-link-redi"
                                      >
                                        Trentino Volley vs. Ziraat Bankasi
                                        Ankara
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse914"
                                >
                                  Belgium / Liga Heren
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse914">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58670209"
                                        className="menu-link-redi"
                                      >
                                        Volley Menen vs. VBC Waremme
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse915"
                                >
                                  International / CEV Champions League, Women
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse915">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58260181"
                                        className="menu-link-redi"
                                      >
                                        Volley Conegliano vs. KS Rzeszow
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse10">
                            <span> Ice Hockey </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse10">
                            <ul className="nav-second-level">
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse100"
                                >
                                  Russia / MHL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse100">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52319577"
                                        className="menu-link-redi"
                                      >
                                        HC Taifun vs. HORS-Kareliya Kondopoga
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52319573"
                                        className="menu-link-redi"
                                      >
                                        Kuznetskie Medvedi vs. Mamonty Yugry
                                        Khanty Mansiysk
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/52319575"
                                        className="menu-link-redi"
                                      >
                                        JHC Atlant Moscow Oblast vs. Akm-Junior
                                        Novomoskovsk
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse101"
                                >
                                  Russia / VHL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse101">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51578053"
                                        className="menu-link-redi"
                                      >
                                        HC Yugra Khanty-Mansiysk vs. HK Ryazan
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse102"
                                >
                                  Russia / KHL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse102">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/50709233"
                                        className="menu-link-redi"
                                      >
                                        HC Lada Togliatti vs. Spartak Moscow
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse103"
                                >
                                  Finland / Mestis
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse103">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58807855"
                                        className="menu-link-redi"
                                      >
                                        Iisalmen Peli-Karhut vs. Kiekko-Pojat
                                        Joensuu
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58807805"
                                        className="menu-link-redi"
                                      >
                                        Jokerit Helsinki vs. Kiekko-Vantaa
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse104"
                                >
                                  Slovakia / SHL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse104">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58834533"
                                        className="menu-link-redi"
                                      >
                                        HC TEBS Bratislava vs. 95 Povazska
                                        Bystrica
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse105"
                                >
                                  Norway / 1st Division
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse105">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58616011"
                                        className="menu-link-redi"
                                      >
                                        Ringerike IHK Hoenefoss vs. Gjovik
                                        Mammuts
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse106"
                                >
                                  Norway / Eliteserien
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse106">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58743655"
                                        className="menu-link-redi"
                                      >
                                        Stavanger Oilers vs. Narvik
                                        Ishockeyklubb
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse107"
                                >
                                  Sweden / Allsvenskan
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse107">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58740237"
                                        className="menu-link-redi"
                                      >
                                        IK Oskarshamn vs. Nybro Vikings IF
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse108"
                                >
                                  France / Ligue Magnus
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse108">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58808129"
                                        className="menu-link-redi"
                                      >
                                        Rouen Dragons vs. HC Amiens Somme
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse109"
                                >
                                  Canada / OHL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse109">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51137149"
                                        className="menu-link-redi"
                                      >
                                        Kingston Frontenacs vs. Ottawa 67s
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51137151"
                                        className="menu-link-redi"
                                      >
                                        Owen Sound Attack vs. Flint Firebirds
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51137155"
                                        className="menu-link-redi"
                                      >
                                        Sarnia Sting vs. Erie Otters
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51137153"
                                        className="menu-link-redi"
                                      >
                                        Peterborough Petes vs. Brampton
                                        Steelheads
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse1010"
                                >
                                  USA / NCAA, Regular Season
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse1010">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58769349"
                                        className="menu-link-redi"
                                      >
                                        UMASS Minutemen vs. Vermont Catamounts
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse1011"
                                >
                                  Canada / WHL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse1011">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51137331"
                                        className="menu-link-redi"
                                      >
                                        Brandon Wheat Kings vs. Saskatoon Blades
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51138411"
                                        className="menu-link-redi"
                                      >
                                        Lethbridge Hurricanes vs. Prince Albert
                                        Raiders
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51138769"
                                        className="menu-link-redi"
                                      >
                                        Swift Current Broncos vs. Red Deer
                                        Rebels
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse1012"
                                >
                                  Quebec Major Junior Hockey League
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse1012">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/50682693"
                                        className="menu-link-redi"
                                      >
                                        Rimouski Oceanic vs. Sherbrooke Phoenix
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse1013"
                                >
                                  USA / NHL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse1013">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51247793"
                                        className="menu-link-redi"
                                      >
                                        Detroit Red Wings vs. Buffalo Sabres
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51247795"
                                        className="menu-link-redi"
                                      >
                                        Calgary Flames vs. Vancouver Canucks
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51247797"
                                        className="menu-link-redi"
                                      >
                                        Utah Hockey Club vs. Anaheim Ducks
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51247799"
                                        className="menu-link-redi"
                                      >
                                        Seattle Kraken vs. Montreal Canadiens
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse1014"
                                >
                                  USA / AHL
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse1014">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51575253"
                                        className="menu-link-redi"
                                      >
                                        Tucson Roadrunners vs. Ontario Reign
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/51574969"
                                        className="menu-link-redi"
                                      >
                                        Abbotsford Canucks vs. Bakersfield
                                        Condors
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse11">
                            <span> Darts </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse11">
                            <ul className="nav-second-level">
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse110"
                                >
                                  International / Modus Super Series
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse110">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687259"
                                        className="menu-link-redi"
                                      >
                                        Duff, Neil vs. McDermott, Andrew
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687261"
                                        className="menu-link-redi"
                                      >
                                        Allen, Antony vs. Edwards, Kevin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687263"
                                        className="menu-link-redi"
                                      >
                                        Hessing, Rick vs. Worsley, Jonathan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687265"
                                        className="menu-link-redi"
                                      >
                                        McDermott, Andrew vs. Allen, Antony
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687267"
                                        className="menu-link-redi"
                                      >
                                        Worsley, Jonathan vs. Duff, Neil
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687269"
                                        className="menu-link-redi"
                                      >
                                        Edwards, Kevin vs. Hessing, Rick
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687271"
                                        className="menu-link-redi"
                                      >
                                        McDermott, Andrew vs. Worsley, Jonathan
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687273"
                                        className="menu-link-redi"
                                      >
                                        Allen, Antony vs. Hessing, Rick
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687275"
                                        className="menu-link-redi"
                                      >
                                        Duff, Neil vs. Edwards, Kevin
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687277"
                                        className="menu-link-redi"
                                      >
                                        Worsley, Jonathan vs. Allen, Antony
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687279"
                                        className="menu-link-redi"
                                      >
                                        Edwards, Kevin vs. McDermott, Andrew
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687281"
                                        className="menu-link-redi"
                                      >
                                        Hessing, Rick vs. Duff, Neil
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687285"
                                        className="menu-link-redi"
                                      >
                                        Duff, Neil vs. Allen, Antony
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/58687287"
                                        className="menu-link-redi"
                                      >
                                        McDermott, Andrew vs. Hessing, Rick
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-bs-toggle="collapse" href="#collapse12">
                            <span> Futsal </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="collapse12">
                            <ul className="nav-second-level">
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#collapse120"
                                >
                                  International / UEFA Futsal EURO,
                                  Qualification
                                  <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="collapse120">
                                  <ul className="nav-second-level">
                                    <li>
                                      <a
                                        href="#/guest/event/detail/54188383"
                                        className="menu-link-redi"
                                      >
                                        Belgium vs. Czechia
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#/guest/event/detail/54188223"
                                        className="menu-link-redi"
                                      >
                                        Poland vs. Moldova
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: "419px" }}
            />
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ width: "0px", display: "none" }}
            />
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ height: "0px", display: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
