import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesSec from "./components/ServicesSec";
import Enterprise from "./components/Enterprise";
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-white radius-class relative ">
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
        <Services />
        <ServicesSec />
        <Enterprise />
      </div>
    </>
  );
};

export default App;
