import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const token = useSelector(userToken);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchText?.length > 2) {
      const getSearchData = async () => {
        const { data } = await AxiosSecure.post(API.searchEvent, {
          name: searchText,
        });

        if (data?.result?.length > 0) {
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* hide the search modal */
  const handleHideDropdown = () => {
    setSearchText("");
    setData([]);
  };
  return (
    <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
      <li className="d-none d-xl-block">
        <form className="app-search ng-untouched ng-pristine ng-valid">
          <div className="app-search-box">
            <div className="input-group">
              <button
                style={{ width: "auto", minWidth: "auto" }}
                type="submit"
                className="btn input-group-text px-1"
              >
                <i className="mdi mdi-search-web"></i>
              </button>
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search Events"
                className="form-control ng-untouched ng-pristine ng-valid"
                aria-expanded="false"
                aria-autocomplete="list"
              />
              {searchText?.length > 2 && data?.length > 0 && (
                <div
                  className="typeahead-container dropdown open bottom ng-tns-c44-1 dropdown-menu ng-star-inserted"
                  style={{
                    position: "absolute",
                    display: "block",
                    visibility: "visible",
                    willChange: "transform",
                    top: "0px",
                    left: "0px",
                    transform: "translate3d(23px, 25px, 0px)",
                    height: "144.287px",
                    overflow: "auto",
                  }}
                  id="ngb-typeahead-0"
                  role="listbox"
                >
                  {searchText?.length > 2 &&
                    data?.map((item, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            handleHideDropdown();
                            navigate(
                              `/event-details/${item?.eventTypeId}/${item?.eventId}`,
                            );
                          }}
                          role="option"
                          className="dropdown-item ng-tns-c44-1 ng-trigger ng-trigger-typeaheadAnimation ng-star-inserted"
                          id="ngb-typeahead-0-0"
                        >
                          <a
                            href="#/event/detail/71438752"
                            id="menu-link-redi"
                            className="searchAnchor ng-star-inserted"
                            style={{}}
                          >
                            {item?.name}
                          </a>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </form>
      </li>
    </ul>
  );
};

export default Search;
