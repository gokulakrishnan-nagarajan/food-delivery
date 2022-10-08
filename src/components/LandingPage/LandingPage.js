import React from "react";

import Categories from "../Categories/Categories";
import FoodItems from "../FoodItems/FoodItems";
import Search from "../Search/Search";

import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={`${styles.content} flex-column flex-grow-1`}>
      <div className={`${styles["actions-container"]}`}>
        <Categories />
        <Search />
      </div>
      <div className={`${styles["food-items-list-container"]} flex-grow-1`}>
        <FoodItems />
      </div>
    </div>
  );
}

export default LandingPage;
