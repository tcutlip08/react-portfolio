import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Biography.css";

class Biography extends Component {
  state = {
    someShit: "Fuck"
  };

  render() {
    return (
      <>
        <div className="body">Biography</div>
        <div className="NavBar">
          <NavBar state={this.state.someShit} />
        </div>
      </>
    );
  }
}

export default Biography;
