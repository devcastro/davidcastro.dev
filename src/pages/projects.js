import React from "react";
import ImageOne from "../images/ImageOneA.PNG";
import ImageTwo from "../images/ImageTwo.PNG";
import ImageThree from "../images/image3.2.PNG";
import ImageFour from "../images/imagefour.PNG";

const Projects = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-yellow-300">
        <h1 className="font-black uppercase text-5xl sm:text-8xl ">Projects</h1>
      </div>

      <div
        id="projects-container"
        className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800"
      >
        <div className="flex flex-col justify-center items-center h-screen font-mono py-40">
          <img
            src={ImageOne}
            alt="Linktree clone"
            className="h-full rounded mb-20 shadow"
          />

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2 underline text-yellow-300 hover:text-red-800 visited:text-purple-600">
              <a href="https://actioncastro.netlify.app">
                Personal Linktree Profile
              </a>
            </h2>
            <p className="mb-2">React Static Page using components</p>
            <span>React JS, HTML and CSS</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen font-mono py-40">
          <img
            src={ImageTwo}
            alt="Twitch bot"
            className="h-46 rounded mb-20 shadow"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2 underline text-yellow-300 hover:text-red-800 visited:text-purple-600">
              <a href="https://github.com/devcastro/Twitchbot">
                {" "}
                Twitch Bot - acastrobot{" "}
              </a>
            </h2>
            <p className="mb-2">Moderator with custom replies</p>
            <span>Node.js, JS, Twitch API - GitHub Team Project </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen font-mono py-40">
          <img
            src={ImageThree}
            alt="Thrive Boxing landing"
            className="h-full rounded mb-20 shadow"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2 underline text-yellow-300 hover:text-red-800 visited:text-purple-600">
              {" "}
              <a href="https://thriveboxing.netlify.app/">
                Boxing Gloves Landing Page
              </a>
            </h2>
            <p className="mb-2"> Simple Front-End Landing Page </p>
            <span> HTML, CSS (Tailwind Framework) </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen font-mono py-40">
          <img
            src={ImageFour}
            alt="castro javascript calculator"
            className="h-full rounded mb-20 shadow"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2 underline text-yellow-300 hover:text-red-800 visited:text-purple-600">
              <a href="https://calculatorcastro.netlify.app/">
                Simple Calculator App
              </a>
            </h2>
            <p className="mb-2"> JavaScript Calculator </p>
            <span> HTML, CSS, JavaScript </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
