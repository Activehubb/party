import React, { useState } from "react";
import EventDetail from "../../widget/eventDetail/EventDetail";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateEvent } from "../../redux/apiCalls/eventApiCalls";

const EventDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const [secEventAvatar, setSecEventAvatar] = useState("");
  const [secEventAvatarPreview, setSecEventAvatarPreview] = useState("");
  const [primaryEventAvatar, setPrimaryEventAvatar] = useState("");
  const [primaryEventAvatarPreview, setPrimaryEventAvatarPreview] = useState("");
  const [eventDetails, setEventDetails] = useState({
    summary: "",
    preVideoLink: "",
  });

  const { summary, preVideoLink } = eventDetails;

  const handleChange = (e) => {
    if (e.target.name === "primaryEventAvatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPrimaryEventAvatar(reader.result);
          setPrimaryEventAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else if (e.target.name === "secEventAvatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setSecEventAvatar(reader.result);
          setSecEventAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else
      setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set("summary", summary);
    formData.set("preVideoLink", preVideoLink);
    formData.set("primaryEventAvatar", primaryEventAvatar);
    formData.set("secEventAvatar", secEventAvatar);

    updateEvent(formData, path, dispatch);
  };

  return (
    <div>
      <Header />
      <div className="container m-auto px-4 lg:px-[20rem] mb-48 lg:mb-32">
        <form onSubmit={handleSubmit}>
          <EventDetail
            handleChange={handleChange}
            secEventAvatarPreview={secEventAvatarPreview}
            secEventAvatar={secEventAvatar}
            primaryEventAvatar={primaryEventAvatar}
            primaryEventAvatarPreview={primaryEventAvatarPreview}
            preVideoLink={preVideoLink}
            summary={summary}
          />
          <hr className="my-8" />
        </form>
      </div>
      <div className="mt-24 fixed bottom-0 bg-white w-full ">
        <div className="p-2 lg:mb-12 lg:flex lg:gap-4 relative border-t">
          <button className="border lg:w-60 lg:absolute lg:right-10 border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium text-sm bg-orange-600 text-white">
            Save & Continue
          </button>
          <button className="border lg:absolute lg:right-80 lg:w-60 border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium text-sm">
            Discard
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EventDetails;
