import { configureStore } from "@reduxjs/toolkit";

import foodReducer from "./slices/food.slice";
import filtersReducer from "./slices/filters.slice";

export const store = configureStore({
  reducer: {
    food: foodReducer,
    filters: filtersReducer,
  },
});
