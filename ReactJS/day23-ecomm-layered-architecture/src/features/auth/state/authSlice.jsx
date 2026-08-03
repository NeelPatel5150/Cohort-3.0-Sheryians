import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authAction";
import { toast } from "react-toastify";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle async actions for login and hydration
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        toast.success("user logged in");
        state.isLoading = false;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        toast.error("login failed");
      })
      
      // Handle async actions for hydration
      .addCase(hydrateUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hydrateUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(hydrateUserAction.rejected, (state) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        toast.error("Failed to hydrate user");
      });
  }
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
