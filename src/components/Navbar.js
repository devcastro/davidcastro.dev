import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between item-center h-16 pt-4 
      bg-black
      text-black relative shadow-sm font-mono text-white"
      role="navigation"
    >
      <Link
        to="/about"
        className="
      font-extrabold uppercase leading-none text-center pl-8 text-white text-2xl sm:text-4xl"
      >
        David CASTRO
      </Link>
      <div className="px-4 cursor-pointer pt-2 md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 font-bold" to="/">
          Home
        </Link>
        <Link className="p-4 font-bold" to="/projects">
          Projects
        </Link>
        <Link className="p-4 font-bold" to="/about">
          About
        </Link>
        <Link className="p-4 font-bold" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
