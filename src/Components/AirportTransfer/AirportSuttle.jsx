import React from "react";
import { NavLink } from "react-router-dom";

const AirportSuttle = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto">
      <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5 mt-[2.5rem] lg:mt-[5rem] mb-20">
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 order-2 md1:order-1">
          <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#181A1F]">
            Airport shuttle booking
          </h1>
          <p className="text-[16px] md1:max-w-[36rem] w-full text-[#181a1f]">
            Securing your{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/limousineservices"}>
                Blacklane limousine service
              </NavLink>{" "}
            </span>{" "}
            is a breeze and takes just moments. Whether you prefer the
            convenience of our user-friendly Blacklane website or the on-the-go
            ease of our smartphone app (available for Apple and Android
            devices), booking your airport transfer in any city is a snap. The
            process is refreshingly simple: just provide your pickup location
            and desired destination, then choose the perfect vehicle class from
            our fleet. Once you've confirmed the transparent fare and entered
            your payment details, a booking confirmation email will arrive
            shortly to finalize your arrangements. Blacklane values
            transparency, so you can rest assured that the price you see upfront
            is the only price you'll pay – no hidden fees to disrupt your
            stress-free travel experience.
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

export default AirportSuttle;
