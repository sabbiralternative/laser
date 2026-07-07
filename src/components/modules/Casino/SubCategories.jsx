import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SubCategories = ({ subCategories, product, selectedSubCategory }) => {
  const activeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedSubCategory, subCategories, product]);
  return (
    <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
      <li
        style={{
          background: selectedSubCategory === "All" ? "var(--theme2-bg)" : "",
        }}
        ref={selectedSubCategory === "All" ? activeRef : null}
        onClick={() => {
          navigate(`/casino?product=${product}&category=All`);
        }}
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
      {subCategories?.map((category) => {
        return (
          <li
            style={{
              background:
                selectedSubCategory === category ? "var(--theme2-bg)" : "",
            }}
            ref={category === selectedSubCategory ? activeRef : null}
            onClick={() => {
              navigate(`/casino?product=${product}&category=${category}`);
            }}
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
                  src={`/icon/${category?.split(" ").join("").toLowerCase()}.svg`}
                  onError={(e) => {
                    if (e.target.src.endsWith(".svg")) {
                      // Try webp only once after svg fails
                      e.target.src = `/icon/${category
                        ?.split(" ")
                        .join("")
                        .toLowerCase()}.webp`;
                    } else if (e.target.src.endsWith(".webp")) {
                      // Try webp only once after svg fails
                      e.target.src = `/icon/${category
                        ?.split(" ")
                        .join("")
                        .toLowerCase()}.png`;
                    } else {
                      // If webp fails, do nothing (leave broken img)
                      // e.target.onerror = null;
                      e.target.src = `/icon/all.svg`;
                    }
                  }}
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
