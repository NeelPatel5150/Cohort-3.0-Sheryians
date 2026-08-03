import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
      console.log("thunk action triggered...");
      
        let res = await api.post("/auth/login", credentials);
        localStorage.setItem("accessToken", res.data.accessToken); // Store JWT in localStorage
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      } 
});

export const hydrateUserAction = createAsyncThunk("auth/hydrate", async (_, thunkAPI) => {
  try {
    let accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return thunkAPI.rejectWithValue("No access token found");
    }
    let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }
  catch (error) {
    toast.error("Failed to hydrate user");
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
