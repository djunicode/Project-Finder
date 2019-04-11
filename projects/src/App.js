import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar";

import "./App.css";
import ProfileHeader from "./components/profileheader";

import Home from "./components/Home";

class App extends Component {
  state = {
    projects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    yourprojects: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
  render() {
    return (
      <Fragment>
        <NavBar />
        <ProfileHeader />
        <Home
          projects={this.state.projects}
          yourprojects={this.state.yourprojects}
        />
      </Fragment>
    );
  }
}

export default App;
