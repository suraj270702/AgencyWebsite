import React, { useState } from "react";
import logo from "../assets/Rectangle 9.png";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const navItems = [
    {
      link: "Overview",
      path: "overview",
    },
    {
      link: "Features",
      path: "feature",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Pricing",
      path: "pricing",
    },
  ];
  return (
    <>
      <div className="bg-white navbar md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 left-0 right-0">
        <div className="text-lg container flex justify-between items-center mx-auto">
          <div className="flex items-center space-x-14">
            <Link
              to="/"
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                className="w-10 inline-block items-center"
                alt="logo"
              />
              <span>XYZ</span>
            </Link>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map((item, i) => (
                <Link
                  to={item.path}
                  key={i}
                  className="block hover:text-gray-300"
                >
                  {item.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex">
            <Link
              to="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <MdLanguage className="mr-2" />
              Language
            </Link>
            <button className="bg-secondary px-4 py-2 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign Up
            </button>
          </div>
          {/*Menu for Mobile*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {menu ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <GiHamburgerMenu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl w-[75%] h-[100vh] transition-all duration-300 ${
          menu ? "block fixed top-0 left-0 right-0" : "hidden"
        }`}
      >
        {navItems.map((item, i) => (
          <Link to={item.path} key={i} className="block hover:text-gray-300">
            {item.link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
