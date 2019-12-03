import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./MyWork.css";

class MyWork extends Component {
  state = {
    someShit: "Fuck"
  };

  render() {
    return (
      <>
        <div className="body">MyWork</div>
        <div className="NavBar">
          <NavBar />
        </div>
      </>
    );
  }
}

export default MyWork;
