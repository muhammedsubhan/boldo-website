import React from "react";
import { Link } from "react-router-dom";
import logo from "../icons/Logo.png";
import OurNumbers from "../pages/OurNumbers";
import OurStory from "../pages/OurStory";
import OurTeam from "../pages/OurTeam";
import OurBlog from "../pages/OurBlog";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="bg-green-300 h-80 flex p-10 justify-between w-[1500px] items-center rounded-lg">
          <div className="ml-16">
            <h1 className="font-normal text-xl text-blue-950 mb-4">About</h1>
            <h2 className="font-normal text-5xl text-blue-950 leading-normal">
              We love to make great things, things that matter.
            </h2>
          </div>
          <div className="p-16 w-3/2">
            <h4 className="px-28 text-base font-normal leading-normal">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </h4>
          </div>
        </div>
      </div>
      <OurNumbers />
      <OurStory />
      <OurTeam />
      <OurBlog />
    </>
  );
};

export default About;
