import { useNavigate } from "react-router-dom";
import { sidebarMenu } from "../../../static/group";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigate = (tab) => {
    if (tab?.group || tab?.group === 0) {
      navigate(`/sports/${tab?.group}`);
    } else {
      navigate(tab?.path);
    }
  };
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
