import React from "react";
import { NavLink } from "react-router-dom";

const AirportService = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto mb-11">
      <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5 mt-[2.5rem] lg:mt-[5rem]">
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 order-2 md1:order-1">
          <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#181A1F]">
            Airport limousine service
          </h1>
          <p className=" text-[16px] md1:max-w-[36rem] w-full text-[#181a1f]">
            Book our{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/airportTransfer"}>airport transfer</NavLink>{" "}
            </span>{" "}
            service for up to five people and enjoy a luxurious limo ride to the
            airport, day or night. At Blacklane, professionalism, comfort, and
            style are our top priorities. With our straightforward booking
            process, reserve your ride in seconds using our user-friendly
            website or sleek smartphone app. We believe in complete transparency
            and honesty, ensuring the final price you see is the final price you
            pay when booking with us. Say goodbye to hidden fees, allowing you
            to accurately plan your travel expenses in advance, especially
            beneficial for corporate travelers. Experience seamless airport
            transfers with Blacklane - your trusted partner in travel
            excellence.
          </p>
        </div>

        {/* IMAGE   ===>*/}
        <div className="order-1 md1:order-2">
          <img
            src="./assets/images/image-5.jpg"
            className=" md1:w-[100%] h-full object-fill"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AirportService;
