import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { nav } from "motion/react-client";
// const navbarList = [
//   { id: 1, text: "home", href: "#home" },
//   { id: 2, text: "about", href: "#about" },
//   { id: 3, text: "why", href: "#why" },
//   { id: 4, text: "vision", href: "#vision" },
//   { id: 5, text: "contact", href: "#contact" },
// ];

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simply toggle overflow on body
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className={`${className} relative flex items-center justify-between px-2 py-1 md:px-10`}>
      <div className="logo z-20">
        <h1 className="text-primary text-2xl font-semibold sm:text-3xl md:text-4xl">whatmind</h1>
        <p className="text-white text-sm sm:text-base md:text-lg">The only place for getting heard</p>
      </div>
      <button className="text-white md:hidden items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white z-20 " onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div
          className={`absolute z-10 inset-0 w-screen h-screen bg-black transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl flex flex-col gap-10 items-center">
            {["home", "about", "why", "vision", "contact"].map((item, index) => (
              <li key={item} className={`hover:text-primary transition ease-in `}>
                <a
                  href={`#${item}`}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
