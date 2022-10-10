import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TiTimesOutline } from "react-icons/ti";

const Search = ({ handleToggle }) => {
  return (
    <div>
      <div className="absolute pt-8 w-screen h-screen overflow-hidden overflow-y-hidden top-0 z-50 p-8 bg-white">
        <div className="flex relative gap-4 py-8 items-center">
          <IoSearchOutline className="w-6 h-6 text-orange-600" />
          <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
          <input
            type="search"
            name="search"
            id=""
            className="outline-none border-b-2 text-orange-600 w-2/4 border-orange-600 bg-transparent placeholder:text-orange-700 text-2xl font-roboto font-bold"
          />
          <div className=" ">
            <TiTimesOutline onClick={handleToggle}  className="w-12 cursor-pointer h-12 rounded-full bg-slate-100 shadow-md text-orange-600 p-2 lg:absolute lg:right-36 lg:top-8"/>
          </div>
        </div>
        {/* <hr /> */}
        <div>list of search</div>
      </div>
    </div>
  );
};

export default Search;
