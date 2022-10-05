import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import axiosInstance from "../../config/axios";
import { GET_CATEGORIES, GET_FOOD_ITEMS } from "../../config/endpoints";

export const fetchCategories = createAsyncThunk(
  "food/fetchCategories",
  async () => {
    const response = await axiosInstance(GET_CATEGORIES);

    return response.data;
  }
);

export const fetchFoodItems = createAsyncThunk(
  "food/fetchFoodItems",
  async () => {
    const response = await axiosInstance(GET_FOOD_ITEMS);

    return response.data;
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState: {
    categoriesFetchStatus: "idle",
    itemsFetchStatus: "idle",
    categories: [],
    items: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesFetchStatus = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesFetchStatus = "success";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categoriesFetchStatus = "failed";
        toast.error("Failed to load categories");
      })
      .addCase(fetchFoodItems.pending, (state) => {
        state.itemsFetchStatus = "loading";
      })
      .addCase(fetchFoodItems.fulfilled, (state, action) => {
        state.itemsFetchStatus = "success";
        state.items = action.payload;
      })
      .addCase(fetchFoodItems.rejected, (state) => {
        state.itemsFetchStatus = "failed";
        toast.error("Failed to load food items");
      });
  },
});

export const { setCategories, setItems } = foodSlice.actions;

export const getCategories = (state) => state.food.categories;
export const getCategoriesFetchStatus = (state) =>
  state.food.categoriesFetchStatus;
export const getFoodItems = (state) => state.food.items;
export const getFoodItemsFetchStatus = (state) => state.food.itemsFetchStatus;

export default foodSlice.reducer;
