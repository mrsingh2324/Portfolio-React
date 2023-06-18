import React from "react";
import { SiAboutdotme } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { ImMail3 } from "react-icons/im";
import { MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="text-white bg-gray-900 flex w-[5%] flex-col h-screen fixed">
      <div className="basis-[20%]  items-center flex justify-center">
        <button className="border p-2 rounded rounded-full border-green-500 text-green-500 hover:text-white hover:bg-green-500">
          <Link to="/">
            <MdOutlineHome className="text-4xl" />
          </Link>
        </button>
      </div>
      <div className="flex flex-col items-center justify-around pb-28 pt-12 basis-[80%] transition duration-300 ease-in-out">
        <button>
          <Link to="/about">
            <SiAboutdotme className="text-4xl text-white hover:text-green-500 transition duration-300 ease-in-out" />
          </Link>
        </button>
        <button>
          <Link to="/portfolio">
            <MdWork className="text-4xl text-white hover:text-green-500 transition duration-300 ease-in-out" />
          </Link>
        </button>
        <button>
          <Link to="/blogs">
            <FaBloggerB className="text-4xl text-white hover:text-green-500 transition duration-300 ease-in-out" />
          </Link>
        </button>
        <button>
          <Link to="/contacts">
            <ImMail3 className="text-4xl text-white hover:text-green-500 transition duration-300 ease-in-out" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menu;
