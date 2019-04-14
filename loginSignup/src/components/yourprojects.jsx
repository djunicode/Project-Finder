import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "../css/styles.css";
const styles = theme => ({
  joinbutton: {
    borderRadius: "8px",
    backgroundColor: "#ff9e98",
    marginLeft: "60%",
    color: "white",
    width: 127,
    "&:hover": {
      opacity: "100",
      backgroundColor: "#ff9e98"
    }
  }
});

class YourProjects extends Component {
  state = {
    ProjectName: "Project Name",
    TeamName: "Team Name",
    ProjectDescription: "This is Project Desciption",
    SkillRequired: "Skill",
    ProjectLink: "Project Link",
    TeamMembers: ["you ", "Yash ", "Rahil"],
    Creator: "Creator",
    Members: "Members"
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card className="card">
          <CardContent>
            <h4 className="second-title">{this.state.TeamName}</h4>
            <strong className="card-title">{this.state.ProjectName}</strong>
            <p style={{ fontSize: "22px", color: "#000000" }}>
              {this.state.TeamMembers}
            </p>

            <p className="skill-style"> Description</p>

            <p className="description">{this.state.ProjectDescription}</p>

            <p className="skill-style">Skills Required</p>

            <p style={{ color: "#ff9e98", fontSize: "20px" }}>
              {this.state.SkillRequired}
            </p>
            <Button variant="outlined" className={classes.joinbutton}>
              Join
            </Button>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}
YourProjects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(YourProjects);
