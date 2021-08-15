import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Link
        className="
          relative
          bottom-18	
          font-extrabold 
          font-arial 
          text-4xl 
          uppercase 
          flex justify-center items-center text-center  
          hover:text-red-500 transition duration-400 ease-in-out
        cursor-pointer
        sm:text-8xl
        overflow-x-hidden;
        "
        to="https://www.twitch.tv/actioncastro"
      >
        The Stack
      </Link>

     
    </>
  );
};

export default Content;
