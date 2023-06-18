import React from "react";
import {MdDownloadDone} from "react-icons/md";

import {MdOutlineDownload} from "react-icons/md";

const Home = () => {
  return (
    <div className="flex h-screen text-white ">
      <div className="flex basis-[50%] text-white font-bold text-4xl flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <img src="" alt="" />
          This is left part
        </div>
      </div>

      <div className="flex basis-[50%] flex flex-col items-start justify-center gap-10 pr-20 ">
        <div className="flex flex-col justify-center gap-1 text-start">
          <h1 className="text-6xl text-white font-bold">
            Hi, I'm <span className="text-green-500 font-[800]">Satyam </span>
          </h1>
          <h2 className="text-5xl text-white font-bold mb-5">
            I'm a <span className="text-green-500 font-[900]">Full Stack Developer</span>
          </h2>
          <p className="text-xl text white flex justify-center items-center">
            I'm a Front-end Developer with 6 months of experience. I specialize
            in creating user-friendly and responsive websites using HTML, CSS
            and JavaScript. I'm passionate about creating clean and efficient
            code that delivers a great user experience. I'm always looking for
            new challenges and opportunities to grow my skills as a developer.
          </p>
        </div>
        <div className="border-green-500 border rounded rounded-full gap-2 pl-3 hover:bg-green-500 transition duration-300 ease-in-out flex justify-between ">
          <button className="text-white">Download CV</button>
          <button className="bg-green-500 rounded-full h-[100%] p-2">
            <MdOutlineDownload />
            {/* <MdDownloadDone /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
