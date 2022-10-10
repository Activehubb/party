import axios from "axios";
import { AxiosInstance } from "../../utils/AxiosInstance";
import {
  eventError,
  eventPending,
  getEventSuccess,
  updateEventSuccess,
  createEventSuccess,
  clearErrorState,
} from "../reducers/eventReducer";

export const getEvents = async (dispatch) => {
  dispatch(eventPending());

  try {
    const res = await axios.get("/api/v1/event");

    dispatch(getEventSuccess(res.data));
  } catch (error) {
    dispatch(eventError(error.response.data.message));
  }
};

export const createEvents = async (event, dispatch) => {
  dispatch(eventPending());

  try {
    const res = await axios.post("/api/v1/event/create", event);

    dispatch(createEventSuccess(res.data));
  } catch (error) {
    dispatch(eventError(error.response.data.message));
  }
};

export const updateEvent = async (event, id, dispatch) => {
  dispatch(eventPending());

  try {
    const res = await axios.put(`/api/v1/create/${id}`, event);

    dispatch(updateEventSuccess(res.data));
  } catch (error) {
    dispatch(eventError(error.response.data.message));
  }
};

export const clearEventError = (dispatch) => {
  dispatch(clearErrorState());
};
