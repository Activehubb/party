import React from "react";
import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import EventDetails from "./components/eventDetail/EventDetails";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SingleEvent from "./components/singleEvent/SingleEvent";
import Ticket from "./components/ticket/Ticket";
import CreateEvent from "./page/CreateEvent";
import Login from "./page/Login";
import Register from "./page/Register";
import { loadUser } from "./redux/apiCalls/userApiCalls";
import { useDispatch } from "react-redux";
import ForgotPassword from "./page/ForgotPassword";

function App() {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  useEffect(() => {
    loadUser(dispatch);
  }, []);

  return (
    <Fragment>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route index element={<Hero />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="event/create" element={<CreateEvent />} />
          <Route path="event/details/:id" element={<EventDetails />} />
          <Route path="event/ticket" element={<Ticket />} />
          <Route path="event/en/:id" element={<SingleEvent />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
