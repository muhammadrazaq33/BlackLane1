import React from "react";

const Service = [
  {
    id: 1,
    img: "./assets/images/web-app.svg",
    heading: "Book via app or web",
    text: "No requirement for phone or email inquiries. Enter details, view fixed price, and book easily. That straightforward.",
  },
  {
    id: 2,
    img: "./assets/images/car.svg",
    heading: "Your safe passage",
    text: "Travel assured with your safety as our top priority. Exemplary service includes rigorous health and cleaning standards.",
  },
  {
    id: 3,
    img: "./assets/images/reminder_svg.svg",
    heading: "Set your own schedule",
    text: "Schedule your pickup whenever you want, and leave departure boards and timetables in the rear-view mirror.",
  },
];
const AboutHourly = () => {
  return (
    <div className=" w-[1200px] max-w-[95vw] m-auto mt-[3.5rem]">
      {/*  */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10 ">
        {Service.map((curEle) => {
          const { id, img, heading, text } = curEle;
          return (
            <article
              key={id}
              className="flex flex-col gap-3 items-center shadow-sm sm:shadow-none py-12"
            >
              <div>
                {" "}
                <img src={img} alt="" />
              </div>
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

export default AboutHourly;
