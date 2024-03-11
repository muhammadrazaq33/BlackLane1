import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className=" w-full h-full lg:hidden flex flex-col gap-4">
      <NavLink to={"/airportTransfer"}>
        <p className="text-[1rem]  font font-bold">Airport transfers</p>
      </NavLink>
      <NavLink to={"/hourlyHire"}>
        <p className="text-[1rem]  font font-bold">Hourly hire</p>
      </NavLink>{" "}
      <NavLink to={"/choufferservices"}>
        <p className="text-[1rem]  font font-bold">Chauffeur services</p>
      </NavLink>{" "}
      <NavLink to={"/limousineservices"}>
        <p className="text-[1rem]  font font-bold">Limousine services</p>
      </NavLink>
    </div>
  );
};

export default Links;
