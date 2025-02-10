import React, { useState, useEffect } from "react";
import { Container } from "../ui/index";
import { Link, NavLink, useLocation } from "react-router-dom";

// using useLocation hook get the router of the current Page and based on that conditionally render the navbar
// if the router is = "/"
// navbarListItems

const Navbar = ({ className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    let navbarListItems = [
        { id: 1, text: "home", route: "/" },
        { id: 2, text: "blogs", route: "/blogs" },
        // { id: 1, text: "about", href: "#about" },
        // { id: 2, text: "testimonials", href: "#testimonials" },
        // { id: 2, text: "why", href: "#why" },
        // { id: 3, text: "vision", href: "#vision" },
        // { id: 4, text: "contact", href: "#contact" },
    ];

    // navbarListItems = location.pathname === "/" ? navbarListItems.filter((item) => item.id <= 2) : navbarListItems;

    useEffect(() => {
        // Simply toggle overflow on body
        document.body.style.overflow = isOpen ? "hidden" : "unset";

        // Cleanup
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <nav className={`${className} relative flex items-center justify-between py-1 bg-dark px-2 md:px-4 lg:px-8`}>
            {/* logo here */}
            <Link to="/">
                <div className="logo z-20">
                    <h1 className="text-primary text-2xl font-semibold sm:text-3xl md:text-4xl">whatmind</h1>
                    <p className="text-white text-sm sm:text-base md:text-lg">The only place for getting heard</p>
                </div>
            </Link>

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
            <ul className="hidden lg:flex space-x-10 text-white text-lg">
                {navbarListItems.map((item) => (
                    <li key={item.id} className="hover:text-primary transition">
                        <NavLink className={({ isActive }) => `text-xl ${isActive ? "text-primary" : "text-white"}`} to={item.route}>
                            {item.text}
                        </NavLink>
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
                                {/* <a
                                    href={item.href}
                                    onClick={() => {
                                        setIsOpen(false);
                                        // close the mobile Navigation on click of NavItem
                                    }}
                                >
                                    {item.text}
                                </a> */}
                                <NavLink
                                    className={({ isActive }) => `${isActive ? "text-primary" : "text-white"}`}
                                    to={item.route}
                                    onClick={() => {
                                        setIsOpen(false);
                                    }}
                                >
                                    {item.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
