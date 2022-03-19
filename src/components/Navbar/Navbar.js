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
    <nav className="navbar nav navbar-expand-lg">
      <div className="container_nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link link">
              <BsFillHouseFill></BsFillHouseFill>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/Helix_17" className="nav-link link">
              <BsTwitter></BsTwitter>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/Priyaraj17" className="nav-link link">
              <BsGithub />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/priyaraj17/"
              className="nav-link link"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
        {/* <div className="row">
          <div className="col-3">
            <a href="/">
              <BsFillHouseFill></BsFillHouseFill>
            </a>
          </div>
          <div className="col-3">
            <a href="https://twitter.com/Helix_17">
              <BsTwitter></BsTwitter>
            </a>
          </div>
          <div className="col-3">
            <a href="https://github.com/Priyaraj17">
              <BsGithub />
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.linkedin.com/in/priyaraj17/">
              <BsLinkedin />
            </a>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
