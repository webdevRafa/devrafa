import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import logo from "../assets/favsy.png";
import { TimeOfDay } from "./TimeOfDay";

export const Navbar: React.FC = () => {
  // LOGIC

  // states
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // toggle handler function
  const handleToggle = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  // toggle scroll effect based on ↑ 600px scroll ↓
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // listen for scroll event on our function
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // JSX
  return (
    <>
      {/* navbar container */}
      <div
        className={`sticky top-0 z-50 ${
          scrolled ? "bg-dark-green text-white" : "bg-transparent text-white"
        } transition-colors duration-300`}
      >
        <nav className="w-full  flex items-center justify-between py-2 px-6">
          {/* logo */}
          <img className="size-7 md:size-7 lg:size-10" src={logo} alt="" />
          <h1 className="font-bold">
            <span className="text-green">devRafa</span>.webdeveloper()
          </h1>
          <TimeOfDay />
          {/* menu toggler for mobile */}
          <Bars3Icon onClick={handleToggle} className="md:hidden size-8" />
          {/* for desktop */}
          <ul className="text-white py-2 px-6 hidden md:flex gap-7">
            <li className="hover:text-green cursor-pointer">About</li>
            <li className="hover:text-green cursor-pointer">Services</li>
            <li className="hover:text-green cursor-pointer">Blog</li>
            <li className="hover:text-green cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/*  popup menu for mobile, hidden by defalut */}
        {menu && (
          <div
            className={`text-white fixed w-full md:hidden transition duration-150 ease-in-out overflow-hidden ${
              scrolled && "text-blue bg-dark-green"
            }`}
          >
            <ul className="flex flex-col items-center mx-auto text-1xl font-bold  w-[90%] py-[40px]">
              <li className="my-1.5">About</li>
              <li className="my-1.5">Services</li>
              <li className="my-1.5">Blog</li>
              <li className="my-1.5">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
