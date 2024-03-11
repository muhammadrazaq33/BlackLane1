import React from "react";
import { NavLink } from "react-router-dom";

const PrivateChauffeur = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto mt-[2.5rem] lg:mt-[5rem]">
      <div className="grid md1:grid-cols-2 grid-cols-1 gap-x-[4rem] place-content-between gap-y-4">
        {/* IMAGE   ===>*/}
        <div>
          <img src="./assets/images/img-3.jpg" className=" md1:w-[100%]" alt="" />
        </div>
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-[1rem] mt-3">
          <h1 className="text-[28px] lg:text-[32px] font-semibold leading-[2.2rem] text-[#181A1F]">
            Travel from A to B in your city by private chauffeur
          </h1>
          <p className=" text-[16px] md1:max-w-[36.8rem] w-full text-[#181a1f]">
            Experience the ultimate in city transportation with{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/limousineservices"}>Blacklane's stylish</NavLink>{" "}
            </span>{" "}
            limousine{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/limousineservices"}>service</NavLink>{" "}
            </span>
            , ensuring seamless travel for every journey. Our versatile fleet
            caters to diverse needs and preferences, offering a range of car
            classes to suit various styles and budgets. For larger groups, our
            Business Van service provides a comfortable solution, ideal for
            corporate travel and team outings. Elevate your travel experience
            with our exclusive First Class service, perfect for those seeking
            extra sophistication. Additionally, our stylish black cars are
            available for hourly hire, providing a private and reliable
            chauffeur service for any occasion. With our commitment to
            excellence and attention to detail, Blacklane ensures a journey that
            exceeds expectations, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivateChauffeur;
