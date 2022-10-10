import React from "react";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import flyer from "../../assets/flyer.jpg";

const Events = ({ event }) => {
  return (
    <main className="container m-auto">
      <section className="px-4">
        <div className=" relative bg-white border hover:transition-all hover:ease-in-out hover:shadow-2xl my-2">
          <div className="header">
            <img
              src={flyer}
              alt=""
              className=" w-full lg:h-[138px] h-[212px]"
            />
          </div>
          <div className="absolute right-3 lg:top-[7.3rem] top-[11.8rem]">
            <AiOutlineHeart className="w-12 bg-white  h-12 shadow-sm rounded-full p-2 hover:bg-slate-50" />
          </div>
          <div className="py-6 px-4">
            <h1 className=" text-2xl text-[#39364f] capitalize font-roboto font-bold">
              Lagos Blockchain & futuretech conference 2022
            </h1>
            <h2 className="py-2 cursor-default text-orange-500 capitalize font-roboto font-bold">
              Thur, sept 29, 9:00 AM
            </h2>
            <h3 className="pb-2 cursor-default text-sm capitalize font-roboto font-medium text-gray-500">
              The civic center <span>Lagos, LA</span>
            </h3>
            <h4 className="pb-2 cursor-default text-sm capitalize font-roboto font-medium text-gray-500">
              Free
            </h4>
            <h4 className="pb-2 cursor-default text-sm capitalize font-roboto font-medium text-gray-500">
              Start At $3.00
            </h4>
            <h5 className="pb-2 text-sm text-[#39364f] font-roboto cursor-default font-bold">
              Founders Board Africa is a network of founders that connects
              Africa.
            </h5>
            <h6 className="flex cursor-default items-center text-[#39364f] gap-2 font-medium">
              <span>
                <AiOutlineUser className="w-4 h-4" />
              </span>
              <p className=" cursor-default">192 followers</p>
            </h6>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
