import React from "react";

const DownloadApp = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto mt-[5rem]">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-y-8 ">
        {/* Download Text */}
        <div className="lg:text-left text-center lg:order-1 order-2 lg:mt-[4rem]">
          <h3 className="text-3xl font-semibold text-[#181A1F]">
            Download the app
          </h3>
          <div className=" flex flex-col gap-8 mt-4">
            <p className="mt-4 lg:max-w-lg text-[#181a1f]">
              Easily book, change, or cancel rides on the go. Think of it as
              peace of mind in the palm of your hand.
            </p>
            {/* LOGOS ===> */}
            <div className=" flex gap-4 lg:justify-start justify-center">
              <img
                src="./assets/images/appstore.png"
                className="w-[119px] h-[34px] object-cover"
                alt=""
              />
              <img
                src="./assets/images/googleplay.png"
                className="w-[119px] h-[34px] object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:order-2 order-1 lg:m-0 m-auto">
          <img
            src="./assets/images/hIre-4.png"
            className="object-contain lg:h-auto lg:w-full  w-full"
            alt="Hello"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
