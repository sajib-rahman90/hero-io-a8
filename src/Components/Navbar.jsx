import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 w-full sm:w-11/12 mx-auto px-2 sm:px-4 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apps"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"/installation"}>Installation</NavLink>
              </li>
            </ul>
          </div>

          <Link to={"/"} className="flex items-center gap-2">
            <img className="w-10 h-10" src={logo} alt="" />
            <p className="text-xl sm:text-xl text-[#632EE3] font-semibold">
              HERO.IO
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink
                to={"/"}
                className="text-sm sm:text-base md:text-[16px] font-semibold"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/apps"}
                className="text-sm sm:text-base md:text-[16px] font-semibold"
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/installation"}
                className="text-sm sm:text-base md:text-[16px] font-semibold"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="https://github.com/sajib-rahman90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="btn btn-primary text-sm sm:text-base flex items-center gap-1">
              <Github />
              Contribute
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
