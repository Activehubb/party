import React, { useState } from "react";
import { eventCateList, eventTypeList } from "../headerList";

const BasicDetails = ({
  title,
  tags,
  organizer,
  eventType,
  eventCategory,
  handleChange,
}) => {
  return (
    <div>
      <div className="wrapper relative">
        <h1 className="text-3xl text-[#39364f] font-bold font-roboto py-2 ">
          Basic Info
        </h1>
        <p className=" text-[#39364f] text-sm font-roboto font-medium py-4">
          Name your event and tell event-goers why they should come. Add details
          that highlight what makes it unique.
        </p>
        <div className="border p-2 focus:border-indigo-500">
          <label
            htmlFor="title"
            className="block text-xs text-[#39364f] font-roboto "
          >
            Party Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            name="title"
            required
            onChange={handleChange}
            className="w-full border-none outline-none font-roboto text-sm"
            placeholder="Be clear and descriptive"
          />
        </div>
        <small className="absolute right-0 pt-2 font-roboto text-sm">
          0/75
        </small>

        <div className="border p-2 mt-12">
          <label
            htmlFor="organizer"
            required
            className="block text-xs text-[#39364f] font-roboto "
          >
            Organizer
          </label>
          <select
            id="organizer"
            value={organizer}
            name="organizer"
            onChange={handleChange}
            className=" w-full border-none outline-none font-roboto text-sm cursor-pointer"
          >
            <option value="organizer">Organizer</option>
            <option value="organizer">Organizer</option>
            <option value="organizer">Organizer</option>
            <option value="organizer">Organizer</option>
          </select>
        </div>
        <small className="py-2">
          This profile describes a unique organizer and shows all of the events
          on one page. View Organizer Info
        </small>
        <div className="border p-4 mt-12">
          <select
            id="type"
            value={eventType}
            onChange={handleChange}
            name="eventType"
            required
            className=" w-full border-none outline-none font-roboto text-sm cursor-pointer"
          >
            {eventTypeList.map((list, idx) => (
              <option value={list.txt} key={idx}>
                {list.txt}
              </option>
            ))}
          </select>
        </div>

        <div className="border  p-4 mt-12">
          <select
            id="category"
            value={eventCategory}
            onChange={handleChange}
            name="eventCategory"
            required
            className=" w-full border-none outline-none font-roboto text-sm block  cursor-pointer"
          >
            {eventCateList.map((list, idx) => (
              <option value={list.txt}>{list.txt}</option>
            ))}
          </select>
        </div>
        <div className="my-12 relative">
          <h3 className="font-roboto font-bold text-2xl text-[#39364f]">
            Tags
          </h3>
          <p className="font-roboto text-sm text-[#39364f]">
            Improve discoverability of your event by adding tags relevant to the
            subject matter.
          </p>
          <div className="border p-2 mt-2">
            <label
              htmlFor="organizer"
              required
              className="block text-xs text-[#39364f] font-roboto "
            >
              Press Enter to add a tag
            </label>
            <input
              type="text"
              value={tags}
              onChange={handleChange}
              name="tags"
              className="w-full border-none outline-none font-roboto text-sm"
              placeholder="Add tags to your event"
            />
          </div>
          <small className="absolute left-0 pt-2 font-roboto text-sm">
            0/10 tags
          </small>
          <small className="absolute right-0 pt-2 font-roboto text-sm">
            0/25
          </small>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
