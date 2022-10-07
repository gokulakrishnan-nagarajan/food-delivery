import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { getFoodItems } from "../../store/slices/food.slice";
import {
  getSearchText,
  getSelectedCategory,
} from "../../store/slices/filters.slice";

import FoodTile from "../FoodTile/FoodTile";
import Pagination from "../Pagination/Pagination";

function FoodItems() {
  const foodItems = useSelector(getFoodItems);
  const searchText = useSelector(getSearchText);
  const selectedCategory = useSelector(getSelectedCategory);

  const filteredFoodItems = useMemo(() => {
    const trimmedSearchText = searchText.trim().toLowerCase();

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

  return <Pagination items={foodItemsList} pageSize={24} />;
}

export default FoodItems;
