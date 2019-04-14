import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar";

import "./App.css";
import ProfileHeader from "./components/profileheader";
import Navlogin from "./components/navlogin";
import Loginhead from "./components/loginhead";
import Home from "./components/Home";
import Logintail from "./components/logintail";
class App extends Component {
  state = {
    projects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    yourprojects: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
  render() {
    return (
      <Fragment>
        <Navlogin />
        <Logintail />
      </Fragment>
    );
  }
}

export default App;
