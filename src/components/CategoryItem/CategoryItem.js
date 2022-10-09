import React from "react";
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

  const onCategoryClick = () => {
    dispatch(setCategory(category.id));
  };

  return (
    <div
      className={`${styles.category} ${
        category.id === selectedCategory ? styles.selected : ""
      }`}
      title={category.name}
      onClick={onCategoryClick}
    >
      {category.name}
    </div>
  );
}

export default CategoryItem;
