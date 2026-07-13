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
import { useLanguage } from "../../../context/LanguageProvider";
import Error from "../../modals/Error/Error";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import Search from "./Search";
import Language from "../../modals/Language/Language";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Header = () => {
  const { setLanguage, language, valueByLanguage } = useLanguage();
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
      name: languageValue(valueByLanguage, LanguageKey.HOME),
      group: 0,
    },
    {
      id: 1,
      name: "in-play",
      group: 0,
    },
    {
      id: 2,
      name: languageValue(valueByLanguage, LanguageKey.CRICKET),
      group: 4,
    },
    {
      id: 3,
      name: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
      group: 1,
    },
    {
      id: 4,
      name: languageValue(valueByLanguage, LanguageKey.TENNIS),
      group: 2,
    },
    {
      id: 5,
      name: "Casino",
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
      name: "Sports Book",
      className: "new-tag-menus sb-menus",
      path: "/sports-book",
    },
    {
      id: 8,
      name: languageValue(valueByLanguage, LanguageKey.HORSE),
      group: 7,
    },
    {
      id: 9,
      name: languageValue(valueByLanguage, LanguageKey.GREYHOUND),
      group: 4339,
    },
    {
      id: 7,
      name: languageValue(valueByLanguage, LanguageKey.KABADDI),
      group: 5,
    },
    {
      id: 8,
      name: "Politics",
      group: 6,
    },
    {
      name: "Basketball",
      group: 7522,
      image: "/event/basketball.png",
    },
    {
      name: "Baseball",
      group: 7511,
      image: "/event/baseball.png",
    },
    {
      name: "Table Tennis",
      group: 20,
      image: "/event/tabletennis.png",
    },
    {
      name: "Volleyball",
      group: 998917,
      image: "/event/volleyball.png",
    },
    {
      name: "Ice Hockey",
      group: 7524,
      image: "/event/icehockey.png",
    },
    {
      name: "Rugby",
      group: 5,
      image: "/event/rugby.png",
    },
    {
      name: "Mixed Martial Arts",
      group: 26420387,
      image: "/event/mma.png",
    },
    {
      name: "Darts",
      group: 3503,
      image: "/event/darts.png",
    },
    {
      name: "Futsal",
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
                      Bal <b> {data?.availBalance} </b>
                    </a>
                    <a>
                      Exp <b> {data?.deductedExposure} </b>
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
                      <i className="mdi mdi-account" /> My Account
                    </span>
                  </a>
                  <Dropdown
                    setShowDropdown={setShowDropdown}
                    showDropdown={showDropdown}
                  />
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
              </li>

              <li className="mobile-section">
                <div className="mo_user-blnc">
                  <b className="head-username">
                    <i className="mdi mdi-account" />
                    {user}
                  </b>
                  <ul>
                    <li>
                      <span> Bal {data?.availBalance}</span>
                    </li>
                    <li>
                      <a href="#/market-analysis" className="exp-topcount">
                        Exp
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
                          {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                          <i className="mdi mdi-arrow-right" />
                        </button>
                        <button
                          onClick={() => navigate("/register")}
                          type="button"
                          className="btn btnlogin"
                        >
                          {languageValue(valueByLanguage, LanguageKey.REGISTER)}
                          <i className="mdi mdi-arrow-right" />
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
                    {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    type="button"
                    className="btn btn-login py-1"
                    style={{ marginTop: "16px" }}
                  >
                    <i className="mdi mdi-account" />{" "}
                    {languageValue(valueByLanguage, LanguageKey.REGISTER)}
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
