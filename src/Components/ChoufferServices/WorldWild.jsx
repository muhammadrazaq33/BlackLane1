import React from "react";

const WorldWild = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto">
      <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5 mt-[2.5rem] lg:mt-[5rem]">
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 order-2 md1:order-1">
          <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#181A1F]">
            Chauffeur hire worldwide
          </h1>
          <p className=" text-[16px] md1:max-w-[36rem] w-full text-[#181a1f]">
            There's no better way to travel than with Blacklane chauffeur
            services, offering comfort, reliability, and style. Trust your
            transportation needs to our professional chauffeurs and experience
            world-class service provided by local partners dedicated to
            upholding Blacklane’s high standards. After settling into your
            accommodation, explore the city with ease by booking a Blacklane
            chauffeur service. Our locally knowledgeable chauffeurs are ready to
            provide insider tips and suggestions for making the most of your
            time. With Blacklane, enjoy the same exceptional experience in
            cities worldwide, spanning Europe, North America, and Asia. Our
            professionally licensed, English-speaking chauffeurs ensure a
            smooth, stress-free ride wherever life takes you. Whether you're
            traveling for business or pleasure, Blacklane chauffeurs are your
            trusted partners in seamless, luxurious transportation.
          </p>
        </div>

        {/* IMAGE   ===>*/}
        <div className="order-1 md1:order-2">
          <img src="./assets/images/img-2.jpg" className=" md1:w-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorldWild;
