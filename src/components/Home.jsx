import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServicesSec from "../components/ServicesSec";
import Enterprise from "../components/Enterprise";
import Customers from "../components/Customers";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ServicesSec />
      <Enterprise />
      <Customers />
      <Blog />
    </>
  );
};

export default Home;
