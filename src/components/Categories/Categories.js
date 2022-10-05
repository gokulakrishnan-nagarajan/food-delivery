import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { getCategories } from "../../store/slices/food.slice";
import CategoryItem from "../CategoryItem/CategoryItem";

import styles from "./Categories.module.css";

function Categories() {
  const categories = useSelector(getCategories);

  const categoriesList = useMemo(() => {
    if (!Array.isArray(categories)) {
      return null;
    }

    return categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ));
  }, [categories]);

  return (
    <div className={`${styles.container} flex-align-center`}>
      <CategoryItem category={{ id: "all", name: "All" }} />
      {categoriesList}
    </div>
  );
}

export default Categories;
