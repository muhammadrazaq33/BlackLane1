import React from "react";

export const InstructionComponent = () => {
  const data = [
    {
      id: 1,
      img: "/assets/images/shield-check.svg",
      name: "Safety first",
      descrip:
        "Travel assured knowing your safety is our top priority. Stringent health and cleaning standards complete our unparalleled service.",
    },
    {
      id: 2,
      img: "/assets/images/car.svg",
      name: "Private travel solutions",
      descrip:
        "Explore your comprehensive travel hub: extended journeys, single or round trips, hourly bookings, airport shuttles, and beyond.",
    },
    {
      id: 3,
      img: "/assets/images/leaf.svg",
      name: "Sustainable travel",
      descrip:
        "Relax knowing that all ride emissions are compensated for, as part of our pioneering global carbon offset initiative—the first of its kind in the industry.",
    },
  ];
  return (
    <div className="py-[40px] bg-[#fff]">
      <div className="container mx-auto px-[16px]">
        <div className="grid grid-cols-12">
          {data.map((item) => (
            <div key={item.id} className="col-span-12 md:col-span-4 px-[40px]">
              <div className="text-center">
                <div className="flex flex-col items-center gap-4">
                  <img src={item.img} alt="" />
                  <h2 className="text-[#181a1f] font-bold text-[24px]">
                    {item.name}
                  </h2>
                  <p className="text-[#181a1f] font-normal text-[14px] max-w-[300px]">
                    {item.descrip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
