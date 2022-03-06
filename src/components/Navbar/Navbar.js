import React, { Component } from "react";
import "./Navbar.css";
import {
  BsGithub,
  BsTwitter,
  BsFillHouseFill,
  BsLinkedin
} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav">
      <a href="https://twitter.com/collinscode">
        <BsFillHouseFill></BsFillHouseFill>
      </a>
      <a href="https://twitter.com/collinscode_">
        <BsTwitter></BsTwitter>
      </a>
      <a href="https://github.com/cmdeveloped">
        <BsGithub />
      </a>
      <a href="#">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default Navbar;
