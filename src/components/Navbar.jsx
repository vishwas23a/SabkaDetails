import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className=" h-14 bg-[#222629] w-full flex justify-between  items-center text-[#86C232] ">
      <div>
        <h1 className="ml-10 text-[#86C232]">SabkaDetails</h1>
      </div>
      <div>
        <ul className="flex gap-20 mr-10 ">
         <NavLink to="/" > <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-[#86C232] hover:scale-110">Home</li></NavLink>
         <NavLink to="Form"> <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-[#86C232] hover:scale-110">Form</li></NavLink>
        <NavLink to="Details"><li className="transition ease-in-out delay-50 hover:-translate-y-1 text-[#86C232] hover:scale-110">Card</li></NavLink>  
        <NavLink to="AllData"> <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-[#86C232] hover:scale-110">All Students</li></NavLink> 
        </ul>
      </div>
    </div>

    <Outlet/>
    </>
  );
}

export default Navbar;
