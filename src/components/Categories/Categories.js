import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSelectedCategory,
  setCategory,
} from "../../store/slices/filters.slice";
import { getCategories } from "../../store/slices/food.slice";

import styles from "./Categories.module.css";

function Categories() {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);
  const selectedCategory = useSelector(getSelectedCategory);

  const onCategoryClick = useCallback(
    (event) => {
      const selectedCategory = event.target.getAttribute("data-id");

      dispatch(setCategory(selectedCategory));
    },
    [dispatch]
  );

  const categoriesList = useMemo(() => {
    return (
      Array.isArray(categories) &&
      categories.map((category) => (
        <div
          key={category.id}
          className={`${styles.category} ${
            category.id === selectedCategory ? styles.selected : ""
          }`}
          data-id={category.id}
          onClick={onCategoryClick}
        >
          {category.name}
        </div>
      ))
    );
  }, [categories, selectedCategory, onCategoryClick]);

  return (
    <div className={`${styles.container} flex-align-center`}>
      <div
        className={`${styles.category} ${
          selectedCategory === "all" ? styles.selected : ""
        }`}
        data-id="all"
        onClick={onCategoryClick}
      >
        All
      </div>
      {categoriesList}
    </div>
  );
}

export default Categories;
