import React from "react";

const Service = [
  {
    id: 1,
    img: "./assets/images/Dollar_svg.svg",
    heading: "Competitive rates",
    text: "Access high-quality service at prices tailored to your distance, ensuring fairness for both you and our chauffeurs.",
  },
  {
    id: 2,
    img: "./assets/images/Airoplan_svg.svg",
    heading: "Seamless airport travel",
    text: "Unwind with a complimentary hour of relaxation, including monitoring your flight status.",
  },
  {
    id: 3,
    img: "./assets/images/reminder_svg.svg",
    heading: "Travel on your terms",
    text: "Maintain control over your schedule effortlessly. Cancel or modify any ride with ease, ensuring flexibility on your end.",
  },
];
const Services = () => {
  return (
    <div className=" w-[1200px] max-w-[95vw] m-auto mt-[3.5rem]">
      {/*  */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10">
        {Service.map((curEle) => {
          const { id, img, heading, text } = curEle;
          return (
            <article
              key={id}
              className="flex flex-col gap-5 items-center shadow-sm sm:shadow-none py-12"
            >
              <img src={img} alt="" />
              <h1 className="text-[24px] font-semibold text-center">
                {heading}
              </h1>
              <p className="text-center max-w-[20rem] text-[20px] text-[#181A1F] ">
                {text}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
