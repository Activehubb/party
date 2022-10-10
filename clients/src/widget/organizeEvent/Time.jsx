import React, { useState } from "react";
import DatePicker from "../../utils/DatePicker";

const Time = ({
  startDate,
  endDate,
  setEndDate,
  setStartDate,
  startTime,
  endTime,
  hideEndTime,
  handleHideTime,
  handleChange,
}) => {
  const [singleEvent, setSingleEvent] = useState(true);
  const [recurringEvent, setRecurringEvent] = useState(false);

  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  return (
    <div className="wrapper relative">
      <h1 className="text-3xl text-[#39364f] font-bold font-roboto py-2 ">
        Date and time
      </h1>
      <p className=" text-[#39364f] text-sm font-roboto font-medium py-4">
        Tell event-goers when your event starts and ends so they can make plans
        to attend.
      </p>
      <div className=" flex gap-4 w-full ">
        <span
          onClick={() => {
            setSingleEvent(true);
            setRecurringEvent(false);
          }}
          className={`border  cursor-pointer ${
            singleEvent
              ? "bg-indigo-50 font-roboto  border-indigo-500  text-indigo-500"
              : "bg-white text-[#39364f] font-roboto"
          } p-3 px-8 rounded`}
        >
          Single Event
        </span>
        <span
          onClick={() => {
            setSingleEvent(false);
            setRecurringEvent(true);
          }}
          className={`border  cursor-pointer  ${
            recurringEvent
              ? "bg-indigo-50 font-roboto  border-indigo-500  text-indigo-500"
              : "bg-white text-[#39364f] font-roboto"
          } p-3 px-8 rounded`}
        >
          Recurring Event
        </span>
      </div>
      <p className=" block text-sm text-[#39364f] font-roboto py-4">
        Single event happens once and can last multiple days
      </p>
      {singleEvent ? (
        <>
          <div className="flex w-full gap-2">
            <div className="border px-4 py-2 focus:border-indigo-500 w-full">
              <label
                htmlFor=""
                required
                className="block text-xs text-[#39364f] font-roboto "
              >
                Party start time
              </label>
              <input
                type="time"
                value={startTime}
                onChange={handleChange}
                name="startTime"
                min="00:00"
                className="w-full border-none outline-none font-roboto text-sm "
                placeholder="Be clear and descriptive"
              />
            </div>
            <div className="border p-2 w-full focus:border-indigo-500">
              <label
                htmlFor="endTime"
                required
                className="block text-xs text-[#39364f] font-roboto "
              >
                Party end time
              </label>
              <input
                type="time"
                id="endTime"
                value={endTime}
                onChange={handleChange}
                name="endTime"
                min="00:00"
                className="w-full border-none outline-none font-roboto text-sm"
                placeholder="Be clear and descriptive"
              />
            </div>
          </div>
          <div className="flex w-full gap-2 mt-2">
            <div className="border px-4 py-2 focus:border-indigo-500 w-full">
              <label
                htmlFor=""
                required
                className="block text-xs text-[#39364f] font-roboto "
              >
                Party starts date
              </label>
              <input
                type="text"
                value={startDate}
                name="startDate"
                className="w-full border-none outline-none font-roboto text-sm "
                placeholder="Be clear and descriptive"
              />
            </div>
            <div className="border p-2 w-full focus:border-indigo-500">
              <label
                htmlFor="endDate"
                required
                className="block text-xs text-[#39364f] font-roboto "
              >
                Part end date
              </label>
              <input
                type="text"
                id="endDate"
                value={endDate}
                name="endDate"
                className="w-full border-none outline-none font-roboto text-sm"
                placeholder="Be clear and descriptive"
              />
            </div>
          </div>
        </>
      ) : recurringEvent ? (
        <p className=" block text-sm text-[#39364f] font-roboto py-4">
          You’ll be able to set a schedule for your recurring event in the next
          step. Event details and ticket types will apply to all instances.
        </p>
      ) : (
        ""
      )}
      <div className="w-full mt-2 shadow">
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          handleSelect={handleSelect}
        />
      </div>
      <div className="border flex gap-4 items-center p-2 mt-2">
        <input
          type="checkbox"
          id="start"
          value={hideEndTime}
          onChange={handleHideTime}
          name="hideEndTime"
          className="h-6 w-6 border  checked:bg-blue-600 checked:scale-75 transition-all duration-200 peer rounded checked:border-blue-600 border-gray-300 bg-white"
        />
        <div>
          <label
            htmlFor="start"
            required
            className="block text-sm text-[#39364f] font-roboto font-medium"
          >
            Display end time.
          </label>
          <small className="block text-xs text-[#39364f] font-roboto ">
            {" "}
            The end time of your event will be displayed to attendees.
          </small>
        </div>
      </div>
      {/* <div className="border p-2 mt-2">
        <label
          htmlFor="organizer"
          required
          className="block text-xs text-[#39364f] font-roboto "
        >
          Timezone
        </label>
        <select
          type="text"
          className="w-full border-none outline-none font-roboto text-sm"
          placeholder="Add search to your event"
        >
          <option></option>
        </select>
      </div>
      <div className="border p-2 mt-2">
        <label
          htmlFor="organizer"
          required
          className="block text-xs text-[#39364f] font-roboto "
        >
          Party page language{" "}
        </label>
        <select
          type="text"
          className="w-full border-none outline-none font-roboto text-sm"
          placeholder="Add search to your event"
        >
          <option></option>
        </select>
      </div> */}
    </div>
  );
};

export default Time;
