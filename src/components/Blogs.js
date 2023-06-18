import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Revue from "../images/revue.png";
import Blog from "./Blogs.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Writings from "./Writings";

const Blogs = () => {
  const [page, setPage] = useState(1);
  const url = window.location.pathname;
  const pageHandlerNext = () => {
    setPage(page + 1);
  };
  const pageHandlerPrev = () => {
    setPage(page - 1);
  };
  return (
    <div className="md:h-screen border border-2 p-10 m-2">
      <div className="border h-full flex flex-col justify- bg-white h-full bg-[#aff">
        {/* header */}
        <header className="h-[10%] border border-8 flex sm:justify-around md:justify-between items-center">
          <div className="flex gap-2 items-center px-2">
            <div className="border bg-black rounded-[100%] p-2 flex items-center">
              {/* <img src="" alt="" /> */}
              <p className="text-yellow-500">Satyam</p>
            </div>
            <div className="border border-black w-[1px] h-[20px] min-h-[90%] items-center  flex"></div>
            <div>
              <p className="font-bold italic ">Blog</p>
            </div>
          </div>
          <div className="flex">
            <ol className="hidden md:flex justify-between gap-10 text-sm italic">
              <li className="hover:text-[orange] active:text-[#aff]">
                <Link to="/blogs/writings">Writings</Link>
              </li>
              <li className="hover:text-[orange] active:text-[#aff]">
                <Link to="/blogs/productivity">Productivity</Link>
              </li>
              <li className="hover:text-[orange] active:text-[#aff]">
                <Link to="/blogs/transformation">Transformation</Link>
              </li>
              <li className="hover:text-[orange] active:text-[#aff]">
                <a href="https://mrsingh2324.github.io/Responsive-web-page/" target="_blank">@ Pixie</a>
              </li>
            </ol>
          </div>

          <div className=" cursor-pointer hover:bg-yellow-500 flex items-center bg-white w-[5%] h-[90%] justify-center ">
            {/* <p>Find Me</p> */}
            <input
              type="text"
              className="md:hidden px-2 text-sm outline-none"
            />
            <BsSearch />
          </div>
        </header>

        {/* pages */}

        {url === "/blogs/writings" && <Writings />}
        {url === "/blogs/productivity" && <h1> Under Productions</h1>}
        {url === "/blogs/transformation" && <h1> Under Tranformation <span className="text-red-600">LOL</span> </h1>}
      </div>
    </div>
  )
}

export default Blogs;
