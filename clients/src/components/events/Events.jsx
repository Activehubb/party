import React, { useEffect } from "react";
import Event from "../../widget/event/Events";
import "./event.scss";
import { Map } from "../../utils/Map";
import { getEvents } from "../../redux/apiCalls/eventApiCalls";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../widget/loader/Loader";

const Events = () => {
  const arr = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  const alert = useAlert();

  const dispatch = useDispatch();

  const { allEvents, error, pending } = useSelector((state) => state.events);

  useEffect(() => {
    getEvents(dispatch);
  }, [dispatch]);

  if (allEvents === null) {
    return <Loader />;
  }

  console.log(allEvents);
  return (
    <>
      <main>
        <section className="container m-auto ">
          <h1 className="px-8 font-bold text-2xl font-roboto capitalize">
            Events in lagos
          </h1>
          <div className="layout ">
            {allEvents &&
              allEvents.getAllEvent.map((event, idx) => (
                <Event event={event} key={idx} />
              ))}
          </div>
          <div className="flex justify-center ">
            <button className="m-12 rounded hover:shadow-md py-2 border-[#39364f47] border text-base px-20 font-roboto font-medium">
              More Events
            </button>
          </div>
          <Map className="w-[720px] h-[480px]" />
        </section>
      </main>
    </>
  );
};

export default Events;
