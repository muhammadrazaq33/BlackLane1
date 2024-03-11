import Wrapper from "../shared/Wrapper";
import logo from "../../../assets/logo.svg";
import { FaChevronDown } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { RiAccountCircleFill } from "react-icons/ri";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
const services = [
  { name: "City to City rides", path: "/city-to-city" },
  // { name: "Chaffeur hailing", path: "#" },
  { name: "Airport Transfers", path: "/airportTransfer" },
  { name: "Hourly hire", path: "/hourlyHire" },
  { name: "Chaffeur Service", path: "/choufferservices" },
  { name: "Limousine Service", path: "/limousineservices" },
];
const business = [
  "Overview",
  "Corporations",
  "Travel agencies",
  "Strategic partnership",
];
const languages = [
  "English",
  "Duetsch",
  "Francis",
  "日本語",
  "Espanol",
  "中国語",
];

const Navbar = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showBusinessMenu, setShowBusinessMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  //    For Mobile Navbar
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };
  const toggleBusinessMenu = () => {
    setShowBusinessMenu(!showBusinessMenu);
  };
  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };
  //     Mobile Menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div style={{ 
      boxShadow:'0 2px 10px 0 rgba(0,0,0,.05),0 -1px 10px 0 rgba(0,0,0,.01)'
     }}>

    <Wrapper styles={"lg:px-4"} >
      <nav className="flex items-center justify-between px-4 lg:px-0 h-[70px] ">
        <div className="py-4">
          <a href="/">
          <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="hidden lg:flex  space-x-4 ">
          {" "}
          <ul className="flex items-center space-x-4   justify-self-end py-4">
            <li className="relative">
              <div
                className="flex justify-between items-center font-semibold gap-2 cursor-pointer"
                onClick={toggleServicesMenu}
              >
                <span className="hover:underline transition-all hover:cursor-pointer">
                  Our services{" "}
                </span>
                <FaChevronDown
                  fontSize={"10px"}
                  className={`${showServicesMenu ? "rotate-180 " : "rotate-0"}`}
                />
              </div>
              {showServicesMenu && (
                <ul
                  className="absolute top-full  w-[170px] right-2 mt-1 py-4  bg-white rounded shadow-lg z-10"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  {/* DropDown */}
                  {services.map((service, index) => (
                    <li
                      className="px-4 py-2 transition-all font-semibold hover:bg-[#F0F2F7] cursor-pointer"
                      key={index}
                    >
                      <a href={service.path}>
                      {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="relative">
              <div
                className="flex justify-between items-center font-semibold gap-2 cursor-pointer"
                onClick={toggleBusinessMenu}
              >
                <span className="hover:underline transition-all hover:cursor-pointer">
                  For Business{" "}
                </span>
                <FaChevronDown
                  fontSize={"10px"}
                  className={`${showBusinessMenu ? "rotate-180 " : "rotate-0"}`}
                />
              </div>
              {showBusinessMenu && (
                <ul
                  className="absolute top-full  w-[170px] right-2 mt-1 py-4  bg-white rounded shadow-lg z-10"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  {/* DropDown */}
                  {business.map((service, index) => (
                    <li
                      className="px-4 py-2 transition-all font-semibold hover:bg-[#F0F2F7] cursor-pointer"
                      key={index}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="flex justify-between items-center font-semibold ">
              <a>For chaffeurs</a>
            </li>
            <li className="flex justify-between items-center font-semibold ">
              <a>Help</a>
            </li>

            <li className="relative">
              <div
                className="flex justify-between items-center font-semibold gap-2 cursor-pointer"
                onClick={toggleLanguageMenu}
              >
                <TiWorld />
                <span className="hover:underline transition-all hover:cursor-pointer">
                  English{" "}
                </span>
              </div>
              {showLanguageMenu && (
                <ul
                  className="absolute top-full  w-[150px] right-2 mt-1 py-4  bg-white rounded shadow-lg z-10"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  {/* DropDown */}
                  {languages.map((service, index) => (
                    <li
                      className="px-4 py-2 transition-all font-semibold hover:bg-[#F0F2F7] cursor-pointer"
                      key={index}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <button className="flex  items-center font-semibold flex-1 gap-[3px] bg-[#F0F2F7] p-4">
            <RiAccountCircleFill />
            <a>Sign in </a>
          </button>
        </div>
        {/*    Humburger */}
        <div className="lg:hidden">
          {showMobileMenu ? (
            <IoMdCloseCircle fontSize={"24px"} onClick={toggleMobileMenu} />
          ) : (
            <IoMenuOutline fontSize={"24px"} onClick={toggleMobileMenu} />
          )}
        </div>
      </nav>
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="flex lg:hidden flex-col ">
          <button className="flex  px-4 py-2 items-center font-semibold gap-[2px] bg-[#F0F2F7] ">
            <RiAccountCircleFill />
            <a>Sign in </a>
          </button>
          <ul className="flex flex-col px-4  ">
            <li className="relative">
              <div
                className="flex py-2 items-center font-semibold gap-2 cursor-pointer"
                onClick={toggleServicesMenu}
              >
                <span className="hover:underline transition-all hover:cursor-pointer">
                  Our services{" "}
                </span>
                <FaChevronDown
                  fontSize={"8px"}
                  className={`${showServicesMenu ? "rotate-180 " : "rotate-0"}`}
                />
              </div>
            </li>
            <li>
              {showServicesMenu && (
                <ul className="  mt-1 p-2  bg-white rounded border">
                  {/* DropDown */}
                  {services.map((service, index) => (
                    <li
                      className="px-4 py-2 transition-all font-semibold hover:bg-[#F0F2F7] cursor-pointer"
                      key={index}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative">
              <div
                className="flex py-2 items-center font-semibold gap-2 cursor-pointer"
                onClick={toggleBusinessMenu}
              >
                <span className="hover:underline transition-all hover:cursor-pointer">
                  For Business{" "}
                </span>
                <FaChevronDown
                  fontSize={"8px"}
                  className={`${showBusinessMenu ? "rotate-180 " : "rotate-0"}`}
                />
              </div>
            </li>
            <li>
              {showBusinessMenu && (
                <ul className="  mt-1 p-2  bg-white rounded border">
                  {/* DropDown */}
                  {business.map((service, index) => (
                    <li
                      className="px-4 py-2 transition-all font-semibold hover:bg-[#F0F2F7] cursor-pointer"
                      key={index}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="flex  py-2 justify-between items-center font-semibold ">
              <a>For chaffeurs</a>
            </li>
            <li className="flex py-2 justify-between items-center font-semibold ">
              <a>Help</a>
            </li>

            <li className="relative">
              <div
                className="flex py-2 items-center font-semibold gap-2 cursor-pointer"
                onClick={toggleLanguageMenu}
              >
                <TiWorld />
                <span className="hover:underline transition-all hover:cursor-pointer">
                  English{" "}
                </span>
              </div>
            </li>
            <li>
              {showLanguageMenu && (
                <ul className="  mt-1 p-2  bg-white rounded border">
                  {/* DropDown */}
                  {languages.map((service, index) => (
                    <li
                      className="px-4 py-2 transition-all font-semibold hover:bg-[#F0F2F7] cursor-pointer"
                      key={index}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </Wrapper>
    </div>

  );
};

export default Navbar;
