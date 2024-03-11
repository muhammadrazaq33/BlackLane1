import React from "react";
import { NavLink } from "react-router-dom";

const GetToAirport = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto md1:mt-[5rem] mt-[2.5rem]">
      <div className="grid md1:grid-cols-2 grid-cols-1 gap-x-[4rem] gap-y-5">
        {/* IMAGE   ===>*/}
        <div className="">
          <img src="./assets/images/image-4.jpg" className=" md1:w-[100%]" alt="" />
        </div>
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col">
          <h1 className="text-[28px] lg:text-[32px] font-semibold mb-3 text-[#181A1F]">
            Get to or from the airport
          </h1>
          <p className=" text-[16px] md1:max-w-[36.8rem] w-full text-[#181a1f]">
            In pursuit of an unparalleled travel experience,{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/choufferservices"}>Blacklane chauffeurs</NavLink>{" "}
            </span>{" "}
            prioritize exceptional{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/choufferservices"}>service</NavLink>{" "}
            </span>{" "}
            for every client. Whether you're touching down at{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink>LAX</NavLink>{" "}
            </span>{" "}
            for a{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink>California</NavLink>{" "}
            </span>{" "}
            business trip or departing{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink>Bangkok International Airport</NavLink>{" "}
            </span>{" "}
            after a Thai escapade, Blacklane ensures a comfortable and
            stress-free journey with our airport pickup and transfer services.
            Traveling to your hotel with loved ones or colleagues? Our Blacklane
            Business Van comfortably seats up to five passengers, with ample
            luggage space. Craving an extra dose of luxury? Choose our First
            Class service, offering the pinnacle of style and comfort – ideal
            for those unforgettable occasions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetToAirport;
