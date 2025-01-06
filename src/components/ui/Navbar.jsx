import React, { useState, useEffect } from "react";

const navbarListItems = [
  { id: 1, text: "home", href: "#home" },
  { id: 2, text: "about", href: "#about" },
  { id: 3, text: "why", href: "#why" },
  { id: 4, text: "vision", href: "#vision" },
  { id: 5, text: "contact", href: "#contact" },
];

const Navbar = ({ className = "" }) => {
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
    <nav className={`${className} relative flex items-center justify-between py-1`}>
      {/* logo here */}
      <div className="logo z-20">
        <h1 className="text-primary text-2xl font-semibold sm:text-3xl md:text-4xl">whatmind</h1>
        <p className="text-white text-sm sm:text-base md:text-lg">The only place for getting heard</p>
      </div>

      {/* toggle button here */}
      <button className="text-white lg:hidden items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white z-20 " onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Desktop Menu here */}
      <ul className="hidden lg:flex space-x-8 text-white text-lg">
        {navbarListItems.map((item) => (
          <li key={item.id} className="hover:text-primary transition">
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu here */}
      {isOpen && (
        <div
          className={`absolute z-10 inset-0 w-screen h-screen bg-black transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl flex flex-col gap-10 items-center">
            {navbarListItems.map((item) => (
              <li key={item.id} className={`hover:text-primary transition ease-in `}>
                <a
                  href={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    // close the mobile Navigation on click of NavItem
                  }}
                >
                  {item.text}
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
