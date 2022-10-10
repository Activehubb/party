import { configureStore } from "@reduxjs/toolkit";
import  eventReducer  from "./reducers/eventReducer";
import  userReducer  from "./reducers/userReducer";

export default configureStore({
  reducer: { user: userReducer, events: eventReducer },
});
