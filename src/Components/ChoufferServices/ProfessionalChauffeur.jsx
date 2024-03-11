import React from "react";
import { NavLink } from "react-router-dom";

const ProfessionalChauffeur = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto mb-11">
      <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5 mt-[2.5rem] lg:mt-[5rem]">
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 order-2 md1:order-1">
          <h1 className="text-[28px] lg:text-[32px] font-semibold leading-[2.2rem] text-[#181A1F]">
            Professional chauffeur service to and from the airport
          </h1>
          <p className=" text-[16px] md1:max-w-[36rem] w-full text-[#181a1f]">
            After a long flight,{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/airportTransfer"}>
                Blacklane's flexible airport transfer service
              </NavLink>{" "}
            </span>{" "}
            provides a welcome respite for weary travelers. With a professional
            chauffeur awaiting your arrival, complete with a personalized sign,
            we ensure a seamless transition to your waiting vehicle. Booking
            your chauffeur service is effortless through our user-friendly
            website or sleek smartphone app, with the price displayed upfront
            being the price you'll pay - no surprises or hidden fees. At
            Blacklane, we offer luxury without the luxury rates, prioritizing
            honesty and transparency with every guest. This commitment extends
            to our corporate travelers, providing them with the convenience of
            accurately forecasting their travel expenses. Experience the
            convenience and reliability of our professional and private car
            service by booking with Blacklane today.
          </p>
        </div>

        {/* IMAGE   ===>*/}
        <div className="order-1 md1:order-2">
          <img src="./assets/images/image-5.jpg" className=" md1:w-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalChauffeur;
