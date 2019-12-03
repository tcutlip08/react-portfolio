import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MyWork from "./pages/MyWork/MyWork";
import Biography from "./pages/Biography/Biography";
import Resume from "./pages/Resume/Resume";
// import Error404 from "./pages/Error/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/myWork" component={MyWork} />
        <Route exact path="/bio" component={Biography} />
        <Route exact path="/resume" component={Resume} />
        {/* <Route exact path="*" component={Error404} /> */}
      </Switch>
    </Router>
  );
}

export default App;
