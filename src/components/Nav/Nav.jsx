import React, { useState } from "react";

import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import Button from "../Button/Button";
import { navLinks } from "../../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navSelection, setNavSelection] = useState(null)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <h2 className="text-[#212e03] uppercase text-3xl font-inter leading-normal font-bold">
           Lumira
          </h2>
        </a>

        <ul className="flex justify-center items-center gap-10 w-[726x] max-xl:gap-6 border p-4 border-[#212e03] rounded-[82px] max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="bg-transparent text-[#212e03] font-inter leading-normal text-md w-[143px] transition-all duration-300 ease-in-out hover:bg-[#3e5210] hover:text-white hover:px-5 hover:py-3 hover:rounded-[82px] "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex max-lg:hidden wide:mr-24">
          <Button label="Get in touch" text="text-white"/>
        </div>
        <button
          className="lg:hidden z-20 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaTimes className="text-3xl z-11 text-[#212e03]" /> 
          ) : (
            <TiThMenu className="text-[#212e03] text-3xl" /> 
          )}
        </button>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white z-10 text-white transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-full"
          }`}
        >
          <ul onClick={toggleMenu} className="flex flex-col space-y-10 items-center h-full py-32">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-inter font-semibold text-[#212e03] leading-normal text-[20px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
        <div className="flex wide:mr-24">
          <Button label="Contact us" backgroundColor="bg-[#212e03]" text="text-white"/>
        </div>
          </ul>
   
        </div>
      </nav>
    </header>
  );
};

export default Nav;