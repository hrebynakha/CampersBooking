import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperDetail, fetchCampers } from "./operations";
import { getSearchParamFilter } from "../../utils/helpers/helpers";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    totalResults: 0,
    camper: null,
    filter: {
      ...getSearchParamFilter(),
      page: 1,
      limit: 4,
    },
  },
  reducers: {
    incrementPage: (state) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          page: state.filter.page + 1,
        },
      };
    },
    changeSearchFilter: (state, { payload }) => {
      return {
        ...state,
        filter: {
          ...payload,
          page: 1,
          limit: 4,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, (state, { payload }) => {
      state.items =
        state.filter.page === 1
          ? payload.items
          : [...state.items, ...payload.items];
      state.totalResults = payload.total;
    });
    builder.addCase(fetchCampers.rejected, (state) => {
      state.items = [];
    });
    builder.addCase(fetchCamperDetail.fulfilled, (state, { payload }) => {
      state.camper = payload;
    });
  },
});
export const { incrementPage, changeSearchFilter } = slice.actions;
export const campersReducer = slice.reducer;
