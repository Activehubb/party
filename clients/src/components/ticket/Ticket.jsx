import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { delEvent, updateEvent } from "../../redux/apiCalls/eventApiCalls";
import TicketDetails from "../../widget/ticket/TicketDetails";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Ticket = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const [paid, setPaid] = useState(true);
  const [free, setFree] = useState(false);
  const [donation, setDonation] = useState(false);
  const [hideTicketEndDate, sethideTicketEndDate] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({
    ticketName: "",
    ticketQuantity: "",
    price: "",
    ticketStartTime: "",
    ticketEndTime: "",
    ticketEndDate: "",
    ticketStartDate: "",
    ticketDesc: "",
    ticketVisibility: "",
    ticketMinValue: "",
    ticketMaxValue: "",
  });

  const {
    ticketName,
    ticketQuantity,
    price,
    ticketEndDate,
    ticketStartDate,
    ticketEndTime,
    ticketStartTime,
    ticketDesc,
    ticketVisibility,
    ticketMinValue,
    ticketMaxValue,
  } = ticketInfo;

  const handleChange = (e) => {
    setTicketInfo({ ...ticketInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set("paid", paid);
    formData.set("free", free);
    formData.set("donation", donation);
    formData.set("ticketName", ticketName);
    formData.set("price", price);
    formData.set("ticketQuantity", ticketQuantity);
    formData.set("ticketStartTime", ticketStartTime);
    formData.set("ticketStartDate", ticketStartDate);
    formData.set("ticketEndDate", ticketEndDate);
    formData.set("hideTicketEndDate", hideTicketEndDate);
    formData.set("ticketDesc", ticketDesc);
    formData.set("ticketVisibility", ticketVisibility);
    formData.set("ticketMinValue", ticketMinValue);
    formData.set("ticketMaxValue", ticketMaxValue);
    formData.set("ticketEndTime", ticketEndTime);

    updateEvent(formData, path, dispatch);
  };

  const discardEvent = (e) => {
    e.preventDefault();
    delEvent(path, dispatch);
  };
  return (
    <div>
      <Header />
      <div className="relative my-4 mb-32">
        <div className="container m-auto px-4 lg:px-[20rem]">
          <form onSubmit={handleSubmit}>
            <TicketDetails
              paid={paid}
              free={free}
              donation={donation}
              ticketName={ticketName}
              ticketQuantity={ticketQuantity}
              price={price}
              hideTicketEndDate={hideTicketEndDate}
              ticketDesc={ticketDesc}
              ticketVisibility={ticketVisibility}
              ticketMinValue={ticketMinValue}
              ticketMaxValue={ticketMaxValue}
              ticketEndDate={ticketEndDate}
              ticketStartDate={ticketStartDate}
              ticketEndTime={ticketEndTime}
              ticketStartTime={ticketStartTime}
              setDonation={setDonation}
              setFree={setFree}
              sethideTicketEndDate={sethideTicketEndDate}
              setPaid={setPaid}
              handleChange={handleChange}
            />
            <hr className="my-8" />
          </form>
        </div>
        <div className="mt-24 fixed lg:bottom-0 bg-white w-full ">
          <div className="p-2 lg:mb-12 lg:flex lg:gap-4 relative border-t">
            <button
              type="submit"
              className="border lg:w-60 lg:absolute lg:right-10 border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium text-sm bg-orange-600 text-white"
            >
              Save & Continue
            </button>
            <button
              type="button"
              onClick={discardEvent}
              className="border lg:absolute lg:right-80 lg:w-60 border-gray-500 mt-2 px-12 py-2 rounded w-full font-roboto font-medium text-sm"
            >
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
