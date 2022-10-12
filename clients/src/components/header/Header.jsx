import React, { useState } from "react";
import partymode from "../../assets/partymode.svg";
import "./header.scss";
import { headerOne, headerTwo } from "../../widget/headerList";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../../widget/search/Search";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const path = useLocation().pathname;
  return (
    <div className="header relative shadow-md  bg-white text-white z-10 py-2">
      <div className="container m-auto ">
        <div className="w-full flex justify-between items-center ">
          <div>
            <Link
              title="Party Mode"
              to="/"
              className="flex items-center ml-4  bg-white dark:bg-gray-800 border-none"
            >
              <img
                className="w-12 h-12 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
                src={partymode}
                alt="logo"
              />
              <span className="hidden md:block text-[#F84B05] font-bold text-lg">
                PartyMode
              </span>
            </Link>
          </div>
          <div>
            {path.includes("create") ? (
              ""
            ) : (
              <>
                <div className="bg-gray-50 rounded flex items-center  lg:w-[400px] lg:max-w-xl  p-3 shadow-sm border border-gray-200">
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
                    className=" pl-3 text-sm  lg:block cursor-pointer text-left font-bold text-gray-300 outline-none focus:outline-none bg-transparent"
                  >
                    Search a party
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between items-center  bg-white dark:bg-gray-800 ">
            <ul className="flex items-center gap-4  ml-4 ">
              {!user ? (
                <>
                  {headerOne.map((item) => (
                    <>
                      <li className="relative hover:bg-slate-50 px-6 py-4 justify-center hidden lg:block ">
                        <Link
                          key={item}
                          to={`/${item.txtLink}`}
                          aria-hidden="true"
                          className={`group  font-roboto font-semibold text-sm text-${item.color} transition-colors duration-200  dark:hover:bg-gray-200 focus:outline-none`}
                        >
                          {item.txt}
                        </Link>
                      </li>
                    </>
                  ))}

                  {headerTwo.map((item) => (
                    <>
                      <Link
                        key={item}
                        to={`/${item.txtLink}`}
                        className=" hover:bg-slate-50   "
                      >
                        <li
                          aria-hidden="true"
                          className={` font-roboto font-semibold px-6 py-4 text-sm text-${item.color} transition-colors duration-200 dark:hover:bg-gray-200 focus:outline-none`}
                        >
                          {item.txt}
                        </li>
                      </Link>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <div className="lg:flex flex justify-center lg:gap-8 lg:items-center ">
                      <Link
                        // to={`/${item.txtLink}`}
                        className=" hover:bg-slate-50 p-4  "
                      >
                        <li
                          aria-hidden="true"
                          className={` font-roboto text-[#39364f]  text-sm transition-colors duration-200 dark:hover:bg-gray-200 focus:outline-none`}
                        >
                          Organize Event{" "}
                        </li>
                      </Link>
                      <Link
                        // to={`/${item.txtLink}`}
                        className=" hover:bg-slate-50 p-4  "
                      >
                        <li
                          aria-hidden="true"
                          className={` font-roboto text-[#39364f] text-sm transition-colors duration-200 dark:hover:bg-gray-200 focus:outline-none`}
                        >
                          Create Event{" "}
                        </li>
                      </Link>
                    </div>
                    <div className="bg-orange-600 flex gap-4 items-center p-2 px-6 rounded-md shadow-md">
                      <img
                        src={user.user.avatar.url}
                        alt="avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <h3>{user.user.fname + user.user.lname}</h3>
                    </div>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      {toggle && <Search handleToggle={handleToggle} />}
      <Outlet />
    </div>
  );
};

export default Header;
