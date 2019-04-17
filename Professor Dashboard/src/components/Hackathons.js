import React, { Component } from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
// import "../css/styles.css";
class Hackathons extends Component {
  state = {
    teamName: "Team Name",
    hackathonName: "Hackathon name",
    members: ["Ayush", "Vishal", "Aniket", "Palash"],
    tdesc: "We are a team of SEs,looking for a frontend developer",
    SkillRequired: ["Skill1,", "Skill2,", "Skill3,", "Skill4"],
    ProjectLink: "Project Link"
  };
  render() {
    const acceptors = this.state.members;
    return (
      <React.Fragment>
        <Card className="card" style={{ height: "450px" }}>
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
            <p style={{ fontSize: "18px", fontWeight: "initial" }}>
              {this.state.teamName}
            </p>
            <p
              style={{ color: "#12b6a6", fontWeight: "600", fontSize: "24px" }}
            >
              {this.state.hackathonName}
            </p>
            <p style={{ color: "#484349", fontSize: "16px" }}>
              {acceptors.slice(0, 3) + ","}
              {acceptors[3]}
            </p>

            <p>Description</p>
            <p style={{ opacity: "80%", fontSize: "16px", color: "#484349" }}>
              {this.state.tdesc}
            </p>
            <br />
            <p>Skills Required</p>
            <p style={{ fontSize: "15px", color: "#ff9e98", opacity: "80%" }}>
              {this.state.SkillRequired}
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "#29B6F6",
                marginLeft: "243px"
              }}
            >
              Accept
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "#FF9E98"
              }}
            >
              Decline
            </button>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default Hackathons;
