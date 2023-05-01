import React from "react";
import logo from "../icons/Logo.png";
import Links from "../pages/Links";
const Footer = () => {
  const data = [
    {
      title: "Landings",
      link1: "Home",
      link2: "Products",
      link3: "Services",
    },
    {
      title: "Company",
      link1: "Home",
      link2: "Careers",
      link3: "Services",
    },
    {
      title: "Resources",
      link1: "Blog",
      link2: "Products",
      link3: "Services",
    },
  ];
  return (
    <>
      <div className="footer">
        <div className="flex items-center justify-center ">
          <div className="text-center bg-blue-950 h-96 w-[80%] p-20 rounded-lg px-48 ">
            <h1 className="mb-16 font-normal text-5xl text-white leading-normal">
              An enterprise template to ramp up your company website
            </h1>
            <input
              className="input"
              type="text"
              placeholder="your email address"
            />
            <button className=" ml-12 font-bold px-10 py-5 border-2 border-blue-950 rounded-full hover:border-green-300  text-blue-950 bg-green-300 hover:bg-white hover:text-green-300 transition-all ease-in-out ">
              Start Now
            </button>
          </div>
        </div>
        <div className="px-32 mt-20 flex items-center">
          <div className=" w-72 ml-6">
            <div className="flex items-center gap-2 mb-10">
              <img src={logo} alt="logo" />
              <h1 className="font-bold text-4xl text-blue-950">Boldo</h1>
            </div>
            <div className="flex items-end flex-col ">
              <small className="font-normal font-base text-gray-500 mb-10">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </small>
            </div>
            <small className="font-normal font-base text-gray-500">
              All rights reserved.
            </small>
          </div>
          <div className="flex items-center justify-around w-full p-16">
            {data.map((item, index) => {
              return <Links key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
