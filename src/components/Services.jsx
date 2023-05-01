import React from "react";
import CoolFeature from "../pages/CoolFeature";
import feature1 from "../icons/feature1.png";
import feature2 from "../icons/feature2.png";
import feature3 from "../icons/feature3.png";

const Services = () => {
  const data = [
    {
      img: feature1,
      title: "Cool feature title",
    },

    {
      img: feature2,
      title: "Even cooler feature ",
    },

    {
      img: feature3,
      title: "Cool feature title",
    },
  ];

  return (
    <>
      <div className="bg-blue-950 p-20 h-min">
        <div className="text-center">
          <h3 className="mb-4 font-normal text-base text-white">
            Our Services
          </h3>
          <h1 className="font-normal text-5xl text-white px-72 leading-normal">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>

        <div className="flex justify-evenly items-center mx-20">
          {data.map((item, index) => {
            return <CoolFeature key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
