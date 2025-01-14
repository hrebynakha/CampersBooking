import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (params, thunkAPI) => {
    const url = "/campers/";
    try {
      const { data } = await api.get(url, {
        params: params,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCamperDetail = createAsyncThunk(
  "campers/fetchCamper",
  async (id, thunkAPI) => {
    const url = `/campers/${id}`;
    try {
      const { data } = await api.get(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
