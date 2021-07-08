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
          text-8xl 
          uppercase 
          flex justify-center items-center 
          hover:text-red-500 transition duration-400 ease-in-out
        cursor-pointer',
        "
        to="/"
      >
        {" "}
        The Stack
      </Link>

      {/*
      <div className="flex flex-col justify-center items-center h-screen font-mono py-40">
        <img
          src={ImageOne}
          alt="Linktree clone"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Personal Linktree Profile</h2>
          <p className="mb-2">React Static Page using components</p>
          <span>React JS, HTML and CSS</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen font-mono py-40">
        <img
          src={ImageTwo}
          alt="Twitch bot"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Twitch Bot - acastrobot</h2>
          <p className="mb-2">Node.js Twitch Bot</p>
          <span>Node.js, JS, Twitch API </span>
        </div>
      </div>

     
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src={ImageThree}
          alt=""
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2"></h2>
          <p className="mb-2"></p>
          <span></span>
        </div>
      </div>
        */}
    </>
  );
};

export default Content;
