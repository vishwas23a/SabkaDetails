import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className=" h-14 bg-gray-200 w-full flex justify-between  items-center text-gray-700 ">
      <div>
        <h1 className="ml-10">SabkaDetails</h1>
      </div>
      <div>
        <ul className="flex gap-20 mr-10 ">
         <NavLink to="/" > <li className="transition ease-in-out delay-50 hover:-translate-y-1 hover:text-black hover:scale-110">Home</li></NavLink>
         <NavLink to="Form"> <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-black hover:scale-110">Form</li></NavLink>
        <NavLink to="Details"><li className="transition ease-in-out delay-50 hover:-translate-y-1 text-black hover:scale-110">Card</li></NavLink>  
        <NavLink to="AllData"> <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-black hover:scale-110">All Students</li></NavLink> 
        </ul>
      </div>
    </div>

    <Outlet/>
    </>
  );
}

export default Navbar;
