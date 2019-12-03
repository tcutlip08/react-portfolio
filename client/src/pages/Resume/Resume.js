import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Resume.css";

class Resume extends Component {
  state = {
    someShit: "Fuck"
  };

  render() {
    return (
      <>
        <div className="body">Resume</div>
        <div className="NavBar">
          <NavBar state={this.state.someShit} />
        </div>
      </>
    );
  }
}

export default Resume;
