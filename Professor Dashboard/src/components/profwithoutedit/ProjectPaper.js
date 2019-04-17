import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ProjectCard from "./ProjectCard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

export default class ProjectPaper extends Component {
  render() {
    return (
      <div>
        <Paper
          style={{
            width: "70%",
            marginLeft: "12.5%",
            marginTop: "25%",
            marginBottom: "2%",
            paddingLeft: "2%",
            paddingRight: "2%",
            paddingTop: "2px"
          }}
        >
          <List>
            <ListItem>
              <ListItemText primary="Projects" />
            </ListItem>
          </List>

          <br />
          <Grid container spacing={24}>
            {this.props.pros.map(project => (
              <Grid key={project.id} item xs={6}>
                <ProjectCard
                  key={project.id}
                  project={project}
                  val={project.id}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          <List>
            <ListItem>
              {/* <ListItemText primary="See More" /> */}
              <Typography style={{ color: "#B1B1B1", paddingLeft: "45%" }}>
                <a href="#" style={{ color: "#B1B1B1" }}>
                  See More
                </a>
              </Typography>
            </ListItem>
          </List>
          <br />
        </Paper>
      </div>
    );
  }
}
