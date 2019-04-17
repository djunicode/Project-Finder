import React, { Component } from "react";
import MyCreation from "./components/creatives/MyCreation";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Creation from "./components/Creation";
import ProfessorDash from "./components/professor/ProfessorDash";
import ProfessorDashboard from "./components/profwithoutedit/ProfessorDashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
  }

  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <Header title="Teams" /> */}
        {/* <Creation projects={this.state.projects} /> */}
        {/* <MyCreation /> */}
        <ProfessorDash />
        <ProfessorDashboard />
        <br />
        <div className="last" />
      </div>
    );
  }
}

export default App;
