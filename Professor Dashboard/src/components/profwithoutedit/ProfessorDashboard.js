import React, { Component } from "react";
import Navbar from "../Navbar";
import ProfHeader from "./ProfHeader";
import SkillsCard from "./SkillsCard";
import ProjectPaper from "./ProjectPaper";
class ProfessorDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <ProfHeader />
        <SkillsCard />
        <ProjectPaper pros={this.state.projects} />
      </div>
    );
  }
}

export default ProfessorDashboard;
