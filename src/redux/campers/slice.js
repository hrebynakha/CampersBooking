import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperDetail, fetchCampers } from "./operations";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    camper: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, (state, { payload }) => {
      state.items = payload.items;
    });
    builder.addCase(fetchCamperDetail.fulfilled, (state, { payload }) => {
      state.camper = payload;
    });
  },
});

export const campersReducer = slice.reducer;
