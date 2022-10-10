import React from "react";
import { IoImagesOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Video from "../../utils/Video";

const EventDetail = ({
  handleChange,
  preVideoLink,
  secEventAvatarPreview,
  primaryEventAvatarPreview,
  summary,
}) => {
  return (
    <div>
      <div className="wrapper relative mb-4  ">
        <h1 className="text-3xl text-[#39364f] font-bold font-roboto py-2 ">
          Main Event Image
        </h1>
        <p className=" text-[#39364f] text-base font-roboto font-medium py-2">
          This is the first image attendees will see at the top of your listing.
          Learn more
        </p>
        {primaryEventAvatarPreview ? (
          <div className="relative border p-2 focus:border-indigo-500 hover:shadow-lg block h-60 bg-slate-100 rounded border-6 text-xs text-[#39364f] font-roboto">
            <img
              src={primaryEventAvatarPreview}
              alt="preview"
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className=" relative border p-2 focus:border-indigo-500 hover:shadow-lg block h-60 bg-slate-100 rounded border-6 text-xs text-[#39364f] font-roboto">
            <input
              type="file"
              id="primaryEventAvatar"
              onChange={handleChange}
              accept="images/*"
              name="primaryEventAvatar"
              className="w-full hidden border-none outline-none cursor-pointer"
            />
            <div className="absolute w-full h-full top-0 flex justify-center items-center flex-col">
              <svg
                className="text-orange-500 w-16 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className=" text-2xl font-roboto font-semibold text-[#39364f]">
                Drag and drop an image or{" "}
              </p>
              <label
                htmlFor="primaryEventAvatar"
                required
                className=" flex gap-2 items-center cursor-pointer top-40 text-sm py-2 px-20 font-roboto font-medium border-2 rounded border-gray-700 bg-white text-[#39364f]"
              >
                <IoImagesOutline className="h-4 w-4" /> Upload Image
              </label>
            </div>
          </div>
        )}
        <ul className="flex lg:justify-between gap-2 list-disc text-xs px-4 py-2">
          <li>Recommended image size: 2160 x 1080px</li>
          <li>Maximum file size: 10MB</li>
          <li>Supported image files: JPEG or PNG</li>
        </ul>
      </div>
      <div className="relative py-8">
        <h1 className="text-3xl text-[#39364f] font-bold font-roboto py-2 ">
          Description
        </h1>
        <p className=" text-[#39364f] text-sm font-roboto font-medium py-4">
          Add more details to your event like your schedule, sponsors, or
          featured guests.Learn more
        </p>
        <div className="border p-2 focus:border-indigo-500">
          <label
            htmlFor=""
            required
            className="block text-xs text-[#39364f] font-roboto "
          >
            Summary
          </label>
          <input
            type="text"
            id="summary"
            value={summary}
            onChange={handleChange}
            name="summary"
            className="w-full border-none outline-none font-roboto text-sm"
            placeholder="Write a short summary to get attendees excited"
          />
        </div>
        <small className="absolute right-0 pt-2 font-roboto text-sm">
          0/140
        </small>

        <div className="border px-4 py-2 my-8 focus:border-indigo-500 w-full">
          <label
            htmlFor=""
            required
            className="block text-xs text-[#39364f] font-roboto "
          >
            Description
          </label>
          <textarea
            cols="50"
            rows="3"
            // value={startDate}
            className="w-full  border-none outline-none font-roboto text-sm "
            placeholder="Be clear and descriptive"
          />
        </div>
      </div>

      {secEventAvatarPreview ? (
        <div className="relative border p-2 focus:border-indigo-500 hover:shadow-lg block h-60 bg-slate-100 rounded border-6 text-xs text-[#39364f] font-roboto">
          <img
            src={secEventAvatarPreview}
            alt="preview"
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className=" relative border p-2 focus:border-indigo-500 hover:shadow-lg block h-60 bg-slate-100 rounded border-6 text-xs text-[#39364f] font-roboto">
          <input
            type="file"
            id="secEventAvatar"
            onChange={handleChange}
            accept="images/*"
            name="secEventAvatar"
            className="w-full hidden border-none outline-none font-roboto text-sm"
            placeholder="Be clear and descriptive"
          />
          <div className="absolute w-full h-full top-0 flex justify-center items-center flex-col">
            <svg
              className="text-orange-500 w-16 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className=" text-2xl font-roboto font-semibold text-[#39364f]">
              Drag and drop an image or{" "}
            </p>
            <label
              htmlFor="secEventAvatar"
              required
              className=" flex gap-2 items-center cursor-pointer top-40 text-sm py-2 px-20 font-roboto font-medium border-2 rounded border-gray-700 bg-white text-[#39364f]"
            >
              <IoImagesOutline className="h-4 w-4" /> Upload Image
            </label>
          </div>
        </div>
      )}
      <ul className="flex lg:justify-between gap-2 list-disc text-xs px-4 py-2">
        <li>Recommended image size: 2160 x 1080px</li>
        <li>Maximum file size: 10MB</li>
        <li>Supported image files: JPEG or PNG</li>
      </ul>
      <div className="border p-2 focus:border-indigo-500">
        <label
          htmlFor=""
          required
          className="block text-xs text-[#39364f] font-roboto "
        >
          Add Video Link (Optional){" "}
        </label>

        <input
          type="text"
          id="preVideoLink"
          value={preVideoLink}
          onChange={handleChange}
          name="preVideoLink"
          className="w-full border-none outline-none font-roboto text-sm"
          placeholder="Write a short summary to get attendees excited"
        />
      </div>
      {/* {preVideoLink && (
        <div className=" relative mt-10 border p-2 focus:border-indigo-500 hover:shadow-lg block aspect-video  rounded border-6">
          <video src={preVideoLink} className="aspect-video"></video>
        </div>
      )} */}
    </div>
  );
};

export default EventDetail;
