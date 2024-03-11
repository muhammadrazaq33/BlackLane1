import React from "react";

const events = [
  "Weddings",
  "Proms",
  "Birthday or anniversary celebrations",
  "Sporting events",
];
const LimoServices = () => {
  return (
    <div className="w-[1200px] max-w-[93vw] m-auto mt-[2.5rem] lg:mt-[5rem]">
      <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5">
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 order-2 md1:order-1">
          <h1 className="text-[28px] lg:text-[32px] font-semibold text-[#181A1F]">
            Limo service in the city
          </h1>
          <p className=" text-[16px] md1:max-w-[36rem] w-full text-[#181a1f]">
            Wherever your next journey takes you, settling into your
            accommodations signals the start of exploration. With Blacklane's
            limo service, a professional driver ensures seamless navigation
            through your new surroundings. Choose our hourly service for added
            flexibility, with a standby driver available in your area.No matter
            the occasion, Blacklane provides a touch of elegance and reliability
            to elevate your experience. From door-to-door service to
            personalized assistance, we prioritize your comfort and
            satisfaction. Count on us to make every journey exceptional. With a
            global presence in hundreds of cities, Blacklane is your trusted
            partner for enhancing events such as:
          </p>
          {/* EVenTs ==> */}
          <div>
            {events.map((eve, index) => {
              return (
                <article key={index} className="flex items-center gap-x-4">
                  <div className="w-1 h-1 rounded-3xl bg-black"></div>
                  <p className="text-[16px] font-semibold text-[#181a1f]">
                    {eve}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* IMAGE   ===>*/}
        <div className="order-1 md1:order-2">
          <img src="./assets/images/img-2.jpg" className=" md1:w-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LimoServices;
