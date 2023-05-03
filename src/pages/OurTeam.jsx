import React from "react";
import people from "../icons/people.png";
import people2 from "../icons/people2.png";
import people3 from "../icons/people3.png";

const OurTeam = () => {
  const data = [
    {
      img: people,
      name: "Michael Scott",
      title: "General Manager",
    },
    {
      img: people,
      name: "Michael Scott",
      title: "General Manager",
    },
    {
      img: people,
      name: "Michael Scott",
      title: "General Manager",
    },
  ];

  const people1 = [
    {
      img: people2,
      name: "Dwight Schrute",
      title: "General Manager",
    },
    {
      img: people3,
      name: "Pam Beetsley",
      title: "General Manager",
    },
    {
      img: people2,
      name: "Dwight Schrute",
      title: "General Manager",
    },
    {
      img: people3,
      name: "Pam Beetsley",
      title: "General Manager",
    },
  ];

  return (
    <>
      <div className="p-20 ">
        <div className="px-56">
          <h1 className="mb-6 text-gray-400 font-normal text-xl ">Our Team</h1>
          <h2 className="mb-10 font-normal text-5xl text-black">
            The people behind the work
          </h2>
        </div>
        <div
          className="w-[750px] ml-56 
        "
        >
          <p className="text-gray-500 text-xl mb-12">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>
        </div>
        <div className="flex justify-evenly items-center">
          {data.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <img src={item.img} alt="people" />
                  <h2 className="my-3 text-2xl text-black font-normal">
                    {item.name}
                  </h2>
                  <p className="font-normal text-gray-400 text-lg">
                    {item.title}
                  </p>
                </div>
              </>
            );
          })}
        </div>

        <div className="mt-20 w-[800px] ml-60 flex flex-wrap justify-between gap-10">
          {people1.map((item, index) => {
            return (
              <>
                <div className="flex items-center gap-4" key={index}>
                  <img src={item.img} alt="people2" />
                  <div>
                    <h2 className="mb-3 text-2xl font-normal text-black">
                      {item.name}
                    </h2>
                    <p className="font-normal text-lg text-gray-400">
                      {item.title}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
