import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Sidebar = () => {
  const { valueByLanguage } = useLanguage();
  const navigate = useNavigate();
  const handleNavigate = (tab) => {
    if (tab?.group || tab?.group === 0) {
      navigate(`/sports/${tab?.group}`);
    } else {
      navigate(tab?.path);
    }
  };

  const sidebarMenu = [
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
      name: languageValue(valueByLanguage, LanguageKey.HORSE),
      group: 7,
    },
    {
      id: 6,
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
    <div className="left-side-menu">
      <div data-simplebar="init" className="h-100">
        <div className="simplebar-wrapper" style={{ margin: "0px" }}>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "0px", bottom: "0px" }}
            >
              <div
                className="simplebar-content-wrapper"
                tabIndex={0}
                role="region"
                aria-label="scrollable content"
                style={{ height: "100%", overflow: "hidden" }}
              >
                <div className="simplebar-content" style={{ padding: "0px" }}>
                  <div id="sidebar-menu">
                    <ul id="side-menu">
                      {sidebarMenu?.map((menu) => (
                        <li key={menu.id}>
                          <a onClick={() => handleNavigate(menu)}>
                            <span> {menu.name} </span>
                            <span className="menu-arrow" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
