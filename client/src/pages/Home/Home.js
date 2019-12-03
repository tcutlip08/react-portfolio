import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";

class Home extends Component {
  state = {
    someShit: "Fuck"
  };

  render() {
    return (
      <>
        <div className="body">Home</div>
        <div className="NavBar">
          <NavBar state={this.state.someShit} />
        </div>
      </>
    );
  }
}

export default Home;
