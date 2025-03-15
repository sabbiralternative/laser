const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
      {categories?.map((category) => {
        return (
          <li
            onClick={() => setSelectedCategory(category)}
            key={category}
            className={`${
              selectedCategory === category ? "active" : ""
            } nav-item ng-star-inserted`}
          >
            <a
              href="javascript:void(0);"
              role="tab"
              className={`nav-link ${
                selectedCategory === category ? "active" : ""
              }`}
              aria-controls
              aria-selected="true"
              id
            >
              <span />
              <span id="parentTab-0" className="ng-star-inserted">
                {category}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
