import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "Project Name",
      projectDesc: "Project Description",
      projectLink: "Project link"
    };
  }

  render() {
    const { projectDesc, projectLink, projectName } = this.state;
    return (
      <React.Fragment>
        <Card>
          <CardContent>
            <h4>{projectName}</h4>
            <p>{projectDesc}</p>
            <a href="#">{projectLink}</a>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
