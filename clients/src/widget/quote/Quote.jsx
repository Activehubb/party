import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import {
  IoBagHandleSharp,
  IoBusinessOutline,
  IoFitnessOutline,
  IoHandRightOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { BiDrink } from "react-icons/bi";
import { quoteList } from "../headerList";
import "./quote.scss";

const Quote = () => {
  // const [location, setLocation] = useState("");
  const [cond, setCond] = useState();
  return (
    <div className="w-full relative m-0">
      <div className="container m-auto md:px-12 lg:pt-[1rem] lg:px-7">
        <div className="quote shadow-md w-full mt-4 lg:mt-0 rounded">
          <h1 className="p-2 text-lg font-roboto font-medium ">
            Do events help you find connection?
          </h1>
          <p className="p-2 text-base pt-0 font-roboto">
            Help us understand how attending events contributes to building
            social connection by taking a short survey before and after your
            next event.{" "}
            <a
              href="!#"
              className=" no-underline hover:text-gray-700 text-orange-600"
            >
              Start here.
            </a>
          </p>
        </div>

        <div className="wrapper p-8">
          <div className="wrapper-popular">
            <span className="lg:flex  lg:items-center lg:gap-4">
              <h2 className=" lg:flex lg:items-center text-[30px] block font-black text-[#39364f]">
                Popular in
                <HiChevronDown className="text-[30px] font-black text-indigo-700 h-8 w-10" />
              </h2>
              <span className="flex justify-between items-center">
                <input
                  type="text"
                  // value={location}
                  placeholder={"Lagos"}
                  className="text-[30px] shadow-sm placeholder:text-indigo-600 font-black text-indigo-700 outline-none border-b-2 focus:border-solid"
                />
              </span>
            </span>
          </div>
        </div>

        <div className="wrapper px-8 ">
          <ul className="flex items-center flex-wrap gap-1 text-sm font-medium font-roboto">
            {quoteList.map((list, idx) => (
              <li
                key={idx}
                onClick={() => setCond(idx)}
                className={`${
                  cond ? "text-indigo-500" : "text-gray-500"
                } cursor-pointer p-2 hover:border-b-[3px] hover:border-solid hover:border-[#39364f] `}
              >
                {list.txt}
              </li>
            ))}
          </ul>
        </div>

        <div className="wrapper p-8">
          <h2 className=" text-[24px] lg:text-left text-center block font-black text-[#39364f]">
            Check out trending categories
          </h2>
          <div className="flex lg:block pt-4 gap-4 w-full">
            <div className="flex gap-4 lg:pb-4 flex-wrap lg:flex-nowrap w-full">
              <div className="flex items-center shadow bg-slate-100 w-full ">
                <span className="text-orange-300 bg-orange-50 p-4 flex items-center justify-center text-center">
                  <IoMusicalNotesOutline className=" w-6 h-6" />
                </span>
                <span className=" bg-slate-100 p-4 w-full font-roboto text-gray-700 text-sm ">
                  Music
                </span>
              </div>
              <div className="flex items-center shadow bg-slate-100 w-full ">
                <span className="text-orange-300 bg-orange-50 p-4 flex items-center justify-center text-center">
                  <IoHandRightOutline className=" w-6 h-6" />
                </span>
                <span className=" bg-slate-100 p-4 w-full font-roboto text-gray-700 text-sm ">
                  Performing & Visual Arts
                </span>
              </div>
              <div className="flex items-center shadow bg-slate-100 w-full ">
                <span className="text-orange-300 bg-orange-50 p-4 flex items-center justify-center text-center">
                  <SiYourtraveldottv className=" w-6 h-6" />
                </span>
                <span className=" bg-slate-100 p-4 w-full font-roboto text-gray-700 text-sm ">
                  Travel & Outdoor
                </span>
              </div>
              <div className="flex items-center shadow bg-slate-100 w-full ">
                <span className="text-orange-300 bg-orange-50 p-4 flex items-center justify-center text-center">
                  <MdOutlineHealthAndSafety className=" w-6 h-6" />
                </span>
                <span className=" bg-slate-100 p-4 w-full font-roboto text-gray-700 text-sm ">
                  Health
                </span>
              </div>
            </div>
            <div className="flex lg:pb-4 gap-4 flex-wrap lg:flex-nowrap w-full">
              <div className="flex items-center shadow bg-slate-100 w-full ">
                <span className="text-orange-300 bg-orange-50 p-4 flex items-center justify-center text-center">
                  <IoBagHandleSharp className=" w-6 h-6" />
                </span>
                <span className=" bg-slate-100 p-4 w-full font-roboto text-gray-700 text-sm ">
                  Hobbies
                </span>
              </div>
              <div className="flex items-center shadow bg-slate-100 w-full ">
                <span className="text-orange-300 bg-orange-50 p-4 flex items-center justify-center text-center">
                  <IoBusinessOutline className=" w-6 h-6" />
                </span>
                <span className=" bg-slate-100 p-4 w-full font-roboto text-gray-700 text-sm ">
                  Business
                </span>
              </div>
              <div className="flex items-center shadow bg-slate-100 w-full ">
                <span className="text-orange-300 bg-orange-50 p-4 flex items-center justify-center text-center">
                  <BiDrink className=" w-6 h-6" />
                </span>
                <span className=" bg-slate-100 p-4 w-full font-roboto text-gray-700 text-sm ">
                  Food & Drink
                </span>
              </div>
              <div className="flex items-center shadow bg-slate-100 w-full ">
                <span className="text-orange-300 bg-orange-50 p-4 flex items-center justify-center text-center">
                  <IoFitnessOutline className=" w-6 h-6" />
                </span>
                <span className=" bg-slate-100 p-4 w-full font-roboto text-gray-700 text-sm ">
                  Sports & Fitness
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
