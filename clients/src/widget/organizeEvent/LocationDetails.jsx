import React, { useState } from "react";
import { Map } from "../../utils/Map";

const LocationDetails = ({ onlineEvent, location, handleChange }) => {
  const [venue, setVenue] = useState(true);
  const [online, setOnline] = useState(false);
  const [announce, setAnnounce] = useState(false);

  return (
    <div className="wrapper relative ">
      <h1 className="text-3xl text-[#39364f] font-bold font-roboto py-2 ">
        Location
      </h1>
      <p className=" text-[#39364f] text-sm font-roboto font-medium py-4">
        Help people in the area discover your event and let attendees know where
        to show up.
      </p>

      <div className=" flex gap-2  w-full ">
        <span
          onClick={() => {
            setVenue(true);
            setOnline(false);
            setAnnounce(false);
          }}
          className={`border  cursor-pointer  ${
            venue
              ? "bg-indigo-50 font-roboto  border-indigo-500  text-indigo-500"
              : "bg-white text-[#39364f] font-roboto"
          } p-3 px-8 rounded`}
        >
          Venue
        </span>
        <span
          onClick={() => {
            setVenue(false);
            setOnline(true);
            setAnnounce(false);
          }}
          className={`border  cursor-pointer  ${
            online
              ? "bg-indigo-50 font-roboto  border-indigo-500  text-indigo-500"
              : "bg-white text-[#39364f] font-roboto"
          } p-3 px-8 rounded`}
        >
          Online event
        </span>
        <span
          onClick={() => {
            setVenue(false);
            setOnline(false);
            setAnnounce(true);
          }}
          className={`border cursor-pointer p-3 px-8 rounded ${
            announce
              ? "bg-indigo-50 font-roboto  border-indigo-500  text-indigo-500"
              : "bg-white text-[#39364f] font-roboto"
          }`}
        >
          To be announced
        </span>
      </div>

      {venue ? (
        <div className="">
          <h3 className="text-[#39364f] text-sm font-roboto font-medium py-4">
            Venue Location
          </h3>
          <div className=" rounded flex items-center w-full max-w-xl mr-4 p-3 shadow-sm border">
            <button className="outline-none focus:outline-none">
              <svg
                className="w-5 text-gray-600 h-5 "
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input
              type="text"
              value={location}
              onChange={handleChange}
              name="location"
              placeholder="Search for a venue or address"
              className="w-full pl-4 text-sm cursor-pointer text-left outline-none focus:outline-none bg-transparent"
            />
          </div>
          {location && (
            <div className="my-6">
              <Map className="lg:w-[600px] lg:h-[400px] " />
            </div>
          )}
        </div>
      ) : online ? (
        <div className="">
          <h3 className="text-[#39364f] text-sm font-roboto font-medium py-4">
            Online events have unique event pages where you can add links to
            livestreams and more
          </h3>
        </div>
      ) : announce ? (
        <span className="">
          <h3 className="text-[#39364f] text-sm font-roboto font-medium py-4">
            To be Announce
          </h3>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default LocationDetails;
