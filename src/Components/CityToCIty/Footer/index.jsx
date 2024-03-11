import Wrapper from "../shared/Wrapper";
import logo from "../../../assets/footer-logo.svg";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import downloadFromApple from "../../../assets/Hero/appstore.png";
import downloadFromGoogle from "../../../assets/Hero/googleplay.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoTiktok } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const links = [
  {
    title: "Company",
    content: [
      "About Blacklane",
      "Career",
      "Press",
      "Blog",
      "Green initiatives",
      " Become a chauffeur partner",
      "Influencers",
    ],
  },
  {
    title: "Blacklane for Business",
    content: [
      "Overview",
      "Corporations",
      "Travel agencies",
      "Strategic partnerships",
    ],
  },
  {
    title: "Top cities",
    content: [
      "New York",
      "London",
      "Berlin",
      "Los Angeles",
      "Paris",
      "All cities",
    ],
  },
  {
    title: "Explore",
    content: [
      "City-to-city rides",
      "Limousine service",
      "Chauffeur service",
      "Private car service",
      "Ground transportation",
      "Airport transfer",
      "All countries",
    ],
  },
  {
    title: "City to City rides",
    badge: true,
    content: [
      "New York - East Hampton",
      "Los Angeles - San Diego",
      "Miami - Palm Beach",
      "London - Bristol",
      "Dubai - Abu Dhabi",
      "Paris - Reims",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black py-12 md:py-16 ">
      <Wrapper styles={"px-4 flex flex-col space-y-4"}>
        {/* Top footer */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between pb-4 border-b-[1px] border-solid border-[#313338]">
            <img
              src={logo}
              alt="footer-logo"
              className="w-[150px] md:w-[200px]"
            />
            <span className="flex gap-2 items-center">
              <BsFillQuestionCircleFill className="text-white " />
              <a className="text-[#B0B2B7] underline transition-all hover:no-underline cursor-pointer">
                Help
              </a>
            </span>
          </div>
          {/* <div className="flex space-x-2 pb-4 border-b-[1px] border-solid border-[#313338]">
            <img
              src={downloadFromApple}
              alt="download from apple"
              className="w-[119px] h-[34px] object-cover rounded-md border-[1px] border-solid border-white self-end"
            />
            <img
              src={downloadFromGoogle}
              alt="download from google"
              className="w-[119px] h-[34px] object-cover rounded-md border-[1px] border-solid border-white self-end"
            />
          </div> */}
        </div>
        {/*  bottom footer */}
        <div className="flex flex-col space-y-2 ">
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  items-start gap-4 border-b-[1px] border-solid border-[#313338] pt-4 pb-12">
            {links.map((link, key) => (
              <div className="flex flex-col space-y-4" key={key}>
                <div className="flex gap-2">
                  <h4 className="text-[#FBFBFD] font-semibold">{link.title}</h4>
                  {link.badge && (
                    <span className="bg-[#E3E5EA] text-[#181A1F] text-[14px] font-semibold py-[2px] px-[4px] rounded-md">
                      NEW
                    </span>
                  )}
                </div>
                {link.content.map((item, i) => (
                  <a
                    className="text-[#b0b2b7] transition-all hover:text-white hover:underline font-normal cursor-pointer"
                    key={i}
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between py-4 gap-6">
            <div className="flex flex-col-reverse gap-y-4  md:flex-row md:space-x-6 lg:space-x-10">
              <h5 className="text-[#FBFBFD] font-medium">
                © 2024 Blacklane GmbH
              </h5>
              <a className="text-[#b0b2b7] transition-all hover:text-white hover:underline font-normal cursor-pointer">
                Terms
              </a>
              <a className="text-[#b0b2b7] transition-all hover:text-white hover:underline font-normal cursor-pointer">
                Privacy policy
              </a>
              <a className="text-[#b0b2b7] transition-all hover:text-white hover:underline font-normal cursor-pointer">
                Legal notice
              </a>
              <a className="text-[#b0b2b7] transition-all hover:text-white hover:underline font-normal cursor-pointer">
                Accessibility
              </a>
            </div>
            <div className="flex space-x-6  border-b-[1px] border-solid border-[#313338] md:border-none pb-6 md:pb-0">
              <FaLinkedin className="text-[#b0b2b7]  font-normal cursor-pointer text-[20px]" />
              <FaInstagram className="text-[#b0b2b7]  font-normal cursor-pointer text-[20px]" />
              <FaFacebookF className="text-[#b0b2b7]  font-normal cursor-pointer text-[20px]" />
              <BiLogoTiktok className="text-[#b0b2b7]  font-normal cursor-pointer text-[20px]" />
              <FaYoutube className="text-[#b0b2b7]  font-normal cursor-pointer text-[20px]" />
              <BsTwitterX className="text-[#b0b2b7]  font-normal cursor-pointer text-[20px]" />
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
