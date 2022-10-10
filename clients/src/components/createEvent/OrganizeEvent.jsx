import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearEventError,
  createEvents,
} from "../../redux/apiCalls/eventApiCalls";
import BasicDetails from "../../widget/organizeEvent/BasicDetails";
import LocationDetails from "../../widget/organizeEvent/LocationDetails";
import Time from "../../widget/organizeEvent/Time";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../../utils/MetaData";

const OrganizeEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { pending, error, createEvent } = useSelector((state) => state.events);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [hideEndTime, setHideEndTime] = useState(false);
  const [eventInfo, setEventInfo] = useState({
    tags: "",
    title: "",
    organizer: "",
    eventType: "",
    eventCategory: "",
    onlineEvent: false,
    startTime: "00:00",
    endTime: "01:00",
    location: "",
  });

  const {
    title,
    tags,
    organizer,
    eventType,
    eventCategory,
    onlineEvent,
    location,
    startTime,
    endTime,
  } = eventInfo;

  useEffect(() => {
    if (error) {
      alert.error(error);
      clearEventError(dispatch);
    }

  }, [dispatch, error, alert]);

  if (createEvent) {
    navigate(`/event/details/${createEvent.newEvent._id}`);
  }

  // console.log(createEvent.newEvent._id);
  const handleHideTime = () => {
    setHideEndTime(!hideEndTime);
  };

  const handleChange = (e) => {
    setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
  };

  // console.log(eventInfo, startDate, endDate, hideEndTime);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set("title", title);
    formData.set("tags", tags);
    formData.set("organizer", organizer);
    formData.set("eventType", eventType);
    formData.set("eventCategory", eventCategory);
    formData.set("onlineEvent", onlineEvent);
    formData.set("location", location);
    formData.set("startDate", startDate);
    formData.set("endDate", endDate);
    formData.set("startTime", startTime);
    formData.set("endTime", endTime);
    formData.set("hideEndTime", hideEndTime);

    createEvents(formData, dispatch);
  };

  const handleCancel = (e) => {
    setEventInfo("");
    setHideEndTime(false);
  };
  return (
    <div>
      <MetaData title="Create new party event" />
      <form onSubmit={handleSubmit}>
        <div className="container m-auto px-4 lg:px-[20rem]">
          <div>
            <BasicDetails
              title={title}
              tags={tags}
              organizer={organizer}
              eventType={eventType}
              eventCategory={eventCategory}
              handleChange={handleChange}
            />
            <hr className="my-8 " />
            <LocationDetails
              onlineEvent={onlineEvent}
              location={location}
              handleChange={handleChange}
            />
            <hr className="my-8" />
            <Time
              startDate={startDate}
              endDate={endDate}
              startTime={startTime}
              endTime={endTime}
              hideEndTime={hideEndTime}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              handleChange={handleChange}
              handleHideTime={handleHideTime}
            />
          </div>
        </div>
        <div className="p-2 mt-8 mb-16 lg:flex lg:gap-4 relative border-t">
          {!pending ? (
            <>
              <button
                type="submit"
                className="border lg:w-60 lg:absolute lg:right-10 border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium text-sm bg-orange-600 text-white"
              >
                Save & Continue
              </button>
            </>
          ) : (
            <div className="my-10">
              <button
                disabled
                type="button"
                className="text-white  lg:w-60 lg:absolute lg:right-10 bg-orange-600 shadow-sm w-full p-4 hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm font-roboto px-5 py-2.5 text-center mr-2 dark:bg-orange-600  dark:hover:bg-orange-700  dark:focus:ring-orange-800 flex justify-center items-center cursor-not-allowed"
              >
                <svg
                  role="status"
                  className="inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </button>
            </div>
          )}

          <button
            onChange={handleCancel}
            className="border lg:absolute lg:right-80 lg:w-60 border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium text-sm"
          >
            Discard
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default OrganizeEvent;
