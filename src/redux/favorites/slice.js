import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavoriteItem: (state, { payload }) => {
      return {
        ...state,
        items: [...state.items, ...payload],
      };
    },
  },
});

export const { addFavoriteItem } = slice.actions;
export const favoritesReducer = slice.reducer;
