import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    const url = "/campers/?page=1&limit=4";
    try {
      const { data } = await api.get(url);
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
