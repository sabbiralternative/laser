import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import toast from "react-hot-toast";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import useBalance from "../../../hooks/balance";
import ForceChangePassword from "../../modals/ForceChangePassword";
import WarningCondition from "../WarningCondition/WarningCondition";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
  setShowEditStake,
  setShowLanguageModal,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import Search from "./Search";
import Language from "../../modals/Language/Language";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const Header = () => {
  const { setLanguage, language, getLanguage } = useLanguage();
  const {
    showAppPopUp,
    windowWidth,
    showAPKModal,
    closePopupForForever,
    showEditStake,
    showLanguageModal,
  } = useSelector((state) => state?.global);
  const [forceChangePassword, setForceChangePassword] = useState(false);
  const { data } = useBalance();
  const [showDropdown, setShowDropdown] = useState(false);
  const { token, user, bonusToken } = useSelector((state) => state.auth);
  const { logo } = useLogo();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const location = useLocation();

  const handleNavigate = (tab) => {
    if (tab?.group || tab?.group === 0) {
      console.log(tab);
      navigate(`/sports/${tab?.group}`);
    }

    if (tab?.path === "/sports-book") {
      if (token) {
        if (bonusToken) {
          return toast.error("Bonus wallet is available only on sports.");
        }
        if (Settings.casino_currency !== "AED") {
          navigate(`/casino/${tab.name.replace(/ /g, "")}/${tab.id}`);
        } else {
          setGameInfo({ gameName: "", gameId: "" });
          setGameInfo({ gameName: tab.name, gameId: tab.id });
          setShowWarning(true);
        }
      } else {
        toast.error("Please login to access the game");
      }
    }
    if (tab?.path !== "/sports-book" && !tab?.group && tab?.group !== 0) {
      navigate(tab?.path);
    }
  };

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);
  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "english");
  }, [setLanguage]);
  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  const headerTab = [
    {
      id: 0,
      name: getLanguage(LanguageKey.HOME),
      group: 0,
    },
    {
      id: 1,
      name: "in-play",
      group: 0,
    },
    {
      id: 2,
      name: getLanguage(LanguageKey.CRICKET),
      group: 4,
    },
    {
      id: 3,
      name: getLanguage(LanguageKey.FOOTBALL),
      group: 1,
    },
    {
      id: 4,
      name: getLanguage(LanguageKey.TENNIS),
      group: 2,
    },
    {
      id: 5,
      name: getLanguage(LanguageKey.CASINO),
      className: "hightlight-menus",
      path: "/casino?product=All&category=All",
    },
    // {
    //   id: 6,
    //   name: "Int Casino",
    //   className: "hightlight-menus",
    //   path: "/int-casino",
    // },
    {
      id: 550000,
      name: getLanguage(LanguageKey.SPORTSBOOK),
      className: "new-tag-menus sb-menus",
      path: "/sports-book",
    },
    {
      id: 8,
      name: getLanguage(LanguageKey.HORSE),
      group: 7,
    },
    {
      id: 9,
      name: getLanguage(LanguageKey.GREYHOUND),
      group: 4339,
    },
    {
      id: 7,
      name: getLanguage(LanguageKey.KABADDI),
      group: 5,
    },
    {
      id: 8,
      name: getLanguage(LanguageKey.POLITICS),
      group: 6,
    },
    {
      name: getLanguage(LanguageKey.BASKETBALL),
      group: 7522,
      image: "/event/basketball.png",
    },
    {
      name: getLanguage(LanguageKey.BASEBALL),
      group: 7511,
      image: "/event/baseball.png",
    },
    {
      name: getLanguage(LanguageKey.TABLE_TENNIS),
      group: 20,
      image: "/event/tabletennis.png",
    },
    {
      name: getLanguage(LanguageKey.VOLLYBALL),
      group: 998917,
      image: "/event/volleyball.png",
    },
    {
      name: getLanguage(LanguageKey.ICE_HOCKY),
      group: 7524,
      image: "/event/icehockey.png",
    },
    {
      name: getLanguage(LanguageKey.RUGBY),
      group: 5,
      image: "/event/rugby.png",
    },
    {
      name: getLanguage(LanguageKey.MIXED_MARTIAL_ARTS),
      group: 26420387,
      image: "/event/mma.png",
    },
    {
      name: getLanguage(LanguageKey.DARTS),
      group: 3503,
      image: "/event/darts.png",
    },
    {
      name: getLanguage(LanguageKey.FUTSAL),
      group: 29,
      image: "/event/futsal.png",
    },
  ];

  return (
    <div>
      {showLanguageModal && <Language />}
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      {forceChangePassword && (
        <ForceChangePassword setForceChangePassword={setForceChangePassword} />
      )}
      {Settings.apk_link && showAppPopUp && windowWidth < 1040 && <AppPopup />}
      {Settings.apk_link && showAPKModal && <DownloadAPK />}
      <div id="mainNav" className="navbar-custom">
        <div className="container-fluid">
          {token ? (
            <ul className="list-unstyled topnav-menu float-end mb-0">
              <li className="dropdown d-none d-lg-inline-block">
                <form className="ng-untouched ng-pristine ng-valid" />
              </li>

              <li className="dropdown notification-list topbar-dropdown">
                <div className="main-exposure">
                  <div className="be_div">
                    <a>
                      {getLanguage(LanguageKey.BALANCE)}{" "}
                      <b> {data?.availBalance} </b>
                    </a>
                    <a>
                      {getLanguage(LanguageKey.EXPOSURE)}{" "}
                      <b> {data?.deductedExposure} </b>
                    </a>
                  </div>
                  <b className="head-username">
                    <i className="mdi mdi-account" />
                    {user}
                  </b>
                  <a
                    style={{ pointerEvents: showDropdown ? "none" : "auto" }}
                    onClick={() => setShowDropdown(true)}
                    className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
                  >
                    <span className="pro-user-name ms-1">
                      <i className="mdi mdi-account" />{" "}
                      {getLanguage(LanguageKey.ACCOUNT)}
                    </span>
                  </a>
                  <Dropdown
                    setShowDropdown={setShowDropdown}
                    showDropdown={showDropdown}
                  />
                  {Settings.language && (
                    <button
                      onClick={() => dispatch(setShowLanguageModal(true))}
                      className="relative overflow-hidden flex items-center text-white justify-center text-xs  px-2 rounded-full bg-bg_color_secondary border border-border_color_primary capitalize h-[30px]"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 mr-0.5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                      </svg>
                      {/* {language} */}
                      <svg
                        fill="currentColor"
                        width={16}
                        height={16}
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 330 330"
                        className="w-3 h-3 ml-2"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                          />
                        </g>
                      </svg>
                    </button>
                  )}
                </div>
              </li>

              <li className="mobile-section">
                <div className="mo_user-blnc">
                  <b className="head-username">
                    <i className="mdi mdi-account" />
                    {user}
                  </b>
                  <ul>
                    <li>
                      <span>
                        {" "}
                        {getLanguage(LanguageKey.BALANCE)} {data?.availBalance}
                      </span>
                    </li>
                    <li>
                      <a href="#/market-analysis" className="exp-topcount">
                        {getLanguage(LanguageKey.EXPOSURE)}
                      </a>
                      <a className="text-white">
                        (
                        <span style={{ color: "red !important" }}>
                          {data?.deductedExposure}
                        </span>
                        )
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          ) : (
            <ul className="list-unstyled topnav-menu float-end mb-0">
              <li className="dropdown notification-list topbar-dropdown">
                <div>
                  <div className="userloginform ng-untouched ng-pristine ng-invalid">
                    <div className="row align-items-center">
                      <div className="col-auto px-1 flex items-center gap-x-3">
                        <button
                          onClick={() => navigate("/login")}
                          className="btn btnlogin"
                        >
                          {getLanguage(LanguageKey.LOGIN)}
                          <i className="mdi mdi-arrow-right" />
                        </button>
                        <button
                          onClick={() => navigate("/register")}
                          type="button"
                          className="btn btnlogin"
                        >
                          {getLanguage(LanguageKey.REGISTER)}
                          <i className="mdi mdi-arrow-right" />
                        </button>
                        {Settings.language && (
                          <button
                            onClick={() => dispatch(setShowLanguageModal(true))}
                            className="relative overflow-hidden flex items-center text-white justify-center text-xs  px-2 rounded-full bg-bg_color_secondary border border-border_color_primary capitalize h-[30px]"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-0.5"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                              <path d="M3.6 9h16.8" />
                              <path d="M3.6 15h16.8" />
                              <path d="M11.5 3a17 17 0 0 0 0 18" />
                              <path d="M12.5 3a17 17 0 0 1 0 18" />
                            </svg>
                            {/* {language} */}
                            <svg
                              fill="currentColor"
                              width={16}
                              height={16}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 330 330"
                              className="w-3 h-3 ml-2"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  id="XMLID_225_"
                                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                />
                              </g>
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <div>
                {" "}
                <div className="flex lg:hidden">
                  {" "}
                  <button
                    onClick={() => navigate("/login")}
                    type="button"
                    className="btn btn-login py-1"
                    style={{ marginTop: "16px" }}
                  >
                    <i className="mdi mdi-account" />{" "}
                    {getLanguage(LanguageKey.LOGIN)}
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    type="button"
                    className="btn btn-login py-1"
                    style={{ marginTop: "16px" }}
                  >
                    <i className="mdi mdi-account" />{" "}
                    {getLanguage(LanguageKey.REGISTER)}
                  </button>
                  {Settings.language && (
                    <button
                      onClick={() => dispatch(setShowLanguageModal(true))}
                      className="relative overflow-hidden flex items-center text-white justify-center text-xs  px-4 rounded-full bg-bg_color_secondary border border-border_color_primary capitalize h-[30px]"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 mr-0.5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                      </svg>
                      {language}
                      <svg
                        fill="currentColor"
                        width={16}
                        height={16}
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 330 330"
                        className="w-3 h-3 ml-2"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                          />
                        </g>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </ul>
          )}

          <div className="logo-box">
            <Link href="/" className="logo logo-light text-center">
              <span className="logo-sm">
                <img alt="" src={logo} />
              </span>
              <span className="logo-lg">
                <img alt="" className="img-fluid" src={logo} />
              </span>
            </Link>
          </div>
          {token && <Search />}

          <div className="clearfix" />
        </div>
        {token && (
          <div
            data-v-e2580dae=""
            className="header-deposit-withdraw-btn-sec flex items-center lg:!hidden"
          >
            {Settings.deposit && (
              <a data-v-e2580dae="" className="btn_deposit">
                <img
                  data-v-e2580dae=""
                  loading="lazy"
                  rel="preload"
                  src="/icon/deposit-DZCnkO3R.png"
                  className="img-fluid"
                  alt="deposit"
                  title="deposit"
                />
                Deposit
              </a>
            )}
            {Settings.withdraw && (
              <a data-v-e2580dae="" className="btn_withdrawal">
                <img
                  data-v-e2580dae=""
                  loading="lazy"
                  rel="preload"
                  src="/icon/withdraw-C_BTVIDz.png"
                  className="img-fluid"
                  alt="withdraw"
                  title="withdraw"
                />
                Withdrawal
              </a>
            )}
          </div>
        )}
      </div>
      <div className="topnav">
        <div className="container-fluid px-0">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
            <div
              id="topnav-menu-content"
              style={{ visibility: "visible" }}
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav">
                {headerTab.map((tab) => (
                  <li key={tab.id} className="nav-item">
                    <a
                      className={tab.className ? tab.className : ""}
                      onClick={() => handleNavigate(tab)}
                    >
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                onClick={() => dispatch(setShowEditStake(!showEditStake))}
                data-bs-toggle="collapse"
                className="cogSetting ng-star-inserted collapsed"
                aria-expanded="false"
              >
                {" "}
                Setting <i className="mdi mdi-cog"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
