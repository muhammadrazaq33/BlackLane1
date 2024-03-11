import React from "react";

const OccasIon = () => {
  return (
    <div>
      <div className="w-[1200px] max-w-[93vw] m-auto">
        <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5 mt-[2.5rem] lg:mt-[5rem]">
          {/* TITLE PaRAGrAGh */}
          <div className=" flex flex-col gap-3 order-2 md1:order-1 place-self-center">
            <h1 className="text-[28px] lg:text-[32px] font-semibold leading-[2.2rem] text-[#181A1F]">
              By-the-hour hire for any occasion
            </h1>
            <p className=" text-[16px] md1:max-w-[36rem] w-full text-[#181a1f]">
              A Blacklane chauffeur by your side for a designated timeframe
              unlocks a world of adaptable travel planning. This service caters
              to both business and leisure travelers, offering the freedom to
              adjust your itinerary as you go. Need to squeeze in an unexpected
              meeting? Craving a spontaneous detour to explore a hidden gem?
              With a Blacklane chauffeur at your disposal, you can navigate your
              day seamlessly, always one step ahead of any unforeseen
              circumstances.
            </p>
          </div>

          {/* IMAGE   ===>*/}
          <div className="order-1 md1:order-2">
            <img src="./assets/images/hire-2.png" className=" md1:w-[100%]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasIon;
