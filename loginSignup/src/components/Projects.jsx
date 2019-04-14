import React, { Component } from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import "../css/styles.css";
class Projects extends Component {
  state = {
    ProjectName: "New Project",
    ProfessorName: "New Professor",
    ProjectDescription: "This is Project Desciption",
    SkillRequired: "Skill",
    ProjectLink: "Project Link"
  };
  render() {
    return (
      <React.Fragment>
        <Card className="card">
          <CardContent>
            <p className="second-title">{this.state.ProfessorName}</p>
            <p className="card-title">{this.state.ProjectName}</p>

            <br />

            <p style={{ color: "#484349", fontSize: "22px" }}>
              Project Description
            </p>

            <p className="description">{this.state.ProjectDescription}</p>

            <p className="skill-style">Skills Required</p>

            <p style={{ fontSize: "20px", color: "#ff9e98", opacity: "80%" }}>
              {this.state.SkillRequired}
            </p>

            <a
              href={this.state.ProjectLink}
              style={{
                fontSize: "16px",
                color: "#12b6a6",
                textDecoration: "underline"
              }}
            >
              {this.state.ProjectLink}
            </a>

            <p style={{ color: "#484349", fontSize: "18px" }}>
              Contact me for more info
            </p>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default Projects;
