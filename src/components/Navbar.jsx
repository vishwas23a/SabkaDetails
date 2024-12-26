import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

function Navbar() {
  const [visibleMenu,setVisibleMenu]=useState(false);
  const handleMenu=()=>{
    setVisibleMenu(!visibleMenu);
  }
  return (
    <>
      <div className=" h-16  w-full flex md:justify-between justify-center items-center   ">
      <div className=" md:hidden absolute left-10 items-center "> 
            
            <button onClick={handleMenu}  className="md:hidden ">
            {visibleMenu?<IoCloseSharp className="h-10 w-10"/>:<IoMenuSharp className="h-10 w-10"/>}
            </button>
            </div>
        <div>

          <h1 className="ml-10   w-full font-bold text-2xl text-green-800">
            SabkaDetails
          </h1>
        </div>
        <div>
          <ul className="md:flex hidden  gap-20 mr-10   ">
            <NavLink to="/">
              {" "}
              <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-green-800 hover:text-green-500 font-semibold text-xl hover:scale-110">
                Home
              </li>
            </NavLink>
            <NavLink to="Form">
              {" "}
              <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-green-800 hover:text-green-500 font-semibold text-xl hover:scale-110">
                Form
              </li>
            </NavLink>
            <NavLink to="Details">
              <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-green-800 hover:text-green-500 font-semibold text-xl hover:scale-110">
                Card
              </li>
            </NavLink>
            <NavLink to="AllData">
              {" "}
              <li className="transition ease-in-out delay-50 hover:-translate-y-1 text-green-800 hover:text-green-500 font-semibold text-xl hover:scale-110">
                All Students
              </li>
            </NavLink>
          </ul>
         
        </div>

        {/* for screen size less than 768px */}
     

         
        </div>
        <div
        className={` w-64 fixed  h-screen bg-gray-100 opacity-90 ${
        visibleMenu ? 'block' : 'hidden'
        } md:hidden`}
      >
        <ul className="mt-2 ">
          <NavLink to="/">
            <li className="p-4 text-xl text-green-800 hover:bg-green-200">Home</li>
          </NavLink>
          <NavLink to="Form">
            <li className="p-4 text-xl text-green-800 hover:bg-green-200">Form</li>
          </NavLink>
          <NavLink to="Details">
            <li className="p-4 text-xl text-green-800 hover:bg-green-200">Card</li>
          </NavLink>
          <NavLink to="AllData">
            <li className="p-4 text-xl text-green-800 hover:bg-green-200">
              All Students
            </li>
          </NavLink>
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
