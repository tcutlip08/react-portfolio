import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="NavBar">
      <img src={require("../../assets/images/Self Pic.jpg")} alt="Pic of Me" />
      <hr />
      <div id="navs">
        <div>
          <Link className="nav" to="/">
            <b>Home</b>
          </Link>
        </div>
        <div>
          <Link className="nav" to="/bio">
            <b>Biography</b>
          </Link>
        </div>
        <div>
          <Link className="nav" to="/myWork">
            <b>My Work</b>
          </Link>
        </div>
        <div>
          <Link className="nav" to="/resume">
            <b>Resume</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
