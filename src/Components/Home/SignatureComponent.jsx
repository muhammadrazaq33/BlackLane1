import React from 'react'
import Wrapper from '../CityToCIty/shared/Wrapper'
import bgMobile from "../../../public/assets/images/bg-mobile.webp";
import bgTablet from "../../../public/assets/images/bg-tablet.webp";
import bgLaptop from "../../../public/assets/images/bg-laptop.webp";
import bgFull from "../../../public/assets/images/bg-full.webp";
import comma from "../../../public/assets/images/comma.svg";
import signature from "../../../public/assets/images/signature.svg";

const SignatureComponent = () => {
  return (
    <section className="relative mt-[4rem]">
    <Wrapper styles={"px-4 relative"}>
      <div className="btn-gradient w-[90%] md:w-[370px] md:max-w-[370px] custom-lg:max-w-[650px] custom-lg:w-[630px]  px-8 py-4 md:left-10 top-[320px]  md:top-9 absolute">
        <img
          src={comma}
          alt="comma"
          className=" absolute top-0 -left-3 md:-left-5 lg:h-[40px] md:h-[30px] h-[24px] md:w-[30px] w-[24px] lg:w-[40px]"
        />
        <h2 className="sm:text-[38px] text-[24px] custom-lg:text-[44px] font-semibold sm:leading-[2.7rem] ">
          I&apos;M MORE THAN
          <br /> A CHAUFFEUR,
        </h2>
        <p className="sm:text-[24px] text-[14px] font-semibold sm:mt-3 mt-1">
          I&apos;M YOUR ALTERNATIVE <br /> TO AIRPLANE MODE.
        </p>
        <div className="absolute -bottom-20  custom-lg:-bottom-10 right-0 md:-right-8">
          <img
            src='/assets/images/Ben_T.svg'
            alt="signature"
            className="w-[130px] md:w-[200px]"
          />
          <p>BLACKLANE CHAUFFEUR</p>
        </div>
      </div>
    </Wrapper>
    <picture>
      <source
        srcSet={bgMobile}
        media="(max-width: 767px)"
        type="image/webp"
      />
      <source
        srcSet={bgTablet}
        media="(max-width: 1279px)"
        type="image/webp"
      />
      <source
        srcSet={bgLaptop}
        media="(min-width: 1280px)"
        type="image/webp"
      />

      <img
        src={bgFull}
        alt="A man arrives at his home, greeting his kids while his chauffeur unloads his luggage."
        className="md:object-cover  md:object-center h-[570px] md:h-full w-screen"
      />
    </picture>
  </section>
  )
}

export default SignatureComponent