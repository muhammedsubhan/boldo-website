import React from "react";
import profile1 from "../icons/profile1.png";
import profileChart1 from "../icons/profileChart1.png";

const ServicesSecComp = ({ data }) => {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <div className="relative">
          <img src={profile1} alt="profile" />
          <img
            src={profileChart1}
            alt="profile chart"
            className="z-50 absolute top-64 left-44 shadow-md"
          />
        </div>
        <div className="flex flex-col w-1/2 border-2 p-20 px-48 ">
          <h1 className="font-normal text-4xl mb-10">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <span className="mb-4 font-normal text-xl flex items-center">
            <i class="fa-solid fa-circle-check mr-4 text-3xl text-blue-950"></i>
            We connect our customers with the best
          </span>
          <span className="mb-4 font-normal text-xl flex items-center">
            <i class="fa-solid fa-circle-check mr-4 text-3xl text-blue-950"></i>
            Advisor success customer launch party.
          </span>
          <span className="mb-4 font-normal text-xl flex items-center">
            <i class="fa-solid fa-circle-check mr-4 text-3xl text-blue-950"></i>
            Business-to-consumer long tail.
          </span>

          <button className="font-bold px-8 py-5 border-2 rounded-full hover:border-blue-950  text-white bg-blue-950 hover:bg-white hover:text-blue-950 transition-all ease-in-out mt-10 w-48">
            Start Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ServicesSecComp;
