import React from "react";
import BlogSec from "../pages/BlogSec";
import blog1 from "../icons/blog1.png";
import blog2 from "../icons/blog2.png";
import blog3 from "../icons/blog3.png";
import blogPerson1 from "../icons/blogPerson1.png";
import blogPerson2 from "../icons/blogPerson2.png";
import blogPerson3 from "../icons/blogPerson3.png";

const Blog = () => {
  const data = [
    {
      img: blog1,
      title: "Pitch termsheet backing validation focus release.",
      img2: blogPerson1,
      name: "Chandler Bing",
    },
    {
      img: blog2,
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      img2: blogPerson2,
      name: "Rachel Green",
    },
    {
      img: blog3,
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      img2: blogPerson3,
      name: "Monica Geller",
    },
  ];
  return (
    <>
      <div className="p-20 flex flex-col justify-center">
        <div className="text-center">
          <h3 className="font-base text-xl text-gray-400 mb-4">Our Blog</h3>
          <h1 className="font-normal text-4xl px-80 leading-normal	 mb-28">
            Value proposition accelerator product management venture
          </h1>
        </div>
        <div className="flex justify-evenly items-center px-20">
          {data.map((items, index) => {
            return <BlogSec key={index} data={items} />;
          })}
        </div>
        <div className="flex items-center justify-center">
          <button className="mt-16 w-40 font-semibold px-8 py-4 border-2 rounded-full hover:border-blue-950  text-white bg-blue-950 hover:bg-white hover:text-blue-950 transition-all ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
