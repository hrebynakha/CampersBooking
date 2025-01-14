import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    search: {},
    paginator: {
      page: 1,
      limit: 4,
    },
  },
  reducers: {
    changeSearchFilter: (state, { payload }) => {
      return {
        ...state,
        search: payload,
      };
    },
    incrementPage: (state, { payload }) => {
      return {
        ...state,
        paginator: {
          page: state.paginator.page + 1,
          limit: state.paginator.limit,
        },
      };
    },
  },
});

export const { changeSearchFilter, incrementPage } = slice.actions;
export const filtersReducer = slice.reducer;
