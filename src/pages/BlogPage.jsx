import React from "react";
import blogPage1 from "../icons/blogpage1.png";
import blogperson1 from "../icons/blogPerson1.png";
import blogperson2 from "../icons/blogPerson2.png";
import blogperson3 from "../icons/blogPerson3.png";
import BlogPageSec from "./BlogPageSec";
import blog1 from "../icons/blog1.png";
import blog2 from "../icons/blog2.png";
import blog3 from "../icons/blog3.png";
import blog4 from "../icons/blog4.png";
import blog5 from "../icons/blog5.png";
import blog6 from "../icons/blog6.png";

const BlogPage = () => {
  const data = [
    {
      img: blog1,
      img2: blogperson1,
      title: "Pitch termsheet backing validation focus release.",
      name: "Chandler Bing",
    },

    {
      img: blog2,
      img2: blogperson2,
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      name: "Rachel Green",
    },
    {
      img: blog3,
      img2: blogperson3,
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      name: "Monica Geller",
    },
    {
      img: blog4,
      img2: blogperson1,
      title: "Pitch termsheet backing validation focus release.",
      name: "Chandler Bing",
    },
    {
      img: blog5,
      img2: blogperson2,
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      name: "Rachel Green",
    },
    {
      img: blog6,
      img2: blogperson3,
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      name: "Monica Geller",
    },
  ];

  return (
    <>
      {/* <div className="flex p-14 justify-between items-center bg-white">
        <Link to="/">
          <div className="flex space-x-5 ml-14">
            <img src={logo} alt="logo" />
            <h1 className="text-blue-950 font-bold text-4xl">BOLDO</h1>
          </div>
        </Link>

        <div className="flex justify-end items-center pr-16 space-x-14 text-blue-950 font-semibold text-base">
          <p>Blog</p>
          <p>Services</p>
          <Link to="about">About</Link>
          <button className="px-8 py-2 border-2 rounded-full border-blue-950  text-blue-950 bg-gray hover:bg-blue-950 hover:text-white transition-all ease-in-out">
            Log In
          </button>
        </div>
      </div> */}

      <div className="p-20">
        <div className="text-center mb-20">
          <h1 className="mb-4 text-gray-500 font-normal text-xl">Blog</h1>
          <h2 className="font-normal text-6xl text-blue-950">
            Thoughts and words
          </h2>
        </div>

        <div className="ml-20">
          <div className="flex gap-28 items-center">
            <img src={blogPage1} alt="blog img" />

            <div>
              <span className="text-blue-950 font-bold text-base flex ">
                Category
                <p className="text-gray-400 font-normal text-base ml-4">
                  Novemer 22, 2023
                </p>
              </span>

              <div className="mt-2 ">
                <h1 className="mb-10 text-black font-normal text-5xl leading-normal ">
                  Pitch termsheet backing validation focus release.
                </h1>
                <div className="flex items-center gap-6">
                  <img src={blogperson1} alt="img" />
                  <p className="text-xl font-normal text-black ">
                    Chandler Bing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className=" mt-32" />
      </div>

      <div className="p-20">
        <div className="ml-16">
          <h1 className="text-black text-5xl font-normal">Latest News</h1>
        </div>

        <div className="flex justify-center">
          <div className=" w-[1150px] mt-10 flex justify-between flex-wrap gap-10 items-center">
            {data.map((item, index) => {
              return <BlogPageSec key={index} data={item} />;
            })}
          </div>
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

export default BlogPage;
