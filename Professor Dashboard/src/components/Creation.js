import React, { Component } from "react";
import Hackathons from "./Hackathons";
import Grid from "@material-ui/core/Grid";
import CreateTeam from "./CreateTeam";
//import JoinTeam from './JoinTeam';
// import PropTypes from 'prop-types';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SearchBar from "./creatives/SearchBar";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    borderBottom: "1px solid #e8e8e8"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
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
      color: "#40a9ff",
      opacity: 1
    },
    "&$tabSelected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#40a9ff"
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  }
});

class Creation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      teamName: "Team name",
      hName: "Hackathon name",
      members: ["Name1", "Name2", "Name3"],
      tdesc: "We are a team of SEs looking for a frontend developer",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"]
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { teamName, hName, members, tdesc, skills } = this.state;
    const cardc = { teamName, hName, members, tdesc, skills };
    return (
      <div className="creation">
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator
            }}
          >
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Create A Team"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Join A Team"
            />
          </Tabs>

          {value === 0 && (
            <TabContainer>
              <CreateTeam />
            </TabContainer>
          )}
          {value === 1 && (
            <React.Fragment>
              <div className="tab-content">
                {/* <input
                  type="text"
                  style={{ height: 59 }}
                  className=" searchinput1"
                  placeholder="  &#61442;      Search"
                /> */}
                <div className="creation-search">
                  <SearchBar />
                </div>
                <Grid container spacing={24}>
                  {this.props.projects.map(project => (
                    <Grid key={project.id} item xs>
                      <Hackathons
                        key={project.id}
                        project={project}
                        val={project.id}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

Creation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Creation);
