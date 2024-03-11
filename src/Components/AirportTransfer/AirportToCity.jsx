import React from "react";

const AirportToCity = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto mt-[2.5rem] lg:mt-[5rem]">
      <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5">
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 order-2 md1:order-1">
          <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#181A1F]">
            Airport transfer in the city
          </h1>
          <p className="text-[16px] md1:max-w-[37.5rem] text-[#181a1f]">
            Upon arrival from a lengthy flight, exhausted and sore, nothing
            beats a Blacklane airport transfer straight to your final stop.
            Blacklane operates in numerous cities and airports globally,
            providing a hassle-free alternative for those uninterested in
            navigating unfamiliar public transit or negotiating with local taxi
            services. Our service ensures a seamless journey from the airport to
            your destination. Wherever your travels take you, our skilled
            drivers monitor your flight status and accommodate any unforeseen
            delays. They're carefully selected and well-versed in local
            knowledge, ready to offer recommendations or suggestions for your
            stay.
          </p>
        </div>

        {/* IMAGE   ===>*/}
        <div className="order-1 md1:order-2">
          <img src="./assets/images/image-3.jpg" className=" md1:w-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AirportToCity;
