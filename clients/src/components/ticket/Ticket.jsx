import React from "react";
import TicketDetails from "../../widget/ticket/TicketDetails";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Ticket = () => {
  return (
    <div>
      <Header />
      <div className="relative my-4 mb-32">
        <div className="container m-auto px-4 lg:px-[20rem]">
          <form>
            <TicketDetails />
            <hr className="my-8" />
          </form>
        </div>
        <div className="mt-24 fixed lg:bottom-0 bg-white w-full ">
          <div className="p-2 lg:mb-12 lg:flex lg:gap-4 relative border-t">
            <button className="border lg:w-60 lg:absolute lg:right-10 border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium text-sm bg-orange-600 text-white">
              Save & Continue
            </button>
            <button className="border lg:absolute lg:right-80 lg:w-60 border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium text-sm">
              Discard
            </button>
          </div>
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
