import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useEffect, useMemo, useState } from "react";
import Categories from "../../components/modules/Casino/Categories";
import SubCategories from "../../components/modules/Casino/SubCategories";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";
import CasinoThumbnail from "../../components/modules/Casino/CasinoThumbnail";
import { useIndexQuery } from "../../hooks";
import { useLocation } from "react-router-dom";

const Casino = () => {
  const { data } = useIndexQuery({
    type: "99_all_casino",
  });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const product = params.get("product");
  const category = params.get("category");

  const [search, setSearch] = useState("");

  const allTables = data?.data?.allTables;

  const allGames = useMemo(() => {
    if (!allTables) return [];
    return Object.values(allTables).flatMap((provider) =>
      Object.values(provider).flat(),
    );
  }, [allTables]);

  const categories =
    allGames && Array.from(new Set(allGames?.map((game) => game?.product)));

  const subCategories = useMemo(() => {
    if (allGames && categories && product === "All") {
      return Array.from(new Set(allGames?.map((game) => game?.category)));
    }
    if (allGames && categories && product !== "All") {
      const allCategory = allGames?.filter((game) => game?.product === product);
      return Array.from(new Set(allCategory?.map((game) => game?.category)));
    }
  }, [categories, allGames, product]);

  const filteredData = useMemo(() => {
    if (allGames && categories && subCategories) {
      if (search) {
        return allGames?.filter((game) => game?.category?.includes(search));
      }
      if (!search) {
        if (product === "All" && category === "All") {
          return allGames;
        }
        if (product === "All" && category !== "All") {
          return allGames?.filter((game) => game?.category === category);
        }
        if (product !== "All" && category === "All") {
          return allGames?.filter((game) => game?.product === product);
        }
        if (product !== "All" && category !== "All") {
          return allGames?.filter(
            (game) => game?.product === product && game?.category === category,
          );
        }
      }
    }
  }, [allGames, categories, category, subCategories, product, search]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setSearch("");
  }, [location.search]);

  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="ng-star-inserted">
              <div className="row">
                <div className="col-xl-8 px-lg-1">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-12">
                          <div className="eventlistdesign">
                            <h2 className="high-desktop">
                              &nbsp;&nbsp; casino
                            </h2>
                            <h2 className="high-mobile">&nbsp;&nbsp; casino</h2>
                            <div className="ng-star-inserted">
                              <div className="card-body p-0">
                                <div className="tabcasino">
                                  <div className="ng-star-inserted">
                                    <div className="casino_tabs_ul tab-container">
                                      <Categories
                                        categories={categories}
                                        selectedCategory={product}
                                      />
                                      <div className="tab-content">
                                        <tab
                                          role="tabpanel"
                                          aria-labelledby
                                          className="tab-pane active ng-star-inserted"
                                        >
                                          <div className="icasino_ul_tabs">
                                            <div className="tab-container">
                                              <SubCategories
                                                product={product}
                                                selectedSubCategory={category}
                                                subCategories={subCategories}
                                              />
                                              <div className="tab-content">
                                                <div
                                                  role="tabpanel"
                                                  aria-labelledby
                                                  className="tab-pane active ng-star-inserted"
                                                >
                                                  <div className="row py-2 mx-0 justify-content-center ng-star-inserted">
                                                    <CasinoThumbnail
                                                      data={filteredData}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </tab>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DesktopBetRightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
