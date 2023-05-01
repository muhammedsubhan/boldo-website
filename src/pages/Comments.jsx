import React from "react";

const Comments = ({ data }) => {
  return (
    <>
      <div>
        <div className="h-96 w-96 bg-white p-12 rounded-xl mt-10">
          <h2 className="font-normal text-2xl mb-2">{data.title}</h2>
          <div className="flex items-center mt-10 gap-4">
            <img src={data.img} alt="" />
            <div>
              <h5 className="font-bold text-base text-blue-950">{data.name}</h5>
              <p className="font-normal font-sm">{data.m}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
