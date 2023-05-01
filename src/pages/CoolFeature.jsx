import React from "react";

const CoolFeature = ({ data }) => {
  return (
    <>
      <div className="mt-10">
        <img className="h-64" src={data.img} alt="feature icon" />
        <div className="py-4">
          <h3 className="font-normal text-2xl text-white mb-4">{data.title}</h3>
          <a
            href="#/"
            className=" font-bold text-xl	text-white hover:underline underline-offset-8"
          >
            Explore Page
            <span className="ml-3">
              <i className="fa-solid fa-arrow-right "></i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default CoolFeature;
