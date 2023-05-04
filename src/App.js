import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import BlogPage from "../src/pages/BlogPage";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-white radius-class relative ">
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<BlogPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
