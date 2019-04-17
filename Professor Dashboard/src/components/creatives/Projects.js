import React, { Component } from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
// import "../css/styles.css";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "Team Name",
      projectName: "Project name",
      members: ["Ayush", "Vishal", "Aniket", "Palash"],
      tdesc: "We are a team of SEs,looking for a frontend developer",
      SkillRequired: ["Skill1,", "Skill2,", "Skill3,", "Skill4"],
      ProjectLink: "Project Link"
    };
  }

  render() {
    const acceptors = this.state.members;

    return (
      <React.Fragment>
        <Card className="pcard">
          <CardContent>
            <p
              style={{
                marginTop: "0",
                float: "right",
                backgroundColor: "#FF9E98",
                color: "white",
                width: "30px",
                borderRadius: "30px",
                height: "30px",
                fontSize: "20px"
              }}
            >
              {this.props.val}
            </p>
            <br />
            <br />
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "initial",
                color: "#484349"
              }}
            >
              {this.state.teamName}
            </p>
            <p
              style={{ color: "#12b6a6", fontWeight: "600", fontSize: "24px" }}
            >
              {this.state.projectName}
            </p>
            <p style={{ color: "#484349", fontSize: "16px" }}>
              {acceptors.slice(0, 3) + ","}
              {acceptors[3]}
            </p>
            <br />
            <p>Description</p>
            <p style={{ opacity: "80%", fontSize: "16px" }}>
              {this.state.tdesc}
            </p>

            <p>Skills Required</p>
            <p style={{ fontSize: "15px", color: "#ff9e98", opacity: "80%" }}>
              {this.state.SkillRequired}
            </p>
            <p style={{ textAlign: "left", fontSize: "15px" }}>
              Created By: {this.state.members[0]}
            </p>
            <p style={{ textAlign: "left", fontSize: "15px" }}>
              Accepted By: {acceptors.slice(1, 3) + ","}
              {acceptors[3]}
            </p>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default Projects;
