import React from "react";
import ImageOneA from "../images/ImageOne.png";
import ImageTwoA from "../images/ImageTwo.png";
import ImageThreeA from "../images/ImageThree.png";
import ImageFourA from "../images/ImageFour.png";
import ImageFiveA from "../images/ImageFive.png";

const Projects = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-yellow-300">
        <h1 className="font-black uppercase text-5xl sm:text-8xl ">Projects</h1>
      </div>

      <div
        id="projects-container"
        className="bg-white py-10" 
        /* className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800" */
      >
        
          <a
          className="
          flex flex-col justify-center items-center text-center
          h-60 w-auto  
            py-4 px-10
            cursor-pointer
           bg-white 
           rounded-full text-2xl 
           hover:bg-yellow-300
           hover:text-red-500
           visited:text-purple-600
           transition-all duration-300 
           ease-in-out 
           transform 
           font-extrabold
           hover:-translate-y-1" 
           href='https://lude.netlify.app/'>
          <img
            src={ImageFiveA}
            alt="Tinder clone"
            className="h-auto w-72"
          /> 
          Front-End Tinder Clone
          <div className="text-lg font-mono">React JS, Tailwind</div>
          </a>

          <a
          className="
          flex flex-col justify-center items-center text-center
          h-60 w-auto  
            py-4 px-10
            cursor-pointer
           bg-white 
           rounded-full text-2xl 
           hover:bg-yellow-300
           hover:text-red-500
           visited:text-purple-600
           transition-all duration-300 
           ease-in-out 
           transform 
           font-extrabold
           hover:-translate-y-1" 
           href='https://actioncastro.netlify.app'>
          <img
            src={ImageOneA}
            alt="Linktree React Clone"
            className="h-auto w-72"
          /> 
          Linktree-Like Custom Profile
          <div className="text-lg font-mono">React JS, CSS</div>
          </a>

          
          <a 
          className="
          flex flex-col justify-center items-center text-center
          h-60 w-auto  
            py-4 px-10
            cursor-pointer
           bg-white 
           rounded-full text-2xl 
           hover:bg-yellow-300
           hover:text-red-500
           visited:text-purple-600
           transition-all duration-300 
           ease-in-out 
           transform 
           font-extrabold
           hover:-translate-y-1" 
           href='https://thriveboxing.netlify.app/'>
          <img
            src={ImageThreeA}
            alt="Linktree React Clone"
            className="h-auto w-72"
          /> 
          Boxing Gloves Landing Page
          <div className="text-lg font-mono"> HTML, CSS, JavaScript </div>
          </a>

          <a 
          className="
          flex flex-col justify-center items-center text-center
          h-60 w-auto  
            py-4 px-10
            cursor-pointer
           bg-white 
           rounded-full text-2xl 
           hover:bg-yellow-300
           hover:text-red-500
           visited:text-purple-600
           transition-all duration-300 
           ease-in-out 
           transform 
           font-extrabold
           hover:-translate-y-1" 
           href='https://calculatorcastro.netlify.app/'>
          <img
            src={ImageFourA}
            alt="Linktree React Clone"
            className="h-auto w-72"
          /> 
          Simple Calculator App
          <div className="text-lg font-mono"> HTML, CSS, JavaScript </div>
          </a>

          <a 
          className="
          flex flex-col justify-center items-center text-center
          h-60 w-auto  
            py-4 px-10
            cursor-pointer
           bg-white 
           rounded-full text-2xl 
           hover:bg-yellow-300
           hover:text-red-500
           visited:text-purple-600
           transition-all duration-300 
           ease-in-out 
           transform 
           font-extrabold
           hover:-translate-y-1" 
           href='https://github.com/devcastro/Twitchbot'>
          <img
            src={ImageTwoA}
            alt="Linktree React Clone"
            className="h-auto w-60"
          /> 
          Twitch Chat Bot
          <div className="text-lg font-mono"> Node.js, JS, Twitch API - GH Team Project  </div>
          </a>


          
          
        





      </div>
    </>
  );
};

export default Projects;
