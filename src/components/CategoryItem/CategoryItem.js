import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSelectedCategory,
  setCategory,
} from "../../store/slices/filters.slice";

import styles from "./CategoryItem.module.css";

function CategoryItem(props) {
  const { category } = props;

  const dispatch = useDispatch();

  const selectedCategory = useSelector(getSelectedCategory);

  const onCategoryClick = useCallback(
    (event) => {
      const selectedCategory = event.target.getAttribute("data-id");

      dispatch(setCategory(selectedCategory));
    },
    [dispatch]
  );

  return (
    <div
      className={`${styles.category} ${
        category.id === selectedCategory ? styles.selected : ""
      }`}
      title={category.name}
      data-id={category.id}
      onClick={onCategoryClick}
    >
      {category.name}
    </div>
  );
}

export default CategoryItem;
