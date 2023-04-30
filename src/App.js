import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* <div className="bg-radius "></div> */}
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default App;
