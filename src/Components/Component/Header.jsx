import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import Links from "./Links";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="shadow-sm py-2 w-[1200px] max-w-[93vw] m-auto">
      <div className="flex items-center justify-between max-w-[1200px] m-auto">
        <h1 className="text-[2rem] font-bold">BLACKLANE</h1>
        {/* links ===== */}
        <div className="lg:flex hidden items-center  justify-between gap-5">
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
        {/* MENu =====> */}
        <button onClick={() => setMenu(!false)} className="lg:hidden flex">
          <TiThMenu />
        </button>
      </div>
      {menu && <Links />}
    </nav>
  );
};
