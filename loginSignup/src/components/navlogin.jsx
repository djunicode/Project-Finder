import React, { Fragment } from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Login from "./login";
import Signup from "./signup";
import { withStyles } from "@material-ui/core/styles";
import "../css/styles.css";
import logo from "./unicode.PNG";
import "../css/font-awesome.css";
import Loginhead from "./loginhead";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  navbg: {
    backgroundColor: "white",
    width: "auto"
  },

  navitem: {
    fontSize: "20px",

    marginRight: theme.spacing.unit * 5,
    textTransorm: "initial"
  },
  tabsRoot: {
    width: "100%"
  },
  tabsIndicator: {
    backgroundColor: "#fff"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 20,
    color: "#484349",
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
      opacity: 1
    },
    "&$tabSelected": {
      fontWeight: theme.typography.fontWeightMedium,

      color: "#12b6a6"
    }
  },
  tabSelected: {}
});

class Navlogin extends React.Component {
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
        <AppBar position="static" className={classes.navbg}>
          <Toolbar className="navheight">
            <img src={logo} className="logo" alt="" />

            <div className={classes.grow} />
            <div>
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
                  label="Login"
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                />
                <Tab
                  disableRipple
                  label="Sign Up"
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                />
              </Tabs>
            </div>
          </Toolbar>
        </AppBar>
        {value == 0 && (
          <Fragment>
            <Loginhead />
            <Login />
          </Fragment>
        )}
        {value == 1 && (
          <Fragment>
            <Loginhead />
            <Signup />
          </Fragment>
        )}
      </div>
    );
  }
}

Navlogin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navlogin);
