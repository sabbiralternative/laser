import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useRef } from "react";

const Dropdown = ({ showDropdown, setShowDropdown }) => {
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
  };

  useCloseModalClickOutside(dropdownRef, () => {
    setShowDropdown(false);
  });
  return (
    <div
      ref={dropdownRef}
      className={`dropdown-menu dropdown-menu-end profile-dropdown    ${
        showDropdown ? "show" : ""
      }`}
    >
      <div className="dropdown-header noti-title">
        <h6 className="text-overflow m-0">demo123</h6>
      </div>
      <Link to="/profile" className="dropdown-item notify-item">
        profile
      </Link>
      <Link
        to="/reports/account-statement"
        className="dropdown-item notify-item"
      >
        account statement
      </Link>
      <Link to="/my-bets" className="dropdown-item notify-item">
        Unsettled Bets
      </Link>
      <Link to="/reports/profit-loss" className="dropdown-item notify-item">
        profit/loss
      </Link>
      <Link to="/market-analysis" className="dropdown-item notify-item">
        Market Analysis
      </Link>
      <Link to="/change-password" className="dropdown-item notify-item">
        Change Password
      </Link>
      <Link to="/rules" className="dropdown-item notify-item">
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
