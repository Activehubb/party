import React from "react";
import flyer from "../../assets/flyer.jpg";
import "./flyer.scss";

const Flyer = () => {
  return (
    <section>
      <div className=" w-full ">
        <div className="relative bg-yellow-50">
          <img src={flyer} alt="flyer" className="flyer" />
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
              <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className=" lg:w-6/12 lg:py-24 xl:py-32">
                  <p className="font-roboto lg:w-[50%] font-black lg:text-[5rem] absolute bottom-40 text-[3.2rem] text- text-white">
                    Connect through online events
                  </p>
                  <button className="absolute bottom-20 bg-orange-700 p-2 text-white shadow-sm rounded">
                    {" "}
                    Find your next events
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flyer;
