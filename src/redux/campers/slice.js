import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, (state, { payload }) => {
      state.items = payload;
    });
  },
});

export const campersReducer = slice.reducer;
