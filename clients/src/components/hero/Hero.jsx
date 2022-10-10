import React from "react";
import Flyer from "../../widget/flyer/flyer";
import Quote from "../../widget/quote/Quote";
import Header from "../header/Header";
import Events from "../events/Events";
import Footer from "../footer/Footer";

const Hero = () => {
  return (
    <div>
      <Header />
      <Flyer />
      <Quote />
      <Events />
      <Footer />
    </div>
  );
};

export default Hero;
