"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-2">
        <Link
          href="/"
          className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/img/logo.png"
            className="h-8 sm:h-10"
            alt="Flowbite Logo"
          />
        </Link>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-4 md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="text-sm sm:text-lg block py-2 px-3 sm:py-5 sm:px-5 md:p-0 text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800"
              >
                Video Revoice
              </Link>
            </li>
            <li>
              <Link
                href="/paragraphGenerator"
                className="text-sm sm:text-lg block py-2 px-3 sm:py-5 sm:px-5 md:p-0 text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800"
              >
                Speech Maker
              </Link>
            </li>
            <li>
              <Link
                href="sentenceRewriter"
                className="text-sm sm:text-lg block py-2 px-3 sm:py-5 sm:px-5 md:p-0 text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800"
              >
                About us
              </Link>
            </li>
            {/* <li>
              <Link
                href="/registerform"
                className="text-sm sm:text-lg block py-2 px-3 sm:py-5 sm:px-5 md:p-0 text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800"
              >
                
              </Link>
            
            </li> */}
            <li>
            <Link
                href="/loginform"
                className="text-sm sm:text-lg block py-2 px-3 sm:py-5 sm:px-5 md:p-0 text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800"
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
