import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useRef } from "react";
import { Settings } from "../../../api";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const Dropdown = ({ showDropdown, setShowDropdown }) => {
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { getLanguage } = useLanguage();
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
          {getLanguage(LanguageKey.CUSTOMER_SUPPORT)}
        </a>
      )}
      <Link
        onClick={closeDropdown}
        to="/deposit"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.DEPOSIT)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/withdraw"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.WITHDRAW)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/deposit-report"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.DEPOSIT_STATEMENT)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/withdraw-report"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.WITHDRAW_STATMENT)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/open-bets"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.OPEN_BETS)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/betting-profit-loss"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.BETTING_PROFIT_AND_LOSS)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/my-bank-details"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.MY_BANK_DETAILS)}
      </Link>
      {Settings?.referral && (
        <Link
          onClick={closeDropdown}
          to="/affiliate"
          className="dropdown-item notify-item"
        >
          {getLanguage(LanguageKey.AFFILIATE)}
        </Link>
      )}

      <Link
        onClick={closeDropdown}
        to="/promotions"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.PROMOTIONS)}
      </Link>

      <Link
        onClick={closeDropdown}
        to="/bonus-statement"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.BONUS_STATEMENT)}
      </Link>

      <Link
        onClick={closeDropdown}
        to="/lossback-bonus"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.LOSSBACK_BONUS)}
      </Link>

      {closePopupForForever && (
        <Link
          onClick={closeDropdown}
          to="/app-only-bonus"
          className="dropdown-item notify-item"
        >
          {getLanguage(LanguageKey.APP_ONLY_BONUS)}
        </Link>
      )}

      <Link
        onClick={closeDropdown}
        to="/change-password"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.CHANGE_PASSWORD)}
      </Link>
      <Link
        onClick={closeDropdown}
        to="/rules"
        className="dropdown-item notify-item"
      >
        {getLanguage(LanguageKey.RULES)}
      </Link>
      <a
        onClick={handleLogout}
        className="dropdown-item notify-item logout-btn"
      >
        {getLanguage(LanguageKey.LOGOUT)} <i className="fe-log-out" />
      </a>
    </div>
  );
};

export default Dropdown;
