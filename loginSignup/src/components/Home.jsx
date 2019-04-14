import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Projects from "./Projects";
import Grid from "@material-ui/core/Grid";
import YourProjects from "./yourprojects";
import "../css/styles.css";
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: "2%"
  },
  tabsRoot: {
    borderBottom: "1px solid #e8e8e8",
    marginLeft: "10%",
    width: "80%"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 24,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#12b6a6",
      opacity: 1
    },
    "&$tabSelected": {
      color: "#12b6a6",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#12b6a6"
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  }
});

class Home extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Professor's Projects"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Hackathons/Projects"
          />
        </Tabs>
        {value === 0 && (
          <React.Fragment>
            <div className="tab-content">
              <input
                type="text"
                style={{ height: 59 }}
                className=" searchinput1"
                placeholder="  &#61442;      Search"
              />
              <Grid container spacing={24}>
                {this.props.projects.map(project => (
                  <Grid key={project.id} item xs>
                    <Projects key={project.id} project={project} />
                  </Grid>
                ))}
              </Grid>
            </div>
            <div
              className="profile-header"
              style={{ height: 150, marginTop: "3%" }}
            />
          </React.Fragment>
        )}
        {value === 1 && (
          <React.Fragment>
            <div className="tab-content">
              <input
                type="text"
                style={{ height: 59 }}
                className=" searchinput1"
                placeholder="  &#61442;      Search"
              />
              <Grid container spacing={24}>
                {this.props.yourprojects.map(yourproject => (
                  <Grid key={yourproject.id} item xs>
                    <YourProjects
                      key={yourproject.id}
                      yourproject={yourproject}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
            <div
              className="profile-header"
              style={{ height: 150, marginTop: "3%" }}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
