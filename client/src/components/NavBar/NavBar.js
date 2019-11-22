import React from "react";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div className="NavBar">
      <img src={require("../../assets/images/Self Pic.jpg")} alt="Pic of Me" />
      <hr />
      <div id="navs">
        <div>
          <a href="#" id="home">
            Home
          </a>
        </div>
        <div>
          <a href="#" id="bio">
            Biography
          </a>
        </div>
        <div>
          <a href="#" id="myWork">
            All My Work
          </a>
        </div>
        <div>
          <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
