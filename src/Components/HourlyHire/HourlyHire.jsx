import React from "react";
import HourlyService from "./HourlyService";
import OccasIon from "./OccasIon";
import DownloadApp from "./DownloadApp";
import HourlyHero from "./HourlyHero";
import AboutHourly from "./AboutHourly";
import Signaturebg1 from "./Signaturebg1";
import Navbar from "../CityToCIty/Navbar";
import Footer from "../CityToCIty/Footer";

const HourlyHire = () => {
  return (
    <div>
      <Navbar />
      <HourlyHero />
      <AboutHourly />
      <HourlyService />
      <OccasIon />
      <Signaturebg1 />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default HourlyHire;
