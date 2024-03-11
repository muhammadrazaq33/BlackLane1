import React from "react";

const HourlyService = () => {
  return (
    <div>
      <div className="w-[1200px] max-w-[93vw] m-auto mt-[5rem]">
        <div className="grid md1:grid-cols-2 grid-cols-1 gap-x-[4rem] place-content-center  gap-y-4">
          {/* IMAGE   ===>*/}
          <div>
            <img src="./assets/images/hire-1.png" className=" md1:w-[100%]" alt="" />
          </div>
          {/* TITLE PaRAGrAGh */}
          <div className=" flex flex-col gap-3 place-self-center">
            <h1 className="text-[28px] lg:text-[32px] font-semibold leading-[2.2rem] text-[#181A1F]">
              Flexibility with an hourly service
            </h1>
            <p className=" text-[16px] md1:max-w-[35.7rem] w-full text-[#181a1f]">
              Craving additional freedom during your travels? Blacklane offers a
              dependable hourly chauffeur service, ensuring you experience the
              same exceptional professionalism and first-rate service wherever
              your adventures take you, from the vibrant streets of Sao Paulo to
              the iconic landmarks of San Francisco or the stunning harbor of
              Sydney. This service allows you to book a Blacklane chauffeur for
              a customized timeframe, perfect for those days with a fluid
              itinerary. Experience Blacklane's unmatched commitment to quality
              and expertise, transforming your sightseeing or errands into
              seamless journeys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyService;
