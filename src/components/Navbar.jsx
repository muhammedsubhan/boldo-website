import React from "react";
import logo from "../icons/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex p-14 justify-between items-center z-50">
        <div className="flex space-x-5 ml-14">
          <img src={logo} alt="logo" />
          <h1 className="text-blue-950 font-bold text-4xl">BOLDO</h1>
        </div>

        <div className="flex justify-end items-center pr-16 space-x-14 text-blue-950 font-semibold text-base">
          <p>Product</p>
          <p>Services</p>
          <p>About</p>
          <button className="px-8 py-2 border-2 rounded-full border-blue-950  text-blue-950 bg-gray hover:bg-blue-950 hover:text-white transition-all ease-in-out">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
