import React from "react";
import Comments from "../pages/Comments";
import comment1 from "../icons/comment1.png";
import comment2 from "../icons/comment2.png";
import comment3 from "../icons/comment3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Enterprise = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

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
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      img: comment1,
      name: "Albus Dumbledore",
      m: "Manager @ Howarts",
    },

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
    {
      title:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      img: comment3,
      name: "Harry Potter",
      m: "Team Leader @ Gryffindor",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="p-20 bg-blue-950">
        <div className="w-2/4  ml-16">
          <h1 className="leading-normal font-normal text-5xl text-white  ">
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <div className="flex justify-end items-center gap-12 ">
          <button
            className="h-16 w-16 bg-white rounded-full"
            onClick={slideLeft}
          >
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </button>
          <button
            className="h-16 w-16 bg-white rounded-full"
            onClick={slideRight}
          >
            <i class="fa-solid fa-arrow-right text-xl"></i>
          </button>
        </div>

        <Carousel responsive={responsive}>
          <div
            id="slider"
            className="flex justify-evenly items-center overflow-x-hidden scroll-smooth infinite gap-12 w-screen"
          >
            {data.map((item, index) => {
              return <Comments key={index} data={item} />;
            })}
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Enterprise;
