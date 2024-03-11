import React from "react";
 
import Navbar from "../CityToCIty/Navbar";
import Hero2 from '../Component/Hero'
import Services from "../Component/Services";
import SignatureBg from "../Component/SignatureBg";
import AirportToCity from "./AirportToCity";
import GetToAirport from "./GetToAirport";
import AirportSuttle from "./AirportSuttle";
import Footer from "../CityToCIty/Footer";

const AirportTransfer = () => {
  return (
    <div>
      <Navbar />
      <Hero2 />
      <Services />
      <SignatureBg />
      <AirportToCity />
      <GetToAirport />
      <AirportSuttle />
      <Footer />
    
    </div>
  );
};

export default AirportTransfer;
