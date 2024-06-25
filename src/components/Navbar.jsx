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
         <NavLink to="/"> <li>Home</li></NavLink>
         <NavLink to="Form"> <li>Form</li></NavLink>
        <NavLink to="Details"><li>Card</li></NavLink>  
        <NavLink to="AllData"> <li>All Students</li></NavLink> 
        </ul>
      </div>
    </div>

    <Outlet/>
    </>
  );
}

export default Navbar;
