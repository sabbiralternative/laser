import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../context/LanguageProvider";
import { logout } from "../../redux/features/auth/authSlice";
import { Settings } from "../../api";
import { languageValue } from "../../utils/language";
import { LanguageKey } from "../../const";
import { Link, useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { valueByLanguage } = useLanguage();
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
                      Customer Support
                    </a>
                  </li>
                )}

                <li>
                  <Link to="/deposit">
                    {" "}
                    {languageValue(valueByLanguage, LanguageKey.DEPOSIT)}
                  </Link>
                </li>
                <li>
                  <Link to="/withdraw">
                    {" "}
                    {languageValue(valueByLanguage, LanguageKey.WITHDRAW)}
                  </Link>
                </li>
                <li>
                  <Link to="/deposit-report"> Deposit Report</Link>
                </li>
                <li>
                  <Link to="/withdraw-report"> Withdraw Report</Link>
                </li>
                <li>
                  <Link to="/open-bets"> Open Bets</Link>
                </li>
                <li>
                  <Link to="/betting-profit-loss">Betting Profit & Loss</Link>
                </li>
                <li>
                  <Link to="/my-bank-details">
                    {" "}
                    {languageValue(
                      valueByLanguage,
                      LanguageKey.MY_BANK_DETAILS,
                    )}
                  </Link>
                </li>
                {Settings?.referral && (
                  <li>
                    <Link to="/affiliate">Affiliate</Link>
                  </li>
                )}

                <li>
                  <Link to="/promotions">Promotions</Link>
                </li>
                <li>
                  <Link to="/bonus-statement">
                    {" "}
                    {languageValue(
                      valueByLanguage,
                      LanguageKey.BONUS_STATEMENT,
                    )}
                  </Link>
                </li>

                {closePopupForForever && (
                  <li>
                    <Link to="/app-only-bonus">App Only Bonus</Link>
                  </li>
                )}

                <li>
                  <Link to="/change-password">Change Password</Link>
                </li>
                <li>
                  <Link to="/rules">Rules</Link>
                </li>
              </ul>
              <a onClick={handleLogout} className="mbl-logout-btn">
                LOGOUT <i className="mdi mdi-login-variant" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
