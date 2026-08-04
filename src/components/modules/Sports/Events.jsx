import { useNavigate, useParams } from "react-router-dom";
import { useGroupQuery } from "../../../redux/features/events/events";
import images from "../../../assets/images";
import HorseGreyhound from "../../shared/HorseGreyhound/HorseGreyhound";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import { useState } from "react";
import { filterLiveVirtual } from "../../../utils/filter-live-virtual";

const Events = () => {
  const [liveVirtual, setLiveVirtual] = useState([]);
  const { valueByLanguage } = useLanguage();
  const navigate = useNavigate();
  const { group } = useParams();
  const { data } = useGroupQuery(
    { sportsType: group },
    { pollingInterval: 1000 },
  );

  const headerTab = [
    {
      id: 0,
      name: languageValue(valueByLanguage, LanguageKey.HOME),
      group: 0,
    },
    {
      id: 1,
      name: "in-play",
      group: 0,
    },
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
      name: "Casino",
      class: "hightlight-menus",
      path: "/casino?product=All&category=All",
    },
    // {
    //   id: 6,
    //   name: "Int Casino",
    //   class: "hightlight-menus",
    //   path: "/int-casino",
    // },
    {
      id: 550000,
      name: "Sports Book",
      class: "new-tag-menus sb-menus",
      path: "/sports-book",
    },
    {
      id: 8,
      name: languageValue(valueByLanguage, LanguageKey.HORSE),
      group: 7,
    },
    {
      id: 9,
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
  ];
  const eventName = headerTab.find((tab) => tab.group == group)?.name;

  const navigateGameList = (keys) => {
    navigate(`/sports-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  // const filterAndSortSports = (data) => {
  //   if (!data) return [];

  //   // Filter visible sports
  //   const visibleSports = Object.keys(data).filter((key) => data[key]?.visible);

  //   return visibleSports
  //     .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort) // Sort by 'sort' value
  //     .sort((keyA, keyB) => {
  //       // Prioritize 'Suspended' status
  //       if (
  //         data[keyA].timeStatus === "Suspended" &&
  //         data[keyB].timeStatus !== "Suspended"
  //       )
  //         return 1;
  //       if (
  //         data[keyA].timeStatus !== "Suspended" &&
  //         data[keyB].timeStatus === "Suspended"
  //       )
  //         return -1;
  //       return 0;
  //     });
  // };
  // const sortedSports = filterAndSortSports(data);

  const onChangeLiveVirtual = (type, eventTypeId, isChecked) => {
    const obj = { type, eventTypeId, isChecked };

    setLiveVirtual((prev) => {
      const index = prev.findIndex(
        (item) => item.eventTypeId === eventTypeId && item.type === type,
      );

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          isChecked,
        };
        return updated;
      }

      return [...prev, obj];
    });
  };
  const groupedData = filterLiveVirtual(liveVirtual, group, data);
  return (
    <div className="row">
      <div className="col-12">
        <div className="eventlistdesign">
          <h2 className="high-desktop">
            &nbsp;&nbsp; {eventName}
            <ul className="live_virtual">
              <li>
                <input
                  onChange={(e) =>
                    onChangeLiveVirtual("live", group, e.target?.checked)
                  }
                  type="checkbox"
                  defaultValue="Order one"
                  id="checkboxOne1-inplay"
                  className="ng-untouched ng-pristine ng-valid"
                />
                <label htmlFor="checkboxOne1-inplay">LIVE</label>
              </li>
              <li>
                <input
                  onChange={(e) =>
                    onChangeLiveVirtual("virtual", group, e.target?.checked)
                  }
                  type="checkbox"
                  defaultValue="Order Two"
                  id="checkboxTwo1-inplay"
                  className="ng-untouched ng-pristine ng-valid"
                />
                <label htmlFor="checkboxTwo1-inplay">VIRTUAL</label>
              </li>
            </ul>
            <div className="dropdown viewby-filter">
              <button
                type="button"
                id="ViewBy"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="mdi mdi-filter" />
                View by
              </button>
              <div className="dropdown-menu">
                <a href="javascript:void(0)">Competition</a>
                <a href="javascript:void(0)" className="active">
                  Time
                </a>
              </div>
            </div>
          </h2>
          <h2 className="high-mobile">
            &nbsp;&nbsp; {eventName}
            <ul className="live_virtual">
              <li>
                <input
                  type="checkbox"
                  defaultValue="Order one"
                  id="checkboxOne1-inplay"
                  className="ng-untouched ng-pristine ng-valid"
                />
                <label htmlFor="checkboxOne1-inplay">LIVE</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  defaultValue="Order Two"
                  id="checkboxTwo1-inplay"
                  className="ng-untouched ng-pristine ng-valid"
                />
                <label htmlFor="checkboxTwo1-inplay">VIRTUAL</label>
              </li>
            </ul>
            <div className="dropdown viewby-filter">
              <button
                type="button"
                id="ViewBy"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="mdi mdi-filter" />
                View by
              </button>
              <div className="dropdown-menu">
                <a href="javascript:void(0)">Competition</a>
                <a href="javascript:void(0)" className="active">
                  Time
                </a>
              </div>
            </div>
          </h2>
          {group != 7 && group != 4339 ? (
            <div>
              <div className="row oneX2">
                <div className="col-md-7" />
                <div className="col-md-4 px-lg-0">
                  <div className="oddsEventlist">
                    <div className="btn-group">
                      <span>1</span>
                    </div>
                    <div className="btn-group">
                      <span>X</span>
                    </div>
                    <div className="btn-group">
                      <span>2</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-1" />
              </div>
              <div>
                {groupedData?.map(([key], index) => {
                  return (
                    <div onClick={() => navigateGameList(key)} key={index}>
                      <div>
                        <div className="row align-items-center row-my">
                          <div className="col-md-6 col-10 px-1">
                            <p className="matchname">
                              <a>
                                <img
                                  style={{ marginRight: "2px" }}
                                  src={
                                    data?.[key]?.inPlay === 1
                                      ? images.inPlay
                                      : images.noPlay
                                  }
                                  className="img-fluid"
                                />
                                <span> {data?.[key]?.eventName}</span>
                              </a>
                              <b>
                                {data?.[key]?.inPlay === 1 && (
                                  <span className="in_play img-fluid">
                                    In-Play
                                  </span>
                                )}
                                {data?.[key]?.isTv === 1 && (
                                  <span className="in_play img-fluid">
                                    <img src={images.tv} />
                                  </span>
                                )}

                                {data?.[key]?.isBookmaker === 1 ? (
                                  <span className="game-bm">
                                    <img
                                      src={images.bookmaker}
                                      className="img-fluid"
                                    />
                                  </span>
                                ) : null}

                                <span className="timer-on">
                                  {data?.[key]?.date}
                                </span>
                              </b>
                            </p>
                          </div>
                          <div className="col-md-1 text-lg-center tex-right col-matched" />
                          <div className="col-md-4 col px-0">
                            <div className="oddsEventlist">
                              <div className="btn-group">
                                <button className="back">
                                  {data[key]?.[0]?.ex?.availableToBack?.[0]
                                    ?.price ?? "-"}
                                </button>
                                <button className="lay">
                                  {data[key]?.[0]?.ex?.availableToLay?.[0]
                                    ?.price ?? "-"}
                                </button>
                              </div>
                              <div className="btn-group">
                                <button className="back">
                                  {data[key]?.[2]?.ex?.availableToBack?.[0]
                                    ?.price ?? "-"}
                                </button>
                                <button className="lay">
                                  {data[key]?.[2]?.ex?.availableToLay?.[0]
                                    ?.price ?? "-"}
                                </button>
                              </div>
                              <div className="btn-group">
                                <button className="back">
                                  {data[key]?.[1]?.ex?.availableToBack?.[0]
                                    ?.price ?? "-"}
                                </button>
                                <button className="lay">
                                  {data[key]?.[1]?.ex?.availableToLay?.[0]
                                    ?.price ?? "-"}
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-1 col-2 text-end text-lg-center">
                            <a className="add-pins">
                              <img
                                src={images.pinWhite}
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {!data ||
                  (Object.values(data).length === 0 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span>No events available right now</span>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <HorseGreyhound data={data} title="Horse Racing" eventTypeId={7} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
