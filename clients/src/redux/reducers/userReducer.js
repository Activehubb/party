import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    user: null,
    pending: false,
    error: false,
    clearError: false,
  },

  reducers: {
    loadUserRequest: (state) => {
      state.pending = true;
    },
    loadUserSuccess: (state, action) => {
      state.pending = false;
      state.user = action.payload;
    },
    loadUserFailure: (state, action) => {
      state.pending = null;
      state.user = null;
      state.error = action.payload;
    },
    regUserRequest: (state) => {
      state.pending = true;
    },
    regUserSuccess: (state, action) => {
      state.pending = false;
      state.user = action.payload;
    },
    regUserFailure: (state, action) => {
      state.pending = null;
      state.error = action.payload;
    },
    loginUserRequest: (state) => {
      state.pending = true;
    },
    loginUserSuccess: (state, action) => {
      state.pending = false;
      state.user = action.payload;
    },
    loginUserFailure: (state, action) => {
      state.pending = null;
      state.error = action.payload;
    },
    clearErrorState: (state) => {
      state.clearError = {
        ...state,
        error: null,
      };
    },
  },
});

export const {
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure,
  regUserRequest,
  regUserSuccess,
  regUserFailure,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  clearErrorState,
} = userReducer.actions;
export default userReducer.reducer;
