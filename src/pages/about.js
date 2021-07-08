import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-red-300">
        <h1 className="font-black text-8xl uppercase">About</h1>
      </div>
      <div className="p-10"></div>
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-widest text-sm text-indigo-500 font-semibold">
              Here's a bit about me
            </div>
            <a
              href="/projects"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              I'm a web developer,
            </a>
            <p class="mt-2 text-gray-500">
              But I'm also a retired combat sport athlete, a social media
              specialist, a globe trotter, a Twitch streamer. Unfortunately not
              a doctor or a designer, sorry mom! If you have any questions on my
              projects or journey, feel free to
              <Link className="font-bold" to="/contact">
                {" "}
                contact me!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="p-10"></div>
    </>
  );
};

export default About;
