import React, { Component } from "react";

import "../css/font-awesome.css";
import "../css/styles.css";
import { Grid } from "@material-ui/core";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="main-content">
        <h1 className="header-login">Log In</h1>
        <div className="login-page">
          <Grid container spacing={10}>
            <Grid item xs>
              <form className="form-width">
                <div className="label">
                  <h5 className="label-input">Email:</h5>
                  <input required type="text" className="input-style" />
                </div>
                <div className="label">
                  <h5 className="label-input">Password:</h5>
                  <input required type="password" className="input-style" />
                </div>

                <input
                  required
                  type="submit"
                  value="Log In"
                  className="submit-style "
                />
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Login;
