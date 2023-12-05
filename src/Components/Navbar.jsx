import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleChange = ()=> {
        setMenu(!menu)
    }

    // color button
    const colorButton = `bg-white`;

  return (
    <div className="overflow-hidden ">
      <div className="Navbar  flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
        <div className="logo flex items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            <h1 className="font-semibold text-2xl cursor-pointer">Being Traveller</h1>
          </Link>
        </div>
        <nav className=" hidden  lg:flex flex-row items-center gap-6">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Destination
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex flex-row items-center gap-4">
          <h1 className="hover:text-green-500 transition-all cursor-pointer">Register</h1>
          <Button title="Login" backgroundColor={colorButton}  />
        </div>
        {/* Menubar */}
        <div className="flex items-center p-3 lg:hidden" onClick={handleChange} >
        <IoMenuOutline size={28} />
        </div>
      </div>
{/* Links */}
    <div className={` ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold gap-5 text-2xl text-center pt-8 pb-4 w-full transition-transoform duration-500 h-fit  `} >
    <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Destination
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </Link>

          <div className=" lg:hidden  flex flex-row justify-center items-center gap-5">
          <h1 className="hover:text-green-500 transition-all cursor-pointer">Register</h1>
          <Button title="Login" backgroundColor={colorButton}  />
        </div>
    </div>

    </div>
  );
};

export default Navbar;
