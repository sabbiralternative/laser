import { useNavigate } from "react-router-dom";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const Sidebar = () => {
  const { getLanguage } = useLanguage();
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
      name: getLanguage(LanguageKey.CRICKET),
      group: 4,
    },
    {
      id: 3,
      name: getLanguage(LanguageKey.FOOTBALL),
      group: 1,
    },
    {
      id: 4,
      name: getLanguage(LanguageKey.TENNIS),
      group: 2,
    },

    {
      id: 5,
      name: getLanguage(LanguageKey.HORSE),
      group: 7,
    },
    {
      id: 6,
      name: getLanguage(LanguageKey.GREYHOUND),
      group: 4339,
    },
    {
      id: 7,
      name: getLanguage(LanguageKey.KABADDI),
      group: 5,
    },
    {
      id: 8,
      name: getLanguage(LanguageKey.POLITICS),
      group: 6,
    },
    {
      name: getLanguage(LanguageKey.BASKETBALL),
      group: 7522,
      image: "/event/basketball.png",
    },
    {
      name: getLanguage(LanguageKey.BASEBALL),
      group: 7511,
      image: "/event/baseball.png",
    },
    {
      name: getLanguage(LanguageKey.TABLE_TENNIS),
      group: 20,
      image: "/event/tabletennis.png",
    },
    {
      name: getLanguage(LanguageKey.VOLLYBALL),
      group: 998917,
      image: "/event/volleyball.png",
    },
    {
      name: getLanguage(LanguageKey.ICE_HOCKY),
      group: 7524,
      image: "/event/icehockey.png",
    },
    {
      name: getLanguage(LanguageKey.RUGBY),
      group: 5,
      image: "/event/rugby.png",
    },
    {
      name: getLanguage(LanguageKey.MIXED_MARTIAL_ARTS),
      group: 26420387,
      image: "/event/mma.png",
    },
    {
      name: getLanguage(LanguageKey.DARTS),
      group: 3503,
      image: "/event/darts.png",
    },
    {
      name: getLanguage(LanguageKey.FUTSAL),
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
