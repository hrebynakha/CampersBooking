import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    setActiveLoading: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { error, payload }) => {
          state.error = payload ? payload.response.data : error;
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { setActiveLoading } = slice.actions;
export const rootReducer = slice.reducer;
