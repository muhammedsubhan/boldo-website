import React from "react";

const LogoSlider = ({ data }) => {
  return (
    <>
      <div className="flex justify-center items-center p-8  mt-2 mb-6">
        <div className="flex items-center gap-3 ">
          <img src={data.img} alt="Logo" />
          <h1 className="font-bold text-3xl text-blue-950 ">{data.title}</h1>
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
