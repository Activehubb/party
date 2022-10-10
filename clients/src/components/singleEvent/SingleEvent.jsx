import React from "react";
import flyer from "../../assets/flyer.jpg";
import monday from "../../assets/monday.png";
import mondayy from "../../assets/mondayy.png";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import Events from "../../widget/event/Events";
import "./layout.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const SingleEvent = () => {
  const arr = [1, 1, 1, 1];
  return (
    <div>
      <Header />
      <div className="lg:bg-slate-200 lg:rounded-b-full lg:p-12 ">
        <img
          src={flyer}
          alt="party flyer"
          className="  h-[320px] lg:shadow-2xl lg:rounded-lg lg:w-full lg:m-auto lg:max-w-[1200px] lg:h-[470px] w-full z-[1]"
        />
      </div>
      <div className="relative mb-32 lg:mb-0">
        <div className="">
          <div className="header">
            <div className="container p-4 lg:p-0 mx-auto">
              <div className="header_flyer py-8">
                <div className="date flex justify-between">
                  <h3 className="text-xl text-[#39364f]  font-roboto font-semibold">
                    Oct 27
                  </h3>
                  <AiOutlineHeart className="h-8 w-8" />
                </div>
                <h1 className="text-5xl py-4 text-[#39364f] font-roboto font-bold">
                  Africa's Future Empowerment Conference (AFEC)
                </h1>
                <p className="py-4 text-2xl font-roboto">
                  We are committed to building the people of Africa through
                  great synergies and empowerment.
                </p>
                <div className="organization text-lg  py-4 font-roboto">
                  <span>By</span>{" "}
                  <Link to="/profile" className="text-indigo-700">
                    Rudolf Brenyah Int'l & Creat NG (partner AFEC2022)
                  </Link>
                </div>
                <div className="followers flex items-center font-roboto text-gray-500 font-medium text-lg">
                  116 followers{" "}
                  <button className="ml-4 hover:bg-slate-100 transition-all duration-500 flex gap-2 items-center border-2 rounded border-indigo-500 py px-6 text-indigo-700">
                    Follow <AiOutlineHeart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container relative mx-auto">
            <div className="p-4 lg:p-0">
              <h1 className="text-5xl py-4 text-[#39364f] font-roboto font-bold">
                When and where
              </h1>
              <div className="lg:flex   items-center lg:gap-8">
                <div className="flex gap-4 items-center ">
                  <span className="p-4 my-4 bg-slate-100 rounded">
                    <AiOutlineCalendar className=" w-6 h-6 text-indigo-700" />
                  </span>
                  <div className="font-roboto font-medium text-2xl">
                    <h3>Date and time</h3>
                    <p className="text-base text-gray-500">
                      Sat, 8 October 2022, 09:00 – 16:00 BST
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 my-4 items-center ">
                  <span className="p-4 my-4 bg-slate-100 rounded">
                    <MdLocationPin className=" w-6 h-6 text-indigo-700" />
                  </span>
                  <div className="font-roboto font-medium text-2xl">
                    <h3>Location</h3>
                    <p className="text-base text-gray-500">
                      D'Podium International Event Centre Off Adeniyi Jones
                      Lagos, LA 101233
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map"></div>

            <div className="about p-4">
              <h1 className="text-3xl py-4 text-[#39364f] font-roboto font-bold">
                About this party
              </h1>

              <img src={monday} className="lg:w-[720px] h-[480px]" />
              <p className="py-4 text-justify text-[#39364f] font-roboto text-lg lg:w-[60%]">
                AFEC is an African project for different African countries like
                Kenya, Ghana, Nigeria, zimbabwe, South Africa, and many more,
                triggered to promoting a unique interactive platform for
                building individuals in Africa, creating synergy among youths,
                businesses, companies and government bodies. The 1-day event
                focuses on targeting different aspects of life like Idea
                Pitching, Tech Development, Health and wellbeing, importance of
                education, personal Development, finance and Entrepreneurship,
                and Networking. For our conferences, we also engage in product
                showcases by different businesses, presentation of awards to
                impactful and influential people in the society, also best
                students in different selected schools, certificate and
                presentation of equipments. We are committed to building the
                people of Africa, and the empowerment comes in different ways.
              </p>
              {/* <div className="video relative w-96  h-16">
                <video src="https://youtu.be/mHiWRWRYAZ4" controls={true} />
              </div> */}
              <div className="py-8 font-roboto text-gray-600">
                <img src={mondayy} className="lg:w-[720px] aspect-[3/2] lg:h-[480px]" />
                <h2 className="text-xl py-4">OUR INFORMATION</h2>
                <h3 className="text-base py-4">
                  Website: www.afeconference.com
                </h3>
                <h3 className="text-base py-4">
                  Website: www.afeconference.com
                </h3>
                <h3 className="text-base py-4">
                  Website: www.afeconference.com
                </h3>
              </div>

              <div className=" w-2/3">
                <h3 className="text-3xl py-4 text-[#39364f] font-roboto font-bold">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="p-2 rounded-3xl border-2 border-[#39364f] shadow-sm text-[#39364f] font-roboto bg-slate-100 ">
                    #endregion
                  </span>
                  <span className="p-2 rounded-3xl border-2 border-[#39364f] shadow-sm text-[#39364f] font-roboto bg-slate-100 ">
                    #endregion
                  </span>
                  <span className="p-2 rounded-3xl border-2 border-[#39364f] shadow-sm text-[#39364f] font-roboto bg-slate-100 ">
                    #endregion
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer"></div>

          <div className="bg-slate-200 ">
            <section className="container m-auto  py-8">
              <div className="flex items-center py-4 justify-between">
                <h1 className="px-4 font-bold text-4xl font-roboto capitalize">
                  Other party you may like
                </h1>
                <div className="flex gap-4 items-center pr-4">
                  <AiOutlineArrowLeft className="bg-slate-400 p-4 h-12 w-12 text-white" />
                  <AiOutlineArrowRight className="bg-slate-400 p-4 h-12 w-12 text-white" />
                </div>
              </div>
              <div className="layout ">
                {arr.map(() => (
                  <Events />
                ))}
              </div>
              <div className="flex justify-center ">
                <button className="m-12 rounded hover:shadow-md py-2 border-[#39364f47] border text-base px-20 font-roboto font-medium">
                  More Events
                </button>
              </div>
            </section>
          </div>
        </div>
        <Footer />
        <div className="mt-24 fixed lg:absolute lg:top-0 bottom-0 border-t-2 lg:border-t-0 bg-white  w-full lg:w-3/12 lg:border lg:h-40  lg:right-20 lg:rounded-lg px-8 hover:shadow transition duration-300">
          <div className="p-2 lg:block relative ">
            <button className="text-2xl border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium">
              Free
            </button>
            <button className="border text-2xl   border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-bold mb-4 lg:mb-0 bg-orange-600 text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
