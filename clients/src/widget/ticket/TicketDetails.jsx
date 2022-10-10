import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const TicketDetails = () => {
  const [paid, setPaid] = useState(true);
  const [free, setFree] = useState(false);
  const [donation, setDonation] = useState(false);
  return (
    <div>
      <div className="shadow">
        <div className="header p-4 text-2xl font-roboto font-medium w-full ">
          <h1>Create Ticket</h1>
        </div>
        <hr />
        <div className="body">
          <div className="wrapper relative p-4">
            <div className=" flex justify-between gap-2 p-4 w-full ">
              <span
                onClick={() => {
                  setPaid(true);
                  setFree(false);
                  setDonation(false);
                }}
                className={`border  cursor-pointer  ${
                  paid
                    ? "bg-indigo-50 font-roboto  border-indigo-500  text-indigo-500"
                    : "bg-white text-[#39364f] font-roboto"
                } p-3 px-12 rounded`}
              >
                Paid
              </span>
              <span
                onClick={() => {
                  setPaid(false);
                  setFree(true);
                  setDonation(false);
                }}
                className={`border  cursor-pointer  ${
                  free
                    ? "bg-indigo-50 font-roboto  border-indigo-500  text-indigo-500"
                    : "bg-white text-[#39364f] font-roboto"
                } p-3 px-12 rounded`}
              >
                Free
              </span>
              <span
                onClick={() => {
                  setPaid(false);
                  setFree(false);
                  setDonation(true);
                }}
                className={`border cursor-pointer p-3 px-12 rounded ${
                  donation
                    ? "bg-indigo-50 font-roboto  border-indigo-500  text-indigo-500"
                    : "bg-white text-[#39364f] font-roboto"
                }`}
              >
                Donation
              </span>
            </div>
            <div className="border p-2 my-8 focus:border-indigo-500">
              <label
                htmlFor=""
                required
                className="block text-xs text-[#39364f] font-roboto "
              >
                Ticket Name
              </label>
              <input
                type="text"
                className="w-full border-none outline-none font-roboto text-sm"
                placeholder="e.g VIP, General Admission, Guest"
              />
            </div>
            <small className="absolute right-[20px] top-[184px] pt-2 font-roboto text-sm">
              0/50
            </small>
            <div>
              <div className="border p-2 my-8 focus:border-indigo-500">
                <label
                  htmlFor=""
                  required
                  className="block text-xs text-[#39364f] font-roboto "
                >
                  Available Quantity
                </label>
                <input
                  type="text"
                  className="w-full border-none outline-none font-roboto text-sm"
                  placeholder="e.g Quantity of tickets per capacity"
                />
              </div>
            </div>
            <div>
              <div className="border p-2 my-8 focus:border-indigo-500">
                <label
                  htmlFor=""
                  required
                  className="block text-xs text-[#39364f] font-roboto "
                >
                  Price ($)
                </label>
                <input
                  type="text"
                  className="w-full border-none outline-none font-roboto text-sm"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
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
                    // value={startDate}
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
                    // value={startDate}
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
                    // value={endDate}
                    className="w-full border-none outline-none font-roboto text-sm"
                    placeholder="Be clear and descriptive"
                  />
                </div>
              </div>
            </div>

            <div className="border flex gap-4 mt-8 items-center p-2">
              <input
                type="checkbox"
                id="start"
                className="h-6 w-6 border  checked:bg-blue-600 checked:scale-75 transition-all duration-200 peer rounded checked:border-blue-600 border-gray-300 bg-white"
              />
              <div>
                <label
                  htmlFor="start"
                  required
                  className="block text-sm text-[#39364f] font-roboto font-medium"
                >
                  Display start time.
                </label>
                <small className="block text-xs text-[#39364f] font-roboto ">
                  {" "}
                  Show ticket sale end dates and sale status at checkout.
                </small>
              </div>
            </div>

            <div>
              <div className="flex my-8 justify-between items-center">
                <label
                  htmlFor="start"
                  required
                  className="block text-sm text-[#39364f] font-roboto font-medium"
                >
                  Advance settings
                </label>
                <HiOutlineChevronDown className="h-4 w-4" />
              </div>
            </div>

            <hr />

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
            <div className="border px-4 py-2 my-8 focus:border-indigo-500 w-full">
              <label
                htmlFor="visibility"
                required
                className="block text-xs text-[#39364f] font-roboto "
              >
                Visibility
              </label>
              <select
                id="visiblity"
                class=" w-full border-none outline-none font-roboto text-sm cursor-pointer"
              >
                <option value="organizer">Visible</option>
                <option value="organizer">Hidden</option>
              </select>
            </div>

            <div className="flex w-full gap-2 mt-2">
              <div className="border px-4 py-2 focus:border-indigo-500 w-full">
                <label
                  htmlFor=""
                  required
                  className="block text-xs text-[#39364f] font-roboto "
                >
                  Minimum quantity
                </label>
                <input
                  type="number"
                  defaultValue={1}
                  // value={startDate}
                  className="w-full border-none outline-none font-roboto text-sm "
                  placeholder="Be clear and descriptive"
                />
              </div>
              <div className="border p-2 w-full focus:border-indigo-500">
                <label
                  htmlFor="max quantity"
                  required
                  className="block text-xs text-[#39364f] font-roboto "
                >
                  Maximum Quantity{" "}
                </label>
                <input
                  type="number"
                  id="max qauntity"
                  defaultValue={5}
                  className="w-full border-none outline-none font-roboto text-sm"
                  placeholder="Be clear and descriptive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
