import React from "react";
import profile1 from "../icons/profile1.png";
import profile2 from "../icons/profile2.png";
import profileChart1 from "../icons/profileChart1.png";
import profileChart2 from "../icons/profileChart2.png";

const ServicesSec = () => {
  return (
    <>
      <div className="p-20 mb-20">
        {/* content A */}
        <div className="flex justify-evenly items-center">
          <div className="relative w-1/2">
            <img src={profile1} alt="profile" />
            <img
              src={profileChart1}
              alt="profile chart"
              className="z-50 absolute top-64 left-44 shadow-md"
            />
          </div>
          <div className="flex flex-col w-1/2 p-20 px-24">
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
        {/* content B */}
        <div className="flex justify-evenly items-center flex-row-reverse mt-10">
          <div className="relative w-1/2 px-32">
            <img src={profile2} alt="profile" />
            <img
              src={profileChart2}
              alt="profile chart"
              className="z-50 absolute top-64 left-60 shadow-md"
            />
          </div>
          <div className="flex flex-col w-1/2 p-20 px-24 hover ">
            <h1 className="font-normal text-4xl mb-10 mt-20">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h1>
            <span className="hover-i mb-6 font-normal text-xl flex items-center hover:bg-blue-950 hover:text-white py-4 shadow-md px-4 rounded">
              <i class="fa-solid fa-leaf mr-4 text-3xl text-blue-950"></i>
              We connect our customers with the best
            </span>
            <span className="hover-i mb-6 font-normal text-xl flex items-center hover:bg-blue-950 hover:text-white py-4 shadow-md px-4 rounded">
              <i class="fa-solid fa-eye mr-4 text-3xl text-blue-950 "></i>
              Advisor success customer launch party.
            </span>
            <span className="hover-i mb-6 font-normal text-xl flex items-center hover:bg-blue-950 hover:text-white py-4 shadow-md px-4 rounded">
              <i class="fa-solid fa-moon mr-4 text-3xl text-blue-950"></i>
              Business-to-consumer long tail.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSec;
