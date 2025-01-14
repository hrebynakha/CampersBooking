import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    search: {},
  },
  reducers: {
    changeSearchFilter: (state, { payload }) => {
      return {
        ...state,
        search: payload,
        // paginator: {
        //   page: 1,
        //   limit: state.paginator.limit,
        // },
      };
    },
  },
});

export const { changeSearchFilter } = slice.actions;
export const filtersReducer = slice.reducer;
