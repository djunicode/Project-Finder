import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Projects from "./Projects";
import SearchBar from "./SearchBar";
class MyProjects extends Component {
  render() {
    return (
      <div>
        <div className="topBar">
          <button
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#12B6A6",
              paddingLeft: "3px",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              height: "40px",
              width: "100px",
              fontSize: "20px",
              marginTop: "30px"
            }}
          >
            Back
          </button>
          <div
            style={{ float: "right", marginTop: "34px", marginRight: "20px" }}
          >
            <SearchBar />
          </div>
        </div>
        <Grid container spacing={24}>
          {this.props.projects.map(project => (
            <Grid key={project.id} item xs>
              <Projects key={project.id} project={project} val={project.id} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default MyProjects;
