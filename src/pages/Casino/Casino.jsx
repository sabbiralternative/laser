import Banner from "../../components/modules/Sports/Banner";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useMac88AllQuery } from "../../redux/features/casino/casino.api";
import Categories from "../../components/modules/Casino/Categories";
import SubCategories from "../../components/modules/Casino/SubCategories";
import DesktopBetRightSidebar from "../../components/shared/DesktopBetRightSidebar/DesktopBetRightSidebar";
import CasinoThumbnail from "../../components/modules/Casino/CasinoThumbnail";

const Casino = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("MAC88");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [filterCategoryData, setFilterCategoryData] = useState([]);
  const { data } = useMac88AllQuery();

  /* tables key data */
  const tables = data?.data?.tables?.[100000];

  useEffect(() => {
    const getCategory = () => {
      if (tables) {
        /* Get only four key */
        const {
          MAC88,
          ["Mac88 Virtuals"]: mac88Virtuals,
          ["Color Prediction"]: colorPrediction,
          ["Fun Games"]: funGames,
        } = tables;
        /* Make a object of four key */
        const filteredData = {
          MAC88,
          mac88Virtuals,
          colorPrediction,
          funGames,
        };
        /* Get data in a single array from four object */
        const tableKeyData =
          filteredData &&
          Object.values(filteredData)
            .flatMap((obj) => Object.values(obj))
            .flat();

        /*get category for first tab */
        const categories = Array.from(
          new Set(tableKeyData.map((item) => item.product))
        );
        setCategories(categories);
        /* get category for first tab */

        /* get sub category for first tabt */
        const filterCasinoByProduct = tableKeyData?.filter(
          (item) => item?.product === selectedCategory
        );
        const subCategory = Array.from(
          new Set(filterCasinoByProduct.map((item) => item.category))
        );

        setSubCategories(subCategory);
        /*get sub category for first tab*/

        /* Get actual data by  category */
        if (selectedSubCategory !== "All") {
          const filterCasinoByCategory = filterCasinoByProduct?.filter(
            (item) => item?.category === selectedSubCategory
          );
          setFilterCategoryData(filterCasinoByCategory);
        } else {
          setFilterCategoryData(filterCasinoByProduct);
        }
      }
    };
    getCategory();
  }, [tables, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    setSelectedSubCategory("All");
  }, [selectedCategory]);

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
                      <div>
                        <div className="marquee-box">
                          <h4>
                            <i className="mdi mdi-microphone-outline" />
                            News
                          </h4>
                          <marquee>
                            🏆𝐖𝐎𝐌𝐄𝐍 𝐏𝐑𝐄𝐌𝐈𝐄𝐑 𝐋𝐄𝐀𝐆𝐔𝐄 𝐂𝐔𝐏 𝐖𝐈𝐍𝐍𝐄𝐑🏆 𝐌𝐀𝐑𝐊𝐄𝐓 𝐒𝐓𝐀𝐑𝐓𝐄𝐃
                            𝐈𝐍 𝐎𝐔𝐑 𝐄𝐗𝐂𝐇𝐀𝐍𝐆𝐄🏆 𝐎𝐔𝐑 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐀𝐑𝐊𝐄𝐓 𝐅𝐎𝐑
                            (𝐒𝐑𝐋) 𝐈𝐒 𝐍𝐎𝐖 𝐒𝐓𝐀𝐑𝐓𝐄𝐃 𝐈𝐍 𝐎𝐔𝐑 𝐄𝐗𝐂𝐇𝐀𝐍𝐆𝐄 , 𝐃𝐑𝐄𝐀𝐌 𝐁𝐈𝐆 𝐖𝐈𝐍
                            𝐁𝐈𝐆 💰
                          </marquee>
                        </div>
                      </div>
                      <Banner />
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
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={
                                          setSelectedCategory
                                        }
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
                                                setSelectedSubCategory={
                                                  setSelectedSubCategory
                                                }
                                                selectedSubCategory={
                                                  selectedSubCategory
                                                }
                                                categories={subCategories}
                                              />
                                              <div className="tab-content">
                                                <div
                                                  role="tabpanel"
                                                  aria-labelledby
                                                  className="tab-pane active ng-star-inserted"
                                                >
                                                  <div className="row py-2 mx-0 justify-content-center ng-star-inserted">
                                                    <CasinoThumbnail
                                                      data={filterCategoryData}
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
