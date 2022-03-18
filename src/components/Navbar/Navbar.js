import React, { Component } from "react";
import "./Navbar.css";
import {
  BsGithub,
  BsTwitter,
  BsFillHouseFill,
  BsLinkedin,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container_nav">
        <div className="row">
          <div className="col-2">
            <a href="/">
              <BsFillHouseFill></BsFillHouseFill>
            </a>
          </div>
          <div className="col-2">
            <a href="https://twitter.com/Helix_17">
              <BsTwitter></BsTwitter>
            </a>
          </div>
          <div className="col-2">
            <a href="https://github.com/Priyaraj17">
              <BsGithub />
            </a>
          </div>
          <div className="col-2">
            <a href="https://www.linkedin.com/in/priyaraj17/">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
