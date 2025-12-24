import React from "react";
import Navbar from "../Components/Navbar";
import { NavLink } from "react-router";
import Footer from "../Components/Footer";
import app_eroor from "../assets/App-Error.png";

const AppsEroor = () => {
  return (
    <div className=" ">
      <Navbar />

      <div className="bg-[#F5F5F5] flex flex-col items-center justify-center p-5 lg:p-20 md:p-10  space-y-3">
        <div>
          <img src={app_eroor} alt="" />
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-semibold text-[#001931]">
            Oops, page not found!
          </h1>
          <p className="text-xl font-normal text-[#627382]">
            The page you are looking for is not available.
          </p>
        </div>
        <div>
          <NavLink className="btn btn-primary" to="/">
            Go Back!
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppsEroor;
