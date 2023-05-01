import React from "react";

const BlogSec = ({ data }) => {
  return (
    <>
      <div className=" w-72  flex justify-center flex-col">
        <img src={data.img} alt="blog img" className="h-52 w-72" />

        <div className="flex items-center gap-6">
          <p className="font-normal  m-3 ml-1 ">
            <span className="font-bold text-blue-950 ">Category</span>
          </p>

          <small className="text-sm text-gray-500">November 22, 2023</small>
        </div>

        <span className="font-normal text-xl mb-6 leading-normal">
          {data.title}
        </span>
        <div className="flex items-center gap-6">
          <img src={data.img2} alt="blog person" />
          <h4 className="font-normal font-base">{data.name}</h4>
        </div>
      </div>
    </>
  );
};

export default BlogSec;
