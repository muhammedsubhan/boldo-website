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
      <div className="flex p-14 justify-between items-center bg-green-300">
        <Link to="/">
          <div className="flex space-x-5 ml-14">
            <img src={logo} alt="logo" />
            <h1 className="text-blue-950 font-bold text-4xl">BOLDO</h1>
          </div>
        </Link>

        <div className="flex justify-end items-center pr-16 space-x-14 text-blue-950 font-semibold text-base">
          <p>Blog</p>
          <p>Services</p>
          <Link to="about">About</Link>
          <button className="px-8 py-2 border-2 rounded-full border-blue-950  text-blue-950 bg-gray hover:bg-blue-950 hover:text-white transition-all ease-in-out">
            Log In
          </button>
        </div>
      </div>

      <div>
        <div className="bg-green-300 h-80 flex p-10 justify-between">
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
