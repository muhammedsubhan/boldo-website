import React from "react";
import Comments from "../pages/Comments";
import comment1 from "../icons/comment1.png";
import comment2 from "../icons/comment2.png";
import comment3 from "../icons/comment3.png";

const Enterprise = () => {
  const data = [
    {
      title:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      img: comment1,
      name: "Albus Dumbledore",
      m: "Manager @ Howarts",
    },
    {
      title:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      img: comment2,
      name: "Severus Snape",
      m: "Manager @ Slytherin",
    },
    {
      title:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      img: comment3,
      name: "Harry Potter",
      m: "Team Leader @ Gryffindor",
    },
  ];

  return (
    <>
      <div className="p-20 bg-blue-950">
        <div className="w-2/4  ml-16">
          <h1 className="leading-normal font-normal text-5xl text-white px-8  ">
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <div className="flex justify-end items-center gap-12 ">
          <button className="h-16 w-16 bg-white rounded-full">
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </button>
          <button className="h-16 w-16 bg-white rounded-full">
            <i class="fa-solid fa-arrow-right text-xl"></i>
          </button>
        </div>

        <div className="flex justify-evenly items-center">
          {data.map((item, index) => {
            return <Comments key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Enterprise;
