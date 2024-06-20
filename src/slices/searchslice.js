import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "", // Initial state for search text
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload.trim(); // Set search text in state
    },
  },
});

export const { setSearchText } = searchSlice.actions;

export default searchSlice.reducer;
