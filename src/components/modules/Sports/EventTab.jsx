import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { LanguageKey } from "../../../const";
import { eventNameList } from "../../../static/event-name-list";
import useLanguage from "../../../hooks/use-language";

const EventTab = () => {
  const { getLanguage } = useLanguage();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token, bonusToken } = useSelector((state) => state.auth);
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });

  const handleNavigateEvent = (tab) => {
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
  };
  return (
    <div className="eventlistdesign">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="pills navtab-bg desktop-nav-pills">
        <ul
          role="tablist"
          className="nav nav-pills navtab-bg desktop-nav-pills "
          aria-label="Tabs"
        >
          <li className="active nav-item ng-star-inserted">
            <Link
              to="/sports/4"
              role="tab"
              className={`nav-link  ${pathname === "/sports/4" ? "active" : ""}`}
              aria-controls="goto-0"
              aria-selected="true"
              id="goto-0-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/4.svg"
                />{" "}
                {getLanguage(LanguageKey.CRICKET)}
              </div>
            </Link>
          </li>
          <li className="nav-item ng-star-inserted">
            <Link
              to="/sports/1"
              role="tab"
              className={`nav-link  ${pathname === "/sports/1" ? "active" : ""}`}
              aria-controls="goto-1"
              aria-selected="false"
              id="goto-1-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/1.svg"
                />{" "}
                {getLanguage(LanguageKey.FOOTBALL)}
              </div>
            </Link>
          </li>
          <li className="nav-item ng-star-inserted">
            <Link
              to="/sports/2"
              role="tab"
              className={`nav-link  ${pathname === "/sports/2" ? "active" : ""}`}
              aria-controls="goto-2"
              aria-selected="false"
              id="goto-2-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/2.svg"
                />{" "}
                {getLanguage(LanguageKey.TENNIS)}
              </div>
            </Link>
          </li>

          <li className="nav-item tab-hightlight ng-star-inserted">
            <Link
              to="/casino?product=All&category=All"
              role="tab"
              className={`nav-link  ${pathname === "/casino" ? "active" : ""}`}
              aria-controls="goto-5"
              aria-selected="false"
              id="goto-5-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/99998.png"
                />{" "}
                {getLanguage(LanguageKey.CASINO)}
              </div>
            </Link>
          </li>
          <li className="nav-item ng-star-inserted">
            <a
              onClick={() =>
                handleNavigateEvent({ name: "sports-book", id: 550000 })
              }
              role="tab"
              className="nav-link"
              aria-controls="goto-6"
              aria-selected="false"
              id="goto-6-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/99991.svg"
                />{" "}
                {getLanguage(LanguageKey.SPORTSBOOK)}
              </div>
            </a>
          </li>
          <li className="nav-item ng-star-inserted">
            <Link
              to="/sports/7"
              role="tab"
              className={`nav-link  ${pathname === "/sports/7" ? "active" : ""}`}
              aria-controls="goto-7"
              aria-selected="false"
              id="goto-7-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/7.svg"
                />{" "}
                {getLanguage(LanguageKey.HORSE)}
              </div>
            </Link>
          </li>
          <li className="nav-item ng-star-inserted">
            <Link
              to="/sports/4339"
              role="tab"
              className={`nav-link  ${pathname === "/sports/4339" ? "active" : ""}`}
              aria-controls="goto-8"
              aria-selected="false"
              id="goto-8-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/4339.png"
                />{" "}
                {getLanguage(LanguageKey.GREYHOUND)}
              </div>
            </Link>
          </li>

          <li className="nav-item ng-star-inserted">
            <Link
              to="/sports/5"
              role="tab"
              className={`nav-link  ${pathname === "/sports/5" ? "active" : ""}`}
              aria-controls="goto-10"
              aria-selected="false"
              id="goto-10-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/99994.svg"
                />{" "}
                {getLanguage(LanguageKey.KABADDI)}
              </div>
            </Link>
          </li>
          <li className="nav-item ng-star-inserted">
            <Link
              to="/sports/6"
              role="tab"
              className={`nav-link  ${pathname === "/sports/6" ? "active" : ""}`}
              aria-controls="goto-11"
              aria-selected="false"
              id="goto-11-link"
            >
              <span />
              <div className="ng-star-inserted">
                <img
                  style={{ height: "20px" }}
                  className="img-fluid"
                  src="/icon/2378961.png"
                />{" "}
                Politics
              </div>
            </Link>
          </li>
          {eventNameList.map((item) => {
            return (
              <li key={item.id} className="nav-item ng-star-inserted">
                <Link
                  to={`/sports/${item.id}`}
                  role="tab"
                  className={`nav-link  ${pathname === `/sports/${item.id}` ? "active" : ""}`}
                  aria-controls="goto-11"
                  aria-selected="false"
                  id="goto-11-link"
                >
                  <span />
                  <div className="ng-star-inserted">
                    <img
                      style={{ height: "20px", filter: "none" }}
                      className="img-fluid"
                      src={item.image}
                    />{" "}
                    {getLanguage(item.name)}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EventTab;
