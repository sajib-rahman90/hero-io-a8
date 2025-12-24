import React from "react";
import { NavLink } from "react-router";
import heroImg from "../assets/hero.png";
import play from "../assets/google-play.png";
import app from "../assets/app-store.png";

const ProductiveApps = () => {
  return (
    <div className=" pt-20 flex flex-col w-11/12 mx-auto justify-center items-center space-y-9">
      <div className="text-center space-y-9">
        <div className=" space-y-3.5">
          <h1 className="text-7xl font-medium  text-[#001931]">
            We Build <br /> <span className=" text-[#632EE3]">Productive</span>{" "}
            Apps
          </h1>
          <p className="text-[#627382]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>

        <div className="space-x-4">
          <NavLink
            className="btn"
            to="https://play.google.com/store/games?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={play} alt="" />
            Google Play
          </NavLink>
          <NavLink
            className="btn"
            to="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={app} alt="" />
            App Store
          </NavLink>
        </div>
      </div>
      <div>
        <img src={heroImg} alt="Hero image" />
      </div>
    </div>
  );
};

export default ProductiveApps;
