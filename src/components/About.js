import React from "react";
import { MdOutlineDownload } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import projects from "./About.json";
import project2 from "./Projects.json";
import CV from '../images/Satyam Singh.png';
const About = () => {
  return (
    <div className="h-full mb-20 flex flex-col w-[95%] text-white">
      <div className="relative text-7xl h-[20vh] flex justify-center items-center font-bold uppercase">
        <h1 className="text-white text-5xl z-[1]">
          About <span className="text-green-500">Me</span>
        </h1>
        <h1 className="absolute text-gray-800 ">My Status</h1>
      </div>
      <div className="h-[80vh] w-full  flex text-3xl">
        <div className="flex flex-col items-start px-20 text-start justify-center gap-10 py-2 text-3xl text-white basis-[50%]">
          <h1 className="text-3xl uppercase font-bold">Information about me</h1>
          <p className="px-2 text-lg">
            Front-end developer skilled in DevOps, machine learning, full-stack
            development, React Native, GitHub, and AWS. Specialize in creating
            engaging web interfaces using React, HTML, and Tailwind. Automate
            deployment pipelines, integrate AI features, and develop
            cross-platform mobile apps. Ensure optimal performance with GitHub
            and AWS.
          </p>
          <div className="rounded  rounded-full border flex gap-5 border-green-500 transition duration-300 ease-in cursor-pointer hover:bg-green-500 items-center">
            <h1 className=" ml-4 text-xl flex" type="download"> <a href={CV} download> Download CV </a></h1>
            <button className="p-2 bg-green-500 text-white rounded rounded-full ">
              <MdOutlineDownload />
            </button>
          </div>
        </div>
        <div className="flex basis-[50%] flex-col justify-center gap-10 pb-5 px-10">
          <div className="flex justify-between gap-5 basis-[30%] ">
            <div className="flex flex-col gap-3 justify-center text-start p-3 shadow shadow-lg shadow-white w-[40%]">
              <a href="https://github.com/mrsingh2324">
                <h1 className="text-green-500 text-6xl text-start font-bold">
                  15+
                </h1>
                <p className="text-white text-2xl text-start font-normal">
                  FrontEnd Projects Completed
                </p>
              </a>
            </div>
            <div className="flex flex-col gap-3 justify-center text-start p-3 shadow shadow-lg shadow-white w-[40%]">
              <a href="https://leetcode.com/mrsingh2324/">
                <h1 className="text-green-500 text-6xl text-start font-bold">
                  100+
                </h1>
              </a>
              <p className="text-white text-2xl text-start font-normal  ">
                Questions Soved on Leetcode
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-5 basis-[30%]">
            <div className="flex flex-col gap-3 justify-center text-start p-3 shadow shadow-lg shadow-white w-[40%]">
              <h1 className="text-green-500 text-6xl text-start font-bold">
                250+
              </h1>
              <p className="text-white text-2xl text-start font-normal  ">
                Questions Solved on Geeks For Geeks
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center text-start p-3 shadow shadow-lg shadow-white w-[40%]">
              <h1 className="text-green-500 text-6xl text-start font-bold">
                No
              </h1>
              <p className="text-white text-2xl text-start font-normal  ">
                Work Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 items-center justify-center">
        <hr className="w-[80%]" />
      </div>

      <div className="flex flex-col gap-10 justify-center items-center ">
        <div className="uppercase text-2xl font-bold mt-10 relative items-center flex justify-center">
          {/* <h1 className="absolute text-gray-800 text-7xl flex justify-inline">Know Me</h1> */}
          <h1 className="absolute text-gray-800 text-5xl flex justify-inline">
            Know My Skills
          </h1>
          <h1 className="text-5xl z-[1] ">
            My <span className=" z-1 text-green-500">Skills</span>{" "}
          </h1>
        </div>
        <div className="flex flex-row gap-10 justify-around w-[80%] ">
          <div className="flex flex-col w-[40%] ">
            <a href="https://en.wikipedia.org/wiki/Web_developer">
              <h1 className="bg-gray-800 items-center mb-10 flex justify-center text-lg font-bold">
                Web Developer
              </h1>
            </a>
            <div className=" p-5  w-[100%]">
              <h1 className="text-2xl font-bold  ">Front-end Development</h1>
              <div className="flex gap-0 ">
                <div className="bg-green-500 w-[80%]"></div>
                <p className="text-[10px] bg-gray-700 w-[20%]">80%</p>
              </div>
            </div>
            <div className=" p-5  w-[100%]">
              <h1 className="text-2xl font-bold  ">Version Control</h1>
              <div className="flex gap-0 ">
                <div className="bg-green-500 w-[70%]"></div>
                <p className="text-[10px] bg-gray-700 w-[30%]">70%</p>
              </div>
            </div>
            <div className=" p-5  w-[100%]">
              <h1 className="text-2xl font-bold  ">UX/UI Design</h1>
              <div className="flex gap-0 ">
                <div className="bg-green-500 w-[80%]"></div>
                <p className="text-[10px] bg-gray-700 w-[20%]">80%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[40%]">
            <a href="https://en.wikipedia.org/wiki/Programming_language">
              <h1 className="bg-gray-800 mb-10 items-center flex justify-center text-lg font-bold">
                Programming Languages
              </h1>
            </a>
            <div className=" p-5  w-[100%]">
              <h1 className="text-2xl font-bold  ">Java</h1>
              <div className="flex gap-0 ">
                <div className="bg-green-500 w-[70%]"></div>
                <p className="text-[10px] bg-gray-700 w-[30%]">70%</p>
              </div>
            </div>
            <div className=" p-5  w-[100%]">
              <h1 className="text-2xl font-bold  ">Java Script</h1>
              <div className="flex gap-0 ">
                <div className="bg-green-500 w-[70%]"></div>
                <p className="text-[10px] bg-gray-700 w-[30%]">70%</p>
              </div>
            </div>
            <div className=" p-5  w-[100%]">
              <h1 className="text-2xl font-bold  ">Python</h1>
              <div className="flex gap-0 ">
                <div className="bg-green-500 w-[60%]"></div>
                <p className="text-[10px] bg-gray-700 w-[40%]">60%</p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-col gap-10 justify-center items-center w-[100%] ">
          <div className="uppercase text-2xl font-bold mt-10 relative items-center flex justify-center">
            <h1 className="absolute text-gray-800 text-7xl flex justify-inline">
              Know Me
            </h1>
            <h1 className="text-5xl z-[1] ">
              My <span className="text-green-500">TimeLines</span>{" "}
            </h1>
          </div>
          <div className="flex flex-row gap-10 justify-around w-[80%] ">
            <h1 className=" p-2 mt-5 bg-gray-800 items-center mb-10 flex justify-center text-lg font-bold">
              Here are some of my projects
            </h1>
          </div>

          <div className="flex  items-center justify-center w-[80%]">
            {/* left side */}
            <div className="flex  flex-col gap-10 justify-around w-[80%]">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-row gap-10 m-2 p-2 shadow shadow-white shadow-lg"
                >
                  <div className="w-[20%] h-[200px] flex">
                    <h1 className="h-[30%] rounded bg-gray-600 p-3 rounded-full">
                      <img src={project.image} alt={project.title} />
                    </h1>
                  </div>
                  <div className="flex items-left text-left flex-col gap-2">
                    <div className="flex items-center pr-10 justify-between font-bold flex items-left">
                      <h1 className="text-green-500 text-4xl">
                        {project.title}
                      </h1>
                      <div className="flex items-center gap-2">
                        <h1>Link:</h1>
                        <a
                          target="_blank"
                          href={project.link}
                          className="hover:text-green-500"
                        >
                          <AiOutlineLink />
                        </a>
                      </div>
                    </div>
                    <p className="text-lg font-semibold">{project.category}</p>
                    <p className="text-blue-500 text-2xl">{project.company}</p>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* right side */}
            <div className="flex flex-col gap-10 justify-around w-[80%]">
              {project2.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-row gap-10 m-2 p-2 shadow shadow-white shadow-lg"
                >
                  <div className="w-[20%] h-[200px] flex">
                    <h1 className="h-[30%] rounded bg-gray-600 p-3 rounded-full">
                      <img src={project.image} alt={project.title} />
                    </h1>
                  </div>
                  <div className="flex items-left text-left flex-col gap-2">
                    <div className="flex items-center pr-10 justify-between font-bold flex items-left">
                      <h1 className="text-green-500 text-4xl">
                        {project.title}
                      </h1>
                      <div className="flex items-center gap-2">
                        <h1>Link:</h1>
                        <a
                          target="_blank"
                          href={project.link}
                          className="hover:text-green-500"
                        >
                          <AiOutlineLink />
                        </a>
                      </div>
                    </div>
                    <p className="text-lg font-semibold">{project.category}</p>
                    <p className="text-blue-500 text-2xl">{project.company}</p>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
