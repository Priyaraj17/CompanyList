import React, { Component } from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid row">
        <div className="project col-6 p-2">
          <a href="https://github.com/Priyaraj17/CompanyList" className="link">
            Github
          </a>
        </div>
        <div className="about col-6 d-flex justify-content-end p-2">
          <a href="/" className="link">
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
