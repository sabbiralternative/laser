import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { Settings } from "../../api";
import { LanguageKey } from "../../const";
import { Link, useNavigate } from "react-router-dom";
import useLanguage from "../../hooks/use-language";

const Account = () => {
  const navigate = useNavigate();
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { getLanguage } = useLanguage();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="ng-star-inserted">
            <div className="mobile-menus-screen">
              <h3>
                <i className="mdi mdi-account-circle" /> {user}{" "}
                {/* <span className="time-zone">GMT+5:30</span> */}
              </h3>

              <ul>
                {Settings?.branchWhatsapplink && (
                  <li>
                    <a
                      onClick={() =>
                        handleOpenSocialLink(Settings?.branchWhatsapplink)
                      }
                    >
                      {" "}
                      {getLanguage(LanguageKey.CUSTOMER_SUPPORT)}
                    </a>
                  </li>
                )}

                <li>
                  <Link to="/deposit"> {getLanguage(LanguageKey.DEPOSIT)}</Link>
                </li>
                <li>
                  <Link to="/withdraw">
                    {" "}
                    {getLanguage(LanguageKey.WITHDRAW)}
                  </Link>
                </li>
                <li>
                  <Link to="/deposit-report">
                    {" "}
                    {getLanguage(LanguageKey.DEPOSIT_STATEMENT)}
                  </Link>
                </li>
                <li>
                  <Link to="/withdraw-report">
                    {" "}
                    {getLanguage(LanguageKey.WITHDRAW_STATMENT)}
                  </Link>
                </li>
                <li>
                  <Link to="/open-bets">
                    {getLanguage(LanguageKey.OPEN_BETS)}
                  </Link>
                </li>
                <li>
                  <Link to="/betting-profit-loss">
                    {getLanguage(LanguageKey.BETTING_PROFIT_AND_LOSS)}
                  </Link>
                </li>
                <li>
                  <Link to="/my-bank-details">
                    {" "}
                    {getLanguage(LanguageKey.MY_BANK_DETAILS)}
                  </Link>
                </li>
                {Settings?.referral && (
                  <li>
                    <Link to="/affiliate">
                      {getLanguage(LanguageKey.AFFILIATE)}
                    </Link>
                  </li>
                )}

                <li>
                  <Link to="/promotions">
                    {getLanguage(LanguageKey.PROMOTIONS)}
                  </Link>
                </li>
                <li>
                  <Link to="/bonus-statement">
                    {" "}
                    {getLanguage(LanguageKey.BONUS_STATEMENT)}
                  </Link>
                </li>

                {closePopupForForever && (
                  <li>
                    <Link to="/app-only-bonus">
                      {getLanguage(LanguageKey.APP_ONLY_BONUS)}
                    </Link>
                  </li>
                )}

                <li>
                  <Link to="/change-password">
                    {getLanguage(LanguageKey.CHANGE_PASSWORD)}
                  </Link>
                </li>
                <li>
                  <Link to="/rules">{getLanguage(LanguageKey.RULES)}</Link>
                </li>
              </ul>
              <a onClick={handleLogout} className="mbl-logout-btn">
                {getLanguage(LanguageKey.LOGOUT)}{" "}
                <i className="mdi mdi-login-variant" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
