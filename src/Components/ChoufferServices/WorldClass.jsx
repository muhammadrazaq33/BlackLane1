import React from "react";

const WorldClass = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto mt-[2.5rem] lg:mt-[5rem]">
      <div className="grid md1:grid-cols-2 grid-cols-1 gap-x-[4rem] place-content-between gap-y-4">
        {/* IMAGE   ===>*/}
        <div>
          <img src="./assets/images/img-1.jpg" className=" md1:w-[100%]" alt="" />
        </div>
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 mt-3">
          <h1 className="text-[28px] lg:text-[32px] font-semibold leading-[2.2rem] text-[#181A1F]">
            World class chauffeurs going the extra mile
          </h1>
          <p className=" text-[16px] md1:max-w-[36.8rem] w-full text-[#181a1f]">
            Day in and day out, they exceed expectations. It’s ingrained in
            their very essence. That's why we celebrate the genuine dedication
            of Blacklane chauffeurs. Their commitment goes beyond mere job
            titles, as they strive to enhance every aspect of your journey. To
            truly appreciate the impact of their dedication, reserve a
            chauffeured ride today for yourself, a colleague, or a client.
            Experience the difference firsthand and elevate your travel
            experience with Blacklane.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldClass;
