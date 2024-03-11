import Wrapper from "../shared/Wrapper";
import Qr from "../../../assets/Hero/qr.svg";
// import downloadFromApple from "../../assets/Hero/download-from-apple.png";
import downloadFromApple from "../../../assets/Hero/appstore.png";
import downloadFromGoogle from "../../../assets/Hero/googleplay.png";

const Download = () => {
  return (
    <div className="bg-download  py-8">
      <Wrapper styles={"px-4"}>
        <h2 className="text-[#FBFBFD]  text-[44px] font-semibold text-center md:text-left">
          Chauffeurs at your fingertips
        </h2>
        <p className="text-[#FBFBFD] text-center md:text-left ">
          Download the Blacklane app to easily book safe, private rides while
          you&apos;re on the go.
        </p>
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <img src={Qr} alt="qr code" className="hidden md:block" />
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
        </div>
      </Wrapper>
    </div>
  );
};

export default Download;
