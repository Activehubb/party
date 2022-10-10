import { createSlice } from "@reduxjs/toolkit";

export const eventReducer = createSlice({
  name: "events",
  initialState: {
    allEvents: null,
    createEvent: null,
    updateEvent: null,
    eventsCounts: null,
    pending: false,
    error: false,
    clearError: false,
  },
  reducers: {
    eventPending: (state) => {
      state.pending = true;
    },
    getEventSuccess: (state, action) => {
      state.pending = false;
      state.allEvents = action.payload;
      state.eventsCounts = action.payload.eventCounts;
    },
    createEventSuccess: (state, action) => {
      state.pending = false;
      state.createEvent = action.payload;
      state.error = false;
    },
    updateEventSuccess: (state, action) => {
      state.pending = false;
      state.updateEvent = action.payload;
      state.error = false;
    },
    eventError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    clearErrorState: (state) => {
      state.clearError = {
        ...state,
        error: false,
      };
    },
  },
});

export const {
  eventPending,
  clearErrorState,
  eventError,
  getEventSuccess,
  updateEventSuccess,
  createEventSuccess,
} = eventReducer.actions;
export default eventReducer.reducer;
