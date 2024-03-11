import downloadFromApple from "../../../assets/Hero/appstore.png";
import downloadFromGoogle from "../../../assets/Hero/googleplay.png";
import mobile from "../../../assets/Signature/mobile.webp";
const SignatureDownload = () => {
  return (
    <div className="w-[1200px] max-w-[95vw] m-auto mt-[5rem]  pb-4 lg:pb-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-y-8 ">
        {/* Download Text */}
        <div className="lg:text-left text-center lg:order-1 order-2 lg:mt-[4rem]">
          <h3 className="text-3xl font-semibold">Download the app</h3>
          <div className=" flex flex-col gap-8 mt-4">
            <p className="mt-4 lg:max-w-lg">
              Easily book, change, or cancel rides on the go. Think of it as
              peace of mind in the palm of your hand.
            </p>
            {/* LOGOS ===> */}
            <div className=" flex gap-4 lg:justify-start justify-center">
              <img
                src={downloadFromApple}
                className="w-[119px] h-[34px] object-cover rounded-md shadow-lg"
                alt=""
              />
              <img
                src={downloadFromGoogle}
                className="w-[119px] h-[34px] object-cover rounded-md shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:order-2 order-1 lg:m-0 m-auto">
          <img
            src={mobile}
            className="object-contain lg:h-auto lg:w-full lg:max-w-[550px] lgmax-h-[687px]  w-full"
            alt="mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default SignatureDownload;
