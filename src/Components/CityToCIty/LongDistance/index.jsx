import longDistance from "../../../assets/LongDistance/long-distance.webp";
import map from "../../../assets/LongDistance/map.webp";
import Wrapper from "../shared/Wrapper";
const points = [
  {
    heading: "Save time:",
    content:
      "Getting picked up and dropped off at your doorstep means you won't have to stand in lines or switch between different types of transportation.",
  },
  {
    heading: "Set the schedule:",
    content:
      " You get to pick the time for your pickup, and you have the flexibility to cancel your ride up to one hour before it's scheduled.",
  },
  {
    heading: "Enjoy peace of mind:",
    content:
      " Enjoy a comfortable journey in a high-quality vehicle, knowing that every ride is environmentally friendly with carbon offsetting.",
  },
  {
    heading: "Fixed fares:",
    content:
      "The cost for your trip remains consistent regardless of where within the city limits your journey begins or ends.",
  },
  {
    heading: "Competitive rates:",
    content:
      "Taxes and tolls are covered, and you pay per car rather than per seat. Plus, the only luggage restriction is the available trunk space.",
  },
  {
    heading: "Reliable pickups:",
    content:
      "With long distance car service you don’t have to worry about strikes, short-staffing, or crowds. ",
  },
  {
    heading: "Work en route:",
    content:
      " Heading on a business trip? Enjoy working comfortably from the back seat, as Wi-Fi is accessible at most locations.",
  },
];
const LongDistance = () => {
  return (
    <Wrapper styles={"px-4"}>
      <section className="py-8 md:py-12 flex flex-col space-y-12">
        <div className="flex gap-8 flex-col custom-md:flex-row">
          <img
            src={longDistance}
            alt="long distance"
            className="custom-md:w-1/2"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] text-[#181A1F] font-semibold">
              Long distance car service, the better way between cities{" "}
            </h2>
            <p className="leading-[24px] text-[#181A1F] font-normal">
              Say bye-bye to crowded buses and trains, and say hi to comfy rides
              with our private City to City transportation service.
            </p>
            <ul className="flex flex-col gap-3 list-disc px-4">
              {points.map(({ heading, content }, index) => (
                <li
                  className=" text-[#181A1F] font-normal leading-[28px]"
                  key={index}
                >
                  {" "}
                  <span className="font-medium">{heading}</span> {content}
                </li>
              ))}{" "}
            </ul>
          </div>
        </div>
        <div className="flex gap-8 flex-col custom-md:flex-row ">
          <img src={map} alt="Map" className="custom-md:w-1/2" />
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] text-[#181A1F] font-semibold">
              Global reach
            </h2>
            <p className="leading-[24px] text-[#181A1F] font-normal">
              With more than 180 routes spanning across Australia, Austria,
              Canada, China, France, Ireland, Japan, Malaysia, the Netherlands,
              Poland, Saudi Arabia, South Africa, Spain, Sweden, Taiwan,
              Thailand, Turkey, the United Arab Emirates, the United Kingdom,
              and the United States, long-distance travel has never been more
              convenient with our dependable chauffeur service. You can expect
              consistently excellent service whether you&apos;re traveling from{" "}
              <span className="underline font-semibold transition-all hover:no-underline ">
                New York to the Hamptons
              </span>
              ,
              <span className="underline font-semibold transition-all hover:no-underline ">
                London to Oxford
              </span>
              , or
              <span className="underline font-semibold transition-all hover:no-underline ">
                {" "}
                Dubai to Abu Dhabi.
              </span>
            </p>
            <p className="leading-[24px] text-[#181A1F] font-normal">
              Planning your winter vacation?
              <span className="underline font-semibold transition-all hover:no-underline ">
                Check out our new City-to-Slopes ski transfers
              </span>
              offering for all your ski season transport needs.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default LongDistance;
