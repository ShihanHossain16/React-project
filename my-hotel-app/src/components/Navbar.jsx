import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-2 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" data-discover="true">
            <img
              src="https://i.ibb.co/yYC4D4n/logo-1.png"
              alt="HotelFinder Logo"
              className="w-24 sm:w-28 md:w-32"
            />
          </Link>
        </div>

        
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-gray-600 hover:text-yellow-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:space-x-6 lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-10 w-full lg:w-auto">
            <li>
              <Link className="text-light_gray font-urbanist " to="/" data-discover="true">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-light_gray font-urbanist" to="/about" data-discover="true">
                About
              </Link>
            </li>
            <li>
              <Link className="text-light_gray font-urbanist" to="/rooms" data-discover="true">
                Rooms
              </Link>
            </li>
            <li>
              <Link className="text-light_gray font-urbanist" to="/blog" data-discover="true">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-light_gray font-urbanist" to="/page" data-discover="true">
                Page
              </Link>
            </li>
          </ul>
        </div>

    
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <button className="px-4 py-2 text-gray-800 rounded-md border-gray-300">
            Login / Signup
          </button>
          <Link to="/rooms">
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
              style={{ backgroundColor: "rgb(206, 175, 131)" }}
            >
              Reservation
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
