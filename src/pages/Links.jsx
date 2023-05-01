import React from "react";

const Links = ({ data }) => {
  return (
    <>
      <div>
        <h1 className="mb-10 font-bold text-blue-950 text-xl">{data.title}</h1>
        <p className="mb-4">{data.link1}</p>
        <p className="mb-4">{data.link2}</p>
        <p className="mb-4">{data.link3}</p>
      </div>
    </>
  );
};

export default Links;
