import React, { Component } from "react";

import "../css/font-awesome.css";
import "../css/styles.css";
import { Grid, FormControl, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    textAlign: "left",
    width: "100%",
    height: 57,
    fontSize: 20
  }
});
class Signup extends Component {
  state = {
    designation: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="main-content">
        <h1 className="header-login">Sign Up</h1>
        <div className="signup-page">
          <Grid container spacing={16}>
            <Grid item xs>
              <form className="form-width">
                <div className="label">
                  <h5 className="label-input">Name:</h5>
                  <input required type="text" className="input-style" />
                </div>
                <div className="label">
                  <h5 className="label-input">Email:</h5>
                  <input required type="password" className="input-style" />
                </div>
                <div className="label">
                  <h5 className="label-input">Designation:</h5>
                  <div
                    className="input-style"
                    style={{ width: "auto", textAlign: "left" }}
                  >
                    <FormControl className={classes.formControl}>
                      <Select
                        value={this.state.designation}
                        onChange={this.handleChange}
                        displayEmpty
                        name="designation"
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="Teacher">Teacher</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="label">
                  <h5 className="label-input">Sap_ID:</h5>
                  <input required type="text" className="input-style" />
                </div>
                <div className="label">
                  <h5 className="label-input">Year:</h5>
                  <input
                    required
                    type="text"
                    className="input-style"
                    style={{ width: "10%" }}
                  />
                </div>
                <div className="label">
                  <h5 className="label-input">Password:</h5>
                  <input required type="password" className="input-style" />
                </div>
                <div className="label1">
                  <h5 className="label-input1">Confirm Password:</h5>
                  <input required type="password" className="input-style1" />
                </div>
                <input
                  required
                  type="submit"
                  value="Sign Up"
                  className="submit-style1"
                />
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
