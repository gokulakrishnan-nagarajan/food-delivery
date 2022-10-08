import React from "react";

import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import CategoryList from "../CategoryList/CategoryList";

function Categories() {
  return (
    <>
      <CategoryList />
      <CategoryDropdown />
    </>
  );
}

export default Categories;
