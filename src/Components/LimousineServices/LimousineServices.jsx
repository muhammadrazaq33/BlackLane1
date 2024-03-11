import React from "react";
import LimoServices from "./LimoServices";
import BlacklaneLimo from "./BlacklaneLimo";
import AirportService from "./AirportService";
import LimoHero from "./LimoHero";
import Services from "../Component/Services";
import Navbar from "../CityToCIty/Navbar";
import Footer from "../CityToCIty/Footer";

const LimousineServices = () => {
  return (
    <div>
      <Navbar />
      <LimoHero />
      <Services />
      <LimoServices />
      <BlacklaneLimo />
      <AirportService />
      <Footer />
    </div>
  );
};

export default LimousineServices;
