import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useRef } from "react";
import { Settings } from "../../../api";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Dropdown = ({ showDropdown, setShowDropdown }) => {
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { valueByLanguage } = useLanguage();
  const { user } = useSelector((state) => state.auth);
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
  };

  useCloseModalClickOutside(dropdownRef, () => {
    setShowDropdown(false);
  });

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
      setShowDropdown(false);
    }
  };
  return (
    <div
      ref={dropdownRef}
      className={`dropdown-menu dropdown-menu-end profile-dropdown    ${
        showDropdown ? "show" : ""
      }`}
    >
      <div className="dropdown-header noti-title">
        <h6 className="text-overflow m-0">{user}</h6>
      </div>
      {Settings?.branchWhatsapplink && (
        <a
          onClick={() => handleOpenSocialLink(Settings?.branchWhatsapplink)}
          className="dropdown-item notify-item"
        >
          Customer Support
        </a>
      )}
      <Link
        onClick={closeDropdown}
        to="/deposit"
        className="dropdown-item notify-item"
      >
        {languageValue(valueByLanguage, LanguageKey.DEPOSIT)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/withdraw"
        className="dropdown-item notify-item"
      >
        {languageValue(valueByLanguage, LanguageKey.WITHDRAW)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/deposit-report"
        className="dropdown-item notify-item"
      >
        Deposit Report
      </Link>
      <Link
        onClick={closeDropdown}
        to="/withdraw-report"
        className="dropdown-item notify-item"
      >
        Withdraw Report
      </Link>
      <Link
        onClick={closeDropdown}
        to="/open-bets"
        className="dropdown-item notify-item"
      >
        Open Bets
      </Link>
      <Link
        onClick={closeDropdown}
        to="/betting-profit-loss"
        className="dropdown-item notify-item"
      >
        Betting Profit & Loss
      </Link>
      <Link
        onClick={closeDropdown}
        to="/my-bank-details"
        className="dropdown-item notify-item"
      >
        {languageValue(valueByLanguage, LanguageKey.MY_BANK_DETAILS)}
      </Link>
      {Settings?.referral && (
        <Link
          onClick={closeDropdown}
          to="/affiliate"
          className="dropdown-item notify-item"
        >
          Affiliate
        </Link>
      )}

      <Link
        onClick={closeDropdown}
        to="/promotions"
        className="dropdown-item notify-item"
      >
        Promotions
      </Link>

      <Link
        onClick={closeDropdown}
        to="/bonus-statement"
        className="dropdown-item notify-item"
      >
        {languageValue(valueByLanguage, LanguageKey.BONUS_STATEMENT)}
      </Link>

      <Link
        onClick={closeDropdown}
        to="/lossback-bonus"
        className="dropdown-item notify-item"
      >
        Lossback Bonus
      </Link>

      {closePopupForForever && (
        <Link
          onClick={closeDropdown}
          to="/app-only-bonus"
          className="dropdown-item notify-item"
        >
          App Only Bonus
        </Link>
      )}

      <Link
        onClick={closeDropdown}
        to="/change-password"
        className="dropdown-item notify-item"
      >
        Change Password
      </Link>
      <Link
        onClick={closeDropdown}
        to="/rules"
        className="dropdown-item notify-item"
      >
        Rules
      </Link>
      <a
        onClick={handleLogout}
        className="dropdown-item notify-item logout-btn"
      >
        Logout <i className="fe-log-out" />
      </a>
    </div>
  );
};

export default Dropdown;
