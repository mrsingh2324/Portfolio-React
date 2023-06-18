import React, { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Typing from "../images/typing new.png";
import Revue from "../images/revue.png";
import { FaTimes } from "react-icons/fa";
import CV from "../images/Satyam Singh.png";

const Portfolio = () => {
  const [time, setTime] = useState(2);
  const [closed, setClosed] = useState(false);

  setTimeout(() => {
    if (time > 0 && !closed) {
      setTime(time - 1);
    } else if (closed) {
      setTime(0);
    }
  }, 1000);

  return (
    <div className="p-10">
      <div
        className={`
        ${time && "blur-[10px]"}
        
          bg-gray-900 rounded-3xl text-white flex sm:gap-1 flex-col w-[100%] lg:h-screen bg-gray-700 shadow-lg`}
      >
        <div
          className="flex lg:flex-row flex-col gap-4 md:gap-0 rounded-3xl bg-gray-700 lg:h-[62%] p-2 bg-gray-800"
          style={{
            background: "linear-gradient(180deg, #4B5563 0%, #1F2937 100%)",
          }}
        >
          <div className="flex flex-col p-2 md:p-0 lg:w-[50%] w-[100%] rounded-3xl bg-gray-800 min-h-[250px] lg:h-auto">
            <div className=" flex flex-col justify-around rounded-3xl items-end text-start bg-gray-800 max-h-[65%] p-1">
              <p className="lg:text-4xl md:text-3xl sm:text-2xl sm:p-2 md:p-4 text-white font-bold hover:text-blue-600 cursor-pointer">
                Building powerful web applications that enhance your online
                presence.
              </p>
              <button className=" mr-12 hover:bg-violet-400 hover:text-white font-bold rounded-full md:p-1 bg-purple-700 w-[30%] md:text-lg lg:text-xl px-2 ml-4">
                <a href={CV} download>
                  {" "}
                  WHY HIRE ME ?{" "}
                </a>
              </button>
            </div>
            <div className="flex w-[100%]  m-auto p-2 md:h-[35%] bg-purple-600 justify-around rounded-3xl">
              <div className="rounded-3xl bg-gray-700 w-[30%] cursor-pointer hover:bg-violet-500 flex lg:flex-col  items-center justify-around">
                <p className="md:text-6xl font-semibold"> 5+</p>
                <p className="text-lg">Customers</p>
              </div>
              <div className="rounded-3xl bg-gray-700 w-[30%] cursor-pointer hover:bg-yellow-500 flex lg:flex-col items-center justify-around ">
                <p className="md:text-6xl font-semibold"> 2+</p>
                <p className="text-lg">Years Experience</p>
              </div>
              <div className="rounded-3xl bg-gray-700 w-[30%] cursor-pointer hover:bg-orange-500 flex lg:flex-col items-center justify-around ">
                <p className="md:text-6xl font-semibold"> 15+</p>
                <p className="text-lg">Projects</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 bg-gray-900 rounded-3xl h-[100%] lg:w-[50%] flex flex-col  justify-around sm:py-2 md:gap-0 sm:gap-1 md:gap-0">
            <div className="rounded mx-1 h-[15%]  bg-gray-700 w-[98%] rounded-3xl items-center flex justify-center">
              <p className="text-4xl py-2 md:py-0 text-violet-600 font-bold ">
                Web Developer
              </p>
            </div>
            <div className="flex flex-row h-[78%] justify-around">
              <div className=" bg-purple-800 rounded-3xl w-[48%] bg-gray-700 flex items-center justify-center">
                <img src="/" alt="image" />
              </div>
              <div className="flex flex-col justify-around rounded-3xl w-[48%] ">
                <div className="h-[20%] flex items-center justify-center rounded-3xl bg-gray-700">
                  <p className="lg:text-xl text-3xl md:text-sm font-bold text-violet-600 ">
                    Satyam Singh
                  </p>
                </div>
                <div className="h-[50%] rounded-3xl bg-gray-700 flex flex-col py-12 items-center justify-center">
                  <div className="h-[70%] bg-gray-700 rounded-full w-[80%]">
                    I am a
                  </div>
                  <p className="lg:text-xl sm:text-lg md:text-sm text-violet-600 font-bold  ">
                    {" "}
                    FrontEnd Developer{" "}
                  </p>
                  <p className="lg:text-xl sm:text-lg md:text-sm text-violet-600 font-bold  ">
                    {" "}
                    Full Stack Developer{" "}
                  </p>
                  <p className="lg:text-xl sm:text-lg md:text-sm text-violet-600 font-bold  ">
                    {" "}
                    Devops Engineer{" "}
                  </p>
                </div>
                <div className="h-[20%] rounded-3xl flex bg-gray-900 md:text-lg lg:text-2xl items-center justify-around">
                  <a href="https://github.com/mrsingh2324" target="_blank">
                    <button className="rounded-full bg-gray-700 p-4 hover:text-violet-500">
                      <FaGithub />
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/satyamsingh.cc/"
                    target="_blank"
                  >
                    <button className="rounded-full bg-gray-700 p-4 hover:text-violet-500">
                      <FaInstagram />
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mrsatyamsingh/"
                    target="_blank"
                  >
                    <button className="rounded-full bg-gray-700 p-4 hover:text-violet-500">
                      <FaLinkedin />
                    </button>
                  </a>
                  <a href="https://twitter.com/mr_singh2324" target="_blank">
                    <button className="rounded-full bg-gray-700 p-4 hover:text-violet-500">
                      <FaTwitter />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around py-2 bg-gray-700 h-full lg:h-[50%] w-full rounded-3xl mt-1 shadow-lg">
          <div className="lg:w-[60%] h-full rounded-3xl bg-gray-800">
            <div className="flex flex-row justify-between px-10 py-4 h-[20%] bg-gray-600 rounded-tl-3xl rounded-tr-3xl items-center m-2">
              <div className="uppercase md:text-lg md:font-bold ">
                <p className="cursor-pointer text-[10px] md:text-xl">
                  My Recent Projects
                </p>
              </div>
              <div>
                <p className="hover:text-violet-700 cursor-pointer border px-5 hover:bg-white rounded-full">
                  {" "}
                  <a href="https://github.com/mrsingh2324">See All</a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-0 md:flex-row md:h-[68%] w-[100%] justify-around pt-1">
              <div className="md:w-[30%] p-1 hover:scale-125 transition-300 ease-in-out cursor-pointer bg-violet-500 border rounded-3xl flex items-center justify-center">
                <img src={Typing} alt="image" />
              </div>
              <div className="md:w-[30%] p-1 hover:scale-125 transition-300 ease-in-out cursor-pointer  bg-violet-500 border rounded-3xl flex items-center justify-center">
                <img src={Revue} alt="image" />
              </div>
              <div className="md:w-[30%] p-1 hover:scale-125 transition-300 ease-in-out cursor-pointer  bg-violet-500 border rounded-3xl flex items-center justify-center">
                <img src={Revue} alt="image" className="hover-blur-[1px] z-1" />
                {/* <h1 className="absolute border hover:z-1 z-0">click to go</h1> */}
              </div>
            </div>
          </div>
          <div className="lg:w-[38%] h-full sm:w-[100%] rounded-3xl bg-gray-800">
            <div className="flex flex-row justify-between px-10 py-4 h-[20%] bg-gray-600 rounded-tl-3xl rounded-tr-3xl items-center m-2">
              <div className="uppercase text-lg font-bold ">About Me</div>
              <div>
                <p className="hover:text-violet-500 cursor-pointer">
                  {" "}
                  <a href="https://wa.me/+919758051994" target="_blank" className="border px-3 hover:bg-white rounded-3xl">
                    Text Me
                  </a>
                </p>
              </div>
            </div>
            <div className="flex h-[68%] bg-violet-700 justify-around pt-1 bg-gray-900 rounded-bl-3xl rounded-br-3xl flex m-2 text-start">
              <p className="text-left px-4 flex items-center justify-center">
                I'm a skilled web developer dedicated to creating dynamic and
                responsive web applications. I specialize in using the latest
                web technologies to bring your ideas to life. Let's work
                together to create a website that not only looks great, but also
                functions seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {time && (
        <div className=" rounded-3xl p-5 z-1 w-[700px] top-[30%] left-[25%]  bg-violet-400 text-black text-6xl fixed ">
          <p>Welcome to my portfolio page</p>
          {/* <button>
            <FaTimes onClick={() => setClosed(false)} />
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
