import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "../../store/slices/food.slice";
import {
  getSelectedCategory,
  setCategory,
} from "../../store/slices/filters.slice";

import styles from "./CategoryDropdown.module.css";

function CategoryDropdown() {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);
  const selectedCategory = useSelector(getSelectedCategory);

  const categoryOptions = useMemo(() => {
    return categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ));
  }, [categories]);

  const shouldBeHidden = useMemo(() => {
    return categories.length <= 5;
  }, [categories.length]);

  const onCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <select
      className={`${styles.dropdown} ${shouldBeHidden ? styles.hidden : ""}`}
      value={selectedCategory}
      onChange={onCategoryChange}
    >
      <option value="all">All</option>
      {categoryOptions}
    </select>
  );
}

export default CategoryDropdown;
