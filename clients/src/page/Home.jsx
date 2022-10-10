import React from "react";
import Hero from "../components/hero/Hero";
import { MetaData } from "../utils/MetaData";
import { eventSeo } from "../widget/headerList";

const Home = () => {
  return (
    <div>
      <MetaData title={eventSeo.title} content={eventSeo.content} />
      <Hero />
    </div>
  );
};

export default Home;
