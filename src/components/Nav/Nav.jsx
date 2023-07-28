import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo1.png";
import github from "./../../assets/github.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text">FlashType</p>
      </div>
      <div className="nav-right">
        <a target="_blank" href="" className="nav-link" rel="noreferrer">
          <img src={github} className="github-logo" alt="github-logo" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
