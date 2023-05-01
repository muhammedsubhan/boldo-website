import React from "react";
import image from "../icons/bigImg.png";
const Customers = () => {
  return (
    <>
      <div className="p-20">
        <div className="flex justify-center">
          <img src={image} alt="big img" />
        </div>

        <div className="flex justify-around items-center p-8">
          <h1 className="font-normal text-3xl w-96 leading-normal -ml-10">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="flex flex-col font-normal text-xl	gap-8 items-center  ">
            <span className="hover:underline hover:underline-offset-8">
              We connect our customers with the best?
              <i class="fa-solid fa-circle-arrow-down text-3xl text-blue-950 ml-12"></i>
            </span>
            <span className="hover:underline hover:underline-offset-8">
              Android research & development rockstar?
              <i class="fa-solid fa-circle-arrow-down text-3xl text-blue-950 ml-12"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
