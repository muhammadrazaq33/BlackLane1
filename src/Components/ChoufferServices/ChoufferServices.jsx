import React from "react";
import WorldClass from "./WorldClass";
import WorldWild from "./WorldWild";
import PrivateChauffeur from "./PrivateChauffeur";
import ProfessionalChauffeur from "./ProfessionalChauffeur";
import ChauffeurHero from "./ChauffeurHero";
import Services from "../Component/Services";
import SignatureBg from "../Component/SignatureBg";
import Navbar from "../CityToCIty/Navbar";
import Footer from "../CityToCIty/Footer";

const ChoufferServices = () => {
  return (
    <div>
      <Navbar />
      <ChauffeurHero />
      <Services />
      <SignatureBg />
      <WorldClass />
      <WorldWild />
      <PrivateChauffeur />
      <ProfessionalChauffeur />
      <Footer />
    </div>
  );
};

export default ChoufferServices;
