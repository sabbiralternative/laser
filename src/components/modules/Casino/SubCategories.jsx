const SubCategories = ({
  categories,
  setSelectedSubCategory,
  selectedSubCategory,
}) => {
  return (
    <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
      <li
        style={{
          background: selectedSubCategory === "All" ? "var(--theme2-bg)" : "",
        }}
        onClick={() => setSelectedSubCategory("All")}
        className={`${
          selectedSubCategory === "All" ? "active " : ""
        } nav-item ng-star-inserted`}
      >
        <a
          href="javascript:void(0);"
          role="tab"
          className={`nav-link ${
            selectedSubCategory === "All" ? "active " : ""
          } `}
          aria-controls
          aria-selected="true"
          id
        >
          <span />
          <span
            style={{ height: "100%" }}
            id="childTab-0-0"
            className="ng-star-inserted"
          >
            <img
              className="img-fluid"
              src="https://tezcdn.io/casino/int-casino-icon/all.webp"
            />
            All{" "}
          </span>
        </a>
      </li>
      {categories?.map((category) => {
        return (
          <li
            style={{
              background:
                selectedSubCategory === category ? "var(--theme2-bg)" : "",
            }}
            onClick={() => setSelectedSubCategory(category)}
            key={category}
            className={`nav-item ng-star-inserted  ${
              selectedSubCategory === category ? "active" : ""
            }`}
          >
            <a
              style={{ height: "100%" }}
              className={`nav-link ${
                selectedSubCategory === category ? "active" : ""
              }`}
            >
              <span
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="childTab-0-0"
                className="ng-star-inserted"
              >
                <img
                  style={{ height: "40%" }}
                  className="img-fluid"
                  src={`/src/assets/icon/${category
                    ?.split(" ")
                    .join("")
                    .toLowerCase()}.svg`}
                />
                {category}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SubCategories;
