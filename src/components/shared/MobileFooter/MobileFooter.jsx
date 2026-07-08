import { Link, useLocation } from "react-router-dom";
import images from "../../../assets/images";

const MobileFooter = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <nav className="mobile-footer-menu">
        <ul>
          <li>
            <Link
              to="/sports/4"
              className={`ui-link ${pathname === "/sports/4" ? "active" : ""}`}
            >
              <img src={images.trophy} className="icon-sports" />
              Sports
            </Link>
          </li>
          <li>
            <Link
              to="/sports/0"
              className={`ui-link ${pathname === "/sports/0" ? "active" : ""}`}
            >
              <img src={images.timer} className="icon-inplay" />
              In-Play
            </Link>
          </li>
          <li className="main-nav">
            <Link to="/" className="ui-link active">
              <img src={images.home} className="icon-home" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/multi-market"
              className={`ui-link ${pathname === "/multi-market" ? "active" : ""}`}
            >
              <img src={images.pinWhiteFooter} className="icon-pin" />
              Multi Market
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className={`ui-link ${pathname === "/account" ? "active" : ""}`}
            >
              <img src={images.user} className="icon-account" />
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileFooter;
