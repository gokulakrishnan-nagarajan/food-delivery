import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCategories,
  fetchFoodItems,
  getCategoriesFetchStatus,
  getFoodItemsFetchStatus,
} from "./store/slices/food.slice";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";
import LandingPage from "./components/LandingPage/LandingPage";

import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  const categoriesFetchStatus = useSelector(getCategoriesFetchStatus);
  const foodItemsFetchStatus = useSelector(getFoodItemsFetchStatus);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFoodItems());
  }, [dispatch]);

  const content = useMemo(() => {
    if (
      categoriesFetchStatus === "loading" ||
      foodItemsFetchStatus === "loading"
    ) {
      return <LoadingOverlay />;
    }

    return <LandingPage />;
  }, [categoriesFetchStatus, foodItemsFetchStatus]);

  return (
    <>
      <div className={`${styles.container} flex-column`}>
        <header className={styles.header}>Food Delivery</header>
        {content}
      </div>
    </>
  );
}

export default App;
