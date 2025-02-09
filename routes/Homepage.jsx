import React from "react";
import { Link } from "react-router-dom";
import "../src/index.css";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* <Breadcrumbs /> */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span></span>
        <span className="text-blue-800">Blogs & Articles </span>
      </div>
      {/* <Introduction /> */}

      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequatur nam autem. Aut, sequi laudantium.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* animated button */}
        <Link to="/write" className=" hidden md:flex relative items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150,0"
            />

            {/* Text inside the Path */}
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea
              </textPath>
            </text>
          </svg>
          <button
            className="absolute w-24 h-24 bg-blue-800 flex items-center justify-center"
            style={{ borderRadius: "50%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="45"
              height="45"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* <Featured Posts /> */}
      {/* <Post List /> */}
    </div>
  );
};

export default Homepage;
