import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <Link
          className="
        lg:text-9xl 
        md:text-7xl 
        sm:text-5xl 
        text-3xl font-black mb-10
        hover:text-red-500 transition duration-400 ease-in-out
        cursor-pointer"
          to="/about"
        >
          ACTIONCASTRO
        </Link>
        <Link
          className="
           py-4 px-10
           mb-10 
          bg-red-500 
          rounded-full text-3xl 
          hover:bg-yellow-300 
          transition-all duration-300 
          ease-in-out 
          transform 
          font-extrabold
          hover:-translate-y-1"
          to="/projects"
        >
          My Work
        </Link>
      </div>
    </>
  );
};

export default Hero;
