"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 fixed w-full z-20 top-0 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/img/logo.png"
            className="h-8 sm:h-14"
            alt="Flowbite Logo"
          />
          {/* <span className="text-lg font-bold text-gray-700">Brand</span> */}
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`w-full md:flex md:w-auto md:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-slate-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/"
                className="text-base block py-2  text-gray-500 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-800"
              >
                Video Revoice
              </Link>
            </li>
            <li>
              <Link
                href="/paragraphGenerator"
                className="text-base block py-2  text-gray-500 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-800"
              >
                Speech Maker
              </Link>
            </li>
            <li>
              <Link
                href="/sentenceRewriter"
                className="text-base block py-2  text-gray-500 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-800"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/loginform"
                className="text-base block py-2  text-gray-500 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-800"
              >
                Login / Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
