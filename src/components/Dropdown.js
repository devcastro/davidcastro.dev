import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? "grid grid-rows-4 text-center items-center bg-gradient-to-r from-red-500"
            : "hidden"
        }
        onClick={toggle}
      >
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
    </>
  );
};

export default Dropdown;
