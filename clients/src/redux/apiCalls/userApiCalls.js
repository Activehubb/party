import axios from "axios";
import { AxiosInstance } from "../../utils/AxiosInstance";

import {
  clearErrorState,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  regUserFailure,
  regUserRequest,
  regUserSuccess,
  loadUserFailure,
  loadUserRequest,
  loadUserSuccess,
} from "../reducers/userReducer";

export const loadUser = async (dispatch) => {
  dispatch(loadUserRequest());
  try {
    const res = await AxiosInstance.get("/api/v1/me");

    dispatch(loadUserSuccess(res.data));
  } catch (error) {
    dispatch(loadUserFailure(error.response.data.message));
  }
};

export const registerUser = async (user, dispatch) => {
  dispatch(regUserRequest());
  try {
    const res = await AxiosInstance.post("/api/v1/create", user);

    dispatch(regUserSuccess(res.data));
  } catch (error) {
    dispatch(regUserFailure(error.response.data.message));
  }
};
export const loginUser = async (user, dispatch) => {
  dispatch(loginUserRequest());
  try {
    const res = await AxiosInstance.post("/api/v1/login", user);

    dispatch(loginUserSuccess(res.data));
  } catch (error) {
    dispatch(loginUserFailure(error.response.data.message));
  }
};
export const forgotPassword = async (user, dispatch) => {
  dispatch(loginUserRequest());
  try {
    const res = await AxiosInstance.post("/api/v1//password/forgot", user);

    dispatch(loginUserSuccess(res.data));
  } catch (error) {
    dispatch(loginUserFailure(error.response.data.message));
  }
};
export const logout = async (user, dispatch) => {
  dispatch(loginUserRequest());
  try {
    const res = await AxiosInstance.post("/api/v1/login", user);

    dispatch(loginUserSuccess(res.data));
  } catch (error) {
    dispatch(loginUserFailure(error.response.data.message));
  }
};

export const clearUserError = async (dispatch) => {
  dispatch(clearErrorState());
};
