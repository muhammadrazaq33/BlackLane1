import Wrapper from "../shared/Wrapper";
import img1 from "../../../assets/Routes/new_york.jpg";
import img2 from "../../../assets/Routes/dubai.jpg";
import img3 from "../../../assets/Routes/paris.jpg";
import img4 from "../../../assets/Routes/london.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
const cards = [
  {
    img: img1,
    title: "New York",
    content: "11 routes to/from this city",
  },
  {
    img: img4,
    title: "London",
    content: "25 routes to/from this city",
  },
  {
    img: img3,
    title: "Paris",
    content: "13 routes to/from this city",
  },
  {
    img: img2,
    title: "Dubai",
    content: "7 routes to/from this city",
  },
];

const routes = [
  {
    from: "New York",
    to: "Philadelphia",
    time: "1h 50m",
    distance: "59 mi",
  },
  {
    from: "London",
    to: "Oxford",
    time: "1h 45m",
    distance: "96km",
  },
  {
    from: "Paris",
    to: "Reims",
    time: "2h 15m",
    distance: "145 km",
  },
  {
    from: "Dubai",
    to: "Abu Dhabi",
    time: "1h 15m",
    distance: "136 km",
  },
  {
    from: "Vancouver",
    to: "Whistler",
    time: "1h 36m",
    distance: "122 km",
  },
  {
    from: "Glasgow",
    to: "Edinburgh",
    time: "1h 38m",
    distance: "33 mi",
  },
  {
    from: "Zurich",
    to: "St. Moritz",
    time: "2h 50m",
    distance: "212 km",
  },
  {
    from: "Beijing",
    to: "Tianjin",
    time: "2h",
    distance: "151 km",
  },
];

const Routes = () => {
  return (
    <section className="bg-[#F0F2F7] py-8">
      <Wrapper styles={"px-4"}>
        <h2 className="text-[44px] text-center font-semibold">
          City to City routes
        </h2>
        <div className="flex flex-col space-y-4 md:space-y-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="text-[24px] text-[#181A1F] font-semibold">
                Top cities
              </h3>
              <span className="text-[#181A1F] font-semibold underline hover:no-underline">
                See all
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 custom-md:grid-cols-3 lg:grid-cols-3 custom-lg:grid-cols-4 gap-4">
              {cards.map((card, index) => {
                return (
                  <div
                    className="flex flex-col gap-4 bg-white rounded-md pb-2"
                    key={index}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="rounded-t-md"
                    />
                    <div className="px-4">
                      <h4 className="text-[#181A1F]">{card.title}</h4>
                      <p className="text-[14px] text-[#64666B] font-normal">
                        {card.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="text-[24px] text-[#181A1F] font-semibold">
                Top routes
              </h3>
              <span className="text-[#181A1F] font-semibold underline hover:no-underline">
                See all
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 custom-md:grid-cols-3 lg:grid-cols-3 custom-lg:grid-cols-4 gap-4">
              {routes.map((card, index) => {
                return (
                  <div
                    className="flex flex-col gap-2 bg-white rounded-md p-3"
                    key={index}
                  >
                    <div className="flex items-center gap-2 ">
                      <span className="text-[#181A1F] font-semibold">
                        {card.from}
                      </span>
                      <BiRightArrowAlt color="#181A1F" fontSize={"16px"} />
                      <span className="text-[#181A1F] font-semibold">
                        {card.to}
                      </span>
                    </div>
                    <div className="flex space-x-4">
                      <span className="text-[14px] text-[#64666B] font-normal">
                        {card.time}
                      </span>
                      <span className="text-[14px] text-[#64666B] font-normal">
                        {card.distance}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*  Last Box */}
          <div className="flex flex-col items-center space-y-4 md:flex-row  justify-between p-6  bg-white rounded-md">
            <div className="flex flex-col space-y-2">
              <h4 className="text-[#64666B] font-semibold">
                Have a route in mind?
              </h4>
              <span className="text-[14px] text-[#64666B] font-normal">
                Enter your pickup and drop-off locations to see the price.
              </span>
            </div>
            <button
              className="btn-gradient py-3 px-6 font-semibold text-[18px] text-[
#FBFBFD] rounded-md"
            >
              Book a city to city ride
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Routes;
