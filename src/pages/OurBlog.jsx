import React from "react";

const OurBlog = () => {
  const data = [
    {
      title: "We Are",
      span: "commited.",
      p: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
    },

    {
      title: "We Are",
      span: "responsible.",
      p: "Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain.  ",
    },

    {
      title: "We aim for",
      span: "progress.",
      p: "Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus.  ",
    },
  ];

  return (
    <>
      <div className="p-20 bg-blue-950 h-min mb-32">
        <div className="text-center">
          <h1 className="mb-4 font-normal text-xl text-gray-300">Our Blog</h1>
          <h2 className="font-normal text-5xl leading-normal text-white px-40 mb-12">
            Value proposition accelerator product management venture
          </h2>
        </div>
        <hr />

        <div className="mt-20">
          {data.map((item, index) => {
            return (
              <>
                <div className="flex justify-around mb-24" key={index}>
                  <h1 className="text-white text-5xl font-normal">
                    {item.title}{" "}
                    <span className="text-green-400">{item.span}</span>
                  </h1>
                  <p className="font-normal text-xl text-gray-400 w-[500px]">
                    {item.p}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurBlog;
