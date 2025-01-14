import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperDetail, fetchCampers } from "./operations";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    totalResults: 0,
    camper: null,
    paginate: {
      page: 1,
      limit: 4,
    },
  },
  reducers: {
    incrementPage: (state) => {
      return {
        ...state,
        paginate: {
          page: state.paginate.page + 1,
          limit: state.paginate.limit,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, (state, { payload }) => {
      state.items =
        state.paginate.page === 1
          ? payload.items
          : [...state.items, ...payload.items];
      // const newItems = payload.items.filter(
      //   (item) => !state.items.some((existing) => existing.id === item.id)
      // );
      // state.items.push(...newItems);
      state.totalResults = payload.total;
    });
    builder.addCase(fetchCampers.rejected, (state, { error }) => {
      state.items = [];
    });
    builder.addCase(fetchCamperDetail.fulfilled, (state, { payload }) => {
      state.camper = payload;
    });
  },
});
export const { incrementPage } = slice.actions;
export const campersReducer = slice.reducer;
