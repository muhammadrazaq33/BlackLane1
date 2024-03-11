import hero from "../../../public/assets/images/hero-full.webp";
import heroMobile from "../../../public/assets/images/Limo-11.webp";
import heroTablet from "../../../public/assets/images/Limo-1.webp";
import heroLaptop from "../../../public/assets/images/Limo-3.webp";
import heroDesktop from "../../../public/assets/images/Limo-3.webp";
import heroFull from "../../../public/assets/images/Hero-4.webp";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { useState } from "react";
import Wrapper from "../CityToCIty/shared/Wrapper";
const LimoHero = () => {
  //   Tabs for form
  const [showOneWay, setShowOneWay] = useState(true);
  const [showByHour, setShowByHour] = useState(false);

  const showOneWayHandler = () => {
    setShowOneWay(true);
    setShowByHour(false);
  };
  const showByHourHandler = () => {
    setShowOneWay(false);
    setShowByHour(true);
  };
  return (
    <section className="relative">
      <Wrapper styles={"relative px-4"}>
        <h1 className="text-[32px] font-semibold  mb-4">
          Transportation Service Worldwide
        </h1>
        {/*   FORM */}
        <div
          className="hidden md:block  absolute right-4 top-10 lg:top-2 max-w-[500px] w-[450px] shadow-lg bg-white pb-2 rounded-sm"
          style={{
            boxShadow: "0 12px 28px  #64666b",
          }}
        >
          <div className="flex justify-between">
            <h3
              className={`text-[20px] font-semibold flex-1 p-3 ${
                showOneWay && "bg-[#F0F2F7]"
              } cursor-pointer`}
              onClick={showOneWayHandler}
            >
              One way
            </h3>
            <h3
              className={`text-[20px] font-semibold flex-1 p-3 ${
                showByHour && "bg-[#F0F2F7]"
              } cursor-pointer`}
              onClick={showByHourHandler}
            >
              By the hour
            </h3>
          </div>
          <div className="flex flex-col space-y-2 px-4 mt-2">
            {/*  text field */}
            <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
              <div className="flex gap-2">
                {" "}
                <FaLocationDot className="text-[#64666B] text-2xl self-end" />
                <div>
                  {/* 64666B */}
                  <p>From</p>

                  <input
                    type="text"
                    className="appearance-none border-none bg-transparent focus:outline-none flex-1"
                    placeholder="Address,airport,hotel,..."
                  />
                </div>
              </div>
            </div>
            {showByHour && (
              <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
                <div className="flex gap-2">
                  {" "}
                  <FaLocationDot className="text-[#64666B] text-2xl self-end" />
                  <div>
                    {/* 64666B */}
                    <p>To</p>

                    <input
                      type="text"
                      className="appearance-none border-none bg-transparent focus:outline-none flex-1"
                      placeholder="Address,airport,hotel,..."
                    />
                  </div>
                </div>
              </div>
            )}
            {showOneWay && (
              <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
                <div className="flex gap-2">
                  {" "}
                  <IoTime className="text-[#64666B] text-2xl self-end" />
                  <div className="flex-1">
                    {/* 64666B */}
                    <p>Duration</p>

                    <input
                      type="time"
                      className="appearance-none border-none bg-transparent focus:outline-none flex-1 w-full"
                      placeholder="Select Time"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
              <div className="flex gap-2 ">
                {" "}
                <MdDateRange className="text-[#64666B] text-2xl self-end" />
                <div className="flex-1 ">
                  {/* 64666B */}
                  <p>Date</p>

                  <input
                    type="date"
                    className="appearance-none border-none bg-transparent  focus:outline-none flex-1 w-full"
                    placeholder="Select Date"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
              <div className="flex gap-2">
                {" "}
                <IoTime className="text-[#64666B] text-2xl self-end" />
                <div className="flex-1">
                  {/* 64666B */}
                  <p>Time</p>

                  <input
                    type="time"
                    className="appearance-none border-none bg-transparent focus:outline-none flex-1 w-full"
                    placeholder="Select Time"
                  />
                </div>
              </div>
            </div>
            {/*   Content before button */}
            {showByHour && (
              <p className="text-[14px] text-center text-[#64666B] font-semibold">
                Chauffeur will wait 15 minutes free of charge.
              </p>
            )}
            <button className="btn-gradient rounded-md text-center font-semibold py-3">
              Search{" "}
            </button>
          </div>
        </div>
      </Wrapper>

      <picture>
        <source
          srcSet={heroMobile}
          media="(max-width: 320px)"
          type="image/webp"
        />
        <source
          srcSet={heroTablet}
          media="(max-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet={heroLaptop}
          media="(max-width: 1024px)"
          type="image/webp"
        />
        <source
          srcSet={heroDesktop}
          media="(max-width: 1980px)"
          type="image/webp"
        />
        <source
          srcSet={heroFull}
          media="(min-width: 1980px)"
          type="image/webp"
        />
        <img
          src={hero}
          alt="A man arrives at his home, greeting his kids while his chauffeur unloads his luggage."
          className="object-cover object-center h-[370px] md:h-full"
        />
      </picture>
      {/*   FORM  Responsive On Mobile view*/}
      <div
        className=" md:hidden   shadow-lg bg-white pb-2"
        style={{
          boxShadow: "0 12px 28px  #fbfbfd ",
        }}
      >
        <div className="flex justify-between">
          <h3
            className={`text-[20px] font-semibold flex-1 p-3 ${
              showOneWay && "bg-[#F0F2F7]"
            } cursor-pointer`}
            onClick={showOneWayHandler}
          >
            One Way
          </h3>
          <h3
            className={`text-[20px] font-semibold flex-1 p-3 ${
              showByHour && "bg-[#F0F2F7]"
            } cursor-pointer`}
            onClick={showByHourHandler}
          >
            By the hour
          </h3>
        </div>
        <div className="flex flex-col space-y-2 px-4 mt-2">
          {/*  text field */}
          <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
            <div className="flex gap-2">
              {" "}
              <FaLocationDot className="text-[#64666B] text-2xl self-end" />
              <div>
                {/* 64666B */}
                <p>From</p>

                <input
                  type="text"
                  className="appearance-none border-none bg-transparent focus:outline-none flex-1"
                  placeholder="Address,airport,hotel,..."
                />
              </div>
            </div>
          </div>
          {showOneWay && (
            <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
              <div className="flex gap-2">
                {" "}
                <FaLocationDot className="text-[#64666B] text-2xl self-end" />
                <div>
                  {/* 64666B */}
                  <p>To</p>

                  <input
                    type="text"
                    className="appearance-none border-none bg-transparent focus:outline-none flex-1"
                    placeholder="Address,airport,hotel,..."
                  />
                </div>
              </div>
            </div>
          )}
          {showByHour && (
            <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
              <div className="flex gap-2">
                {" "}
                <IoTime className="text-[#64666B] text-2xl self-end" />
                <div className="flex-1">
                  {/* 64666B */}
                  <p>Duration</p>

                  <input
                    type="time"
                    className="appearance-none border-none bg-transparent focus:outline-none flex-1 w-full"
                    placeholder="Select Time"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
            <div className="flex gap-2 ">
              {" "}
              <MdDateRange className="text-[#64666B] text-2xl self-end" />
              <div className="flex-1 ">
                {/* 64666B */}
                <p>Date</p>

                <input
                  type="date"
                  className="appearance-none border-none bg-transparent  focus:outline-none flex-1 w-full"
                  placeholder="Select Date"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#F0F2F7] rounded-md py-2 px-3">
            <div className="flex gap-2">
              {" "}
              <IoTime className="text-[#64666B] text-2xl self-end" />
              <div className="flex-1">
                {/* 64666B */}
                <p>Time</p>

                <input
                  type="time"
                  className="appearance-none border-none bg-transparent focus:outline-none flex-1 w-full"
                  placeholder="Select Time"
                />
              </div>
            </div>
          </div>
          {/*   Content before button */}
          {showByHour && (
            <p className="text-[14px] text-center text-[#64666B] font-semibold">
              Chauffeur will wait 15 minutes free of charge.
            </p>
          )}
          <button className="btn-gradient rounded-md text-center font-semibold py-3">
            Search{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimoHero;
