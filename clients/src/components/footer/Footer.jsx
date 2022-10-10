import React from "react";
import { Link } from "react-router-dom";
import { footerList } from "../../widget/headerList";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="">
      <div className="bg-[#1e0a3c]">
        <div className="container m-auto text-white text-sm">
          <div className="p-4 lg:flex lg:w-full lg:justify-between lg:items-center">
            <div className="text-xs footer-base_year text-center text-yellow-50 ">
              &copy; {year} Partymode
            </div>
            <ul className="p-4 flex justify-center items-center flex-wrap gap-4">
              {footerList.map((list, idx) => (
                <li key={idx} className=" text-xs text-yellow-50 list-item  capitalize">
                  <a href="">{list.txt}</a>
                </li>
              ))}
            </ul>
            <div className="  text-base text-center text-yellow-50  hover:underline hover:text-indigo-600">
              <p>United States</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
