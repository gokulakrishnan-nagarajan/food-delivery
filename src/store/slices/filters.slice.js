import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    category: "all",
    searchText: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setCategory, setSearchText } = filtersSlice.actions;

export const getSelectedCategory = (state) => state.filters.category;
export const getSearchText = (state) => state.filters.searchText;

export default filtersSlice.reducer;
