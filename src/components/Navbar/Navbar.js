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
              <BsFillHouseFill />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/Helix_17" className="nav-link link">
              <BsTwitter />
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
      </div>
    </nav>
  );
};

export default Navbar;
