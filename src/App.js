import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-white radius-class relative ">
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
