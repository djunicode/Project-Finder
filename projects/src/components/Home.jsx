import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Projects from "./Projects";
import { Grid, Paper } from "@material-ui/core";
import YourProjects from "./yourprojects";
import "../css/styles.css";
const styles = theme => ({
  bg: {
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
    },
    '@media screen and (max-width:780px)': {
      fontSize: 20
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  },
  search: {
    backgroundColor: "#ededed",
    borderColor: "#d1d1d1",
    borderRadius: 8,
    marginLeft: 60
  },
  IconButton: {
    height: 59,
    color: "#8b8b8b"
  },
  inputsearch: {
    marginLeft: "80%",
    width: "25%",
    marginBottom: "3%",
    border: "1px solid #d1d1d1",
    borderRadius: 10,
    height: 59,
    backgroundColor: "rgba(237,237,237,0.57)",
    '@media screen and (max-width:1700px) ': {
      width: "30%",
      marginLeft: "75%"
    },
    '@media screen and (max-width:1390px) ': {
      width: "40%",
      marginLeft: "55%"
    },
    '@media screen and (max-width:1000px) ': {
      width: "45%",
      marginLeft: "45%"
    },
    '@media screen and (max-width:800px) ': {
      width: "65%",
      marginLeft: "45%"
    },

  },
  inputbase: {
    '@media screen and (max-width:1700px)': {
      width: "80%"
    }
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
      <div className={classes.bg}>
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
              <div
                className={classes.inputsearch}
              >
                <IconButton className={classes.IconButton} aria-label="Search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  placeholder="Search"
                  style={{ height: 59, fontSize: 20, color: "#8b8b8b" }}
                  className={classes.inputbase}
                />
              </div>

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
              <div
                className={classes.inputsearch}
              >
                <IconButton className={classes.IconButton} aria-label="Search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  placeholder="Search"
                  style={{ height: 59, fontSize: 20, color: "#8b8b8b" }}
                  className={classes.inputbase}
                />
              </div>
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
