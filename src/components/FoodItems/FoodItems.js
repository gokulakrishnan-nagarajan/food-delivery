import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { getFoodItems } from "../../store/slices/food.slice";
import {
  getSearchText,
  getSelectedCategory,
} from "../../store/slices/filters.slice";
import FoodTile from "../FoodTile/FoodTile";
import Pagination from "../Pagination/Pagination";
import { NUMBER_OF_ITEMS_PER_PAGE } from "../../helpers/constants";

function FoodItems() {
  const foodItems = useSelector(getFoodItems);
  const searchText = useSelector(getSearchText);
  const selectedCategory = useSelector(getSelectedCategory);

  const filteredFoodItems = useMemo(() => {
    const trimmedSearchText = searchText.trim().toLowerCase();

    if (selectedCategory === "all" && trimmedSearchText === "") {
      return foodItems;
    }

    return foodItems.filter(
      (foodItem) =>
        (selectedCategory === "all" ||
          selectedCategory === foodItem.categoryId) &&
        (trimmedSearchText === "" ||
          foodItem.name.toLowerCase().includes(trimmedSearchText))
    );
  }, [foodItems, selectedCategory, searchText]);

  const foodItemsList = useMemo(() => {
    return filteredFoodItems.map((foodItem) => (
      <FoodTile key={foodItem.id} details={foodItem} />
    ));
  }, [filteredFoodItems]);

  return (
    <Pagination items={foodItemsList} pageSize={NUMBER_OF_ITEMS_PER_PAGE} />
  );
}

export default FoodItems;
