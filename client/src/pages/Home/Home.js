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
        <div className="NavBar">
          <NavBar />
        </div>
      </>
    );
  }
}

export default Home;
