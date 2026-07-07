import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import { headerTab } from "../../../static/group";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
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
} from "../../../redux/features/global/globalSlice";
import { useLanguage } from "../../../context/LanguageProvider";
import Error from "../../modals/Error/Error";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";

const Header = () => {
  const { setLanguage } = useLanguage();
  const { showAppPopUp, windowWidth, showAPKModal, closePopupForForever } =
    useSelector((state) => state?.global);
  const [forceChangePassword, setForceChangePassword] = useState(false);
  const { data } = useBalance();
  const [showDropdown, setShowDropdown] = useState(false);
  const { token, user, bonusToken } = useSelector((state) => state.auth);
  const { logo } = useLogo();
  const navigate = useNavigate();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();
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
    if (tab?.path !== "/sports-book" && !tab?.group) {
      navigate(tab?.path);
    }
  };

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
    };
    const data = await handleLogin(loginData).unwrap();

    if (data.success) {
      const token = data?.result?.token;
      const bonusToken = data?.result?.bonusToken;
      const user = data?.result?.loginName;
      const game = data?.result?.buttonValue?.game;
      const memberId = data?.result?.memberId;
      dispatch(setUser({ user, token }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (data?.result?.changePassword) {
        setForceChangePassword(true);
      } else {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(data?.error);
    }
  };

  const loginWithDemo = async () => {
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();
    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
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

  return (
    <div>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      {forceChangePassword && (
        <ForceChangePassword setForceChangePassword={setForceChangePassword} />
      )}
      {!Settings.apk_link && showAppPopUp && windowWidth < 1040 && <AppPopup />}
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
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="userloginform ng-untouched ng-pristine ng-invalid"
                  >
                    <div className="row align-items-center">
                      <div className="col-auto d-flex px-1">
                        <i
                          className="mdi mdi-account text-light"
                          style={{ marginRight: "4px", fontSize: "17px" }}
                        />
                        <input
                          {...register("username", { required: true })}
                          type="text"
                          placeholder="Username"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                        />
                      </div>
                      <div className="col-auto px-0">
                        <div className="input-group">
                          <input
                            {...register("password", { required: true })}
                            type="password"
                            placeholder="Passsword"
                            className="form-control ng-untouched ng-pristine ng-invalid"
                          />
                        </div>
                      </div>
                      <div className="col-auto px-1">
                        <button type="submit" className="btn btnlogin">
                          Login
                          <i className="mdi mdi-arrow-right" />
                        </button>
                        <button
                          onClick={loginWithDemo}
                          type="button"
                          className="btn btnlogin"
                        >
                          Login with Demo ID
                          <i className="mdi mdi-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  type="button"
                  className="btn btn-login py-1"
                  style={{ marginTop: "16px" }}
                >
                  <i className="mdi mdi-account" /> Login
                </button>
              </li>
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
          {token && (
            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
              <li className="d-none d-xl-block">
                <form className="app-search ng-untouched ng-pristine ng-valid">
                  <div className="app-search-box">
                    <div className="input-group">
                      <button
                        style={{ width: "auto" }}
                        type="submit"
                        className="btn input-group-text px-1"
                      >
                        <i className="mdi mdi-search-web"></i>
                      </button>
                      <input
                        type="text"
                        placeholder="Search Events"
                        className="form-control ng-untouched ng-pristine ng-valid"
                        aria-expanded="false"
                        aria-autocomplete="list"
                      />
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          )}

          <div className="clearfix" />
        </div>
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
                      className={tab.class ? tab.class : ""}
                      onClick={() => handleNavigate(tab)}
                    >
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
