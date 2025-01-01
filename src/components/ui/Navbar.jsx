import React from "react";

const Navbar = ({ className }) => {
  return (
    <div className="navbar py-5 flex justify-between items-center">
      <div>
        <h1 className="text-primary text-4xl font-semibold">whatmind</h1>
        <p className="text-white">The only place for getting heard</p>
      </div>

      <ul className="flex justify-between items-center gap-10 text-primary text-xl font-medium">
        <li className="">
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#why">why</a>
        </li>
        <li>
          <a href="#vision">vision</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
