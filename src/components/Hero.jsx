import React from "react";
import hero from "../icons/HeroGraphics.png";
import LogoSlider from "../pages/LogoSlider";
import logo from "../icons/Logo.png";
import Pie from "../icons/Pie.png";
const Hero = () => {
  const data = [
    {
      img: logo,
      title: "Boldo",
    },
    {
      img: Pie,
      title: "Presto",
    },
    {
      img: logo,
      title: "Boldo",
    },
    {
      img: Pie,
      title: "Presto",
    },
    {
      img: logo,
      title: "Boldo",
    },
    {
      img: Pie,
      title: "Presto",
    },
  ];

  return (
    <>
      <div className="flex justify-around p-10">
        <div className=" w-1/2 px-28 mt-6">
          <h3 className="text-5xl font-normal text-black leading-normal mb-6">
            Save time by building fast
            <br />
            with Boldo Template
          </h3>
          <p className="font-normal text-base text-gray-500 mb-10">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <button className="mr-6 font-semibold px-8 py-2 border-2 rounded-full hover:border-blue-950  text-white bg-blue-950 hover:bg-white hover:text-blue-950 transition-all ease-in-out">
            Buy template
          </button>
          <button className="px-8 py-2 font-semibold border-2 rounded-full border-blue-950  text-blue-950 bg-white hover:bg-blue-950 hover:text-white transition-all ease-in-out">
            Explore
          </button>
        </div>

        <div className="">
          <img src={hero} alt="hero banner" />
        </div>
      </div>

      <div className="flex justify-center items-center ">
        {data.map((item, index) => {
          return <LogoSlider key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default Hero;
