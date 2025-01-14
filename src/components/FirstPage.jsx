import React from "react";
import image1 from "../components/back.jpg";
import { NavLink } from "react-router-dom";
function FirstPage() {
  return (
    <div>
      <div>
        <div className="     flex justify-center ">
          <img
            className=" fixed md:w-5/6 mt-12 md:mt-0 md:h-5/6 -z-10  opacity-30"
            src={image1}
            alt="image"
          />
          <div className="  w-5/6 flex flex-col md:gap-20 gap-12 items-center md:mt-20 mt-28">
            <h1 className=" font-extrabold text-green-800 md:text-7xl text-center text-4xl">
              Keep The Details Alive
            </h1>
            <h1 className=" text-center  text-3xl font-extrabold text-green-500 md:text-5xl">
              Fill The Form And Save The Students Data
            </h1>
            <div className="md:mt-6 mt-20">
              <NavLink to="Form">
                <button class="relative  flex items-center px-6 py-3 overflow-hidden font-medium transition-all  bg-green-800 rounded-md group">
                  <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-500 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-500 rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-500 rounded-md group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Register
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
