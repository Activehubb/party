import React, { useState } from "react";
import partymode from "../../assets/partymode.svg";
import "./header.scss";
import { headerOne, headerTwo } from "../../widget/headerList";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../../widget/search/Search";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="header relative">
      <div className="w-full flex py-2 shadow-md items-center justify-between bg-white text-white z-10">
        <Link
          title="Party Mode"
          to="/"
          className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64  bg-white dark:bg-gray-800 border-none"
        >
          <img
            className="w-12 h-12 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src={partymode}
          />
          <span className="hidden md:block text-[#F84B05] font-bold text-lg">
            PartyMode
          </span>
        </Link>
        <div className="flex justify-between items-center  bg-white dark:bg-gray-800 header-right">
          <div className="bg-gray-50 rounded flex items-center w-full max-w-xl  p-3 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <svg
                className="w-5 text-gray-600 h-5 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <button
              type="button"
              name=""
              id=""
              placeholder="Search"
              onClick={handleToggle}
              className=" pl-3 text-sm cursor-pointer text-left font-bold text-gray-300 outline-none focus:outline-none bg-transparent"
            >
              Search a party
            </button>
          </div>
          <ul className="flex items-center header-list">
            {headerOne.map((item) => (
              <>
                <li className="relative hover:bg-slate-50 py-4 px-3 justify-center hidden lg:block ">
                  <Link
                    to={`/${item.txtLink}`}
                    aria-hidden="true"
                    className={`group p-2 font-roboto font-semibold text-sm text-${item.color} transition-colors duration-200  dark:hover:bg-gray-200 focus:outline-none`}
                  >
                    {item.txt}
                  </Link>
                </li>
              </>
            ))}
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
            </li>
            {!user ? (
              <>
                {headerTwo.map((item) => (
                  <>
                    <Link
                      to={item.txtLink}
                      className=" hover:bg-slate-50 p-4  "
                    >
                      <li
                        aria-hidden="true"
                        className={` font-roboto  text-sm text-${item.color} transition-colors duration-200 dark:hover:bg-gray-200 focus:outline-none`}
                      >
                        {item.txt}
                      </li>
                    </Link>
                  </>
                ))}
              </>
            ) : (
              <>
                <div className="bg-orange-600 flex items-center p-2 px-6 rounded-md shadow-md">
                  <img src="" alt="avatar" className="w-8 h-8 rounded-full" />
                  <h3>{user.fname}</h3>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
      {toggle && <Search handleToggle={handleToggle} />}
      <Outlet />
    </div>
  );
};

export default Header;
