import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
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

class Navbar extends React.Component {
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

            <div
              style={{
                width: "30%",
                marginLeft: "5%",
                border: "1px solid #d1d1d1",
                borderRadius: 10,
                height: 59,
                backgroundColor: "rgba(237,237,237,0.57)"
              }}
            >
              <IconButton className={classes.IconButton} aria-label="Search">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search"
                style={{ height: 59, fontSize: 20, color: "#8b8b8b" }}
              />
            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography className={classes.navitem}>
                <a
                  style={{ textDecoration: "none", color: "#323232" }}
                  href="#"
                >
                  Find a Mentor
                </a>
              </Typography>
              <Typography className={classes.navitem}>
                <a
                  style={{ textDecoration: "none", color: "#323232" }}
                  href="#"
                >
                  Make a Team
                </a>
              </Typography>
              <Typography className={classes.navitem}>
                <a
                  style={{ textDecoration: "none", color: "#323232" }}
                  href="#"
                >
                  Events
                </a>
              </Typography>
              <Typography className={classes.navitem}>
                <a
                  style={{ textDecoration: "none", color: "#12b6a6" }}
                  href="#"
                >
                  {this.state.user} <span className="fa fa-user" />
                </a>
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
