import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* <div className="bg-radius "></div> */}
        <Navbar />
        <Hero />
        <Services/>
      </div>
    </>
  );
};

export default App;
