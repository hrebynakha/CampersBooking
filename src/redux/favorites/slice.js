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
    removeFavoriteItem: (state, { payload }) => {
      return {
        ...state,
        items: state.items.filter((camper) => camper !== payload),
      };
    },
  },
});

export const { addFavoriteItem, removeFavoriteItem } = slice.actions;
export const favoritesReducer = slice.reducer;
