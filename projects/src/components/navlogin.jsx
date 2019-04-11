import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import "../css/styles.css";
import logo from "./unicode.PNG";
import "../css/font-awesome.css";

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

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },

  navitem: {
    fontSize: "20px",

    marginRight: theme.spacing.unit * 5,
    textTransorm: "initial"
  }
});

class Navlogin extends React.Component {
  state = {
    user: "John Doe"
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbg}>
          <Toolbar className="navheight">
            <img src={logo} className="logo" alt="" />

            <input
              type="text"
              style={{ height: 59 }}
              className=" searchinput"
              placeholder="  &#61442;     Search"
            />

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography className={classes.navitem}>
                <a
                  style={{ textDecoration: "none", color: "#323232" }}
                  href="#"
                >
                  Login
                </a>
              </Typography>
              <Typography className={classes.navitem}>
                <a
                  style={{ textDecoration: "none", color: "#323232" }}
                  href="#"
                >
                  Sign Up
                </a>
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navlogin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navlogin);
