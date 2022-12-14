import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { getCategories } from "../../store/slices/food.slice";
import CategoryItem from "../CategoryItem/CategoryItem";
import { MAX_CATEGORY_LIST_LENGTH } from "../../helpers/constants";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const categories = useSelector(getCategories);

  const categoriesList = useMemo(() => {
    return categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ));
  }, [categories]);

  const shouldBeHidden = useMemo(() => {
    return categories.length > MAX_CATEGORY_LIST_LENGTH;
  }, [categories.length]);

  return (
    <div
      className={`${styles.container} ${
        shouldBeHidden ? styles.hidden : ""
      } flex-align-center`}
    >
      <CategoryItem category={{ id: "all", name: "All" }} />
      {categoriesList}
    </div>
  );
}

export default CategoryList;
