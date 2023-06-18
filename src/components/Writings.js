import React,{useState} from "react";
import Blog from "./Blogs.json";

const Writings = () => {
  // const
  const [page, setPage] = useState(1);

  const pageHandlerNext = () => {
    setPage(page + 1);
  };
  const pageHandlerPrev = () => {
    setPage(page - 1);
  };

  return (
    <div className="flex flex-col justify-between">
      {Blog.map((blog) => {
        if (blog.id === page) {
          return (
            <div className="max-h-[75] w-full" key={blog.id}>
              <div className="w-full flex justify-between flex-col items-center">
                <div className="items-center flex flex-col justify-center font-bold text-4xl">
                  <p>
                    {blog.id}. {blog.title}{" "}
                  </p>
                  <p className="text-lg">Since {blog.since} </p>
                  <p className="text-sm font-normal ">
                    {" "}
                    <a href={blog.link} target="_blank">
                      {" "}
                      Link to web{" "}
                    </a>
                  </p>
                </div>
                <div className="flex sm:flex-col border sm:w-[100%] md:flex-row h-[60%] md:w-[90%] items-center justify-between mt-10">
                  <div className="md:w-[73%] mt-[-60px] sm:w-[90%] h-[90%] items-center flex justify-center ">
                    <img src={blog.image} alt="image" />
                  </div>
                  <div className="md:w-[25%] border sm:w-[90%] px-10 text-start flex flex-col h-[100%] items-center justify-around">
                    <h1 className="text-start text-3xl font-bold w-full">
                      Welcome to my blogger page---
                    </h1>
                    <h1>{blog.description}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="h-[5%] mb-5 flex items-center justify-center gap-10">
          {page === 1 ? (
            <button
              className="bg-[#aaa] hover:bg-[#abc] text-white px-4 p-2"
              onClick={() => pageHandlerNext()}
            >
              Next Page
            </button>
          ) : page < Blog.length ? (
            <>
              <button
                className="bg-[#aaa] hover:bg-[#abc] text-white px-4 p-2"
                onClick={() => pageHandlerPrev()}
              >
                Previous Page
              </button>
              <button
                className="bg-[#aaa] hover:bg-[#abc] text-white px-4 p-2"
                onClick={() => pageHandlerNext()}
              >
                Next Page
              </button>
            </>
          ) : page == Blog.length ? (
            <button
              className="bg-[#aaa] hover:bg-[#abc] text-white px-4 p-2"
              onClick={() => pageHandlerPrev()}
            >
              Previous Page
            </button>
          ) : (
            " "
          )}
        </div>
    </div>
  );
};

export default Writings;
