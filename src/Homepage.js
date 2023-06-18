import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Blogs from "./components/Blogs";
import Menu from "./components/Menu";

function Homepage() {
  return (
    <div className="App flex bg-gray-900 w-screen">
      <Router>
        <div className="basis-[90%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs header={"home"} />} />
            <Route path="/blogs/writings" element={<Blogs  />} />
            <Route path="/blogs/productivity" element={<Blogs  />} />
            <Route path="/blogs/transformation" element={<Blogs  />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <div className="basis-[10%]">
          <Menu />
        </div>
      </Router>
    </div>
  );
}

export default Homepage;
