import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../css/font-awesome.css";
import "../css/styles.css";
import { Grid } from "@material-ui/core";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },

  inputstyle: {
    borderRadius: 8,
    fontSize: 16,
    width: "100%",

    borderColor: "#d1d1d1",
    marginBottom: "3%",
    marginTop: "3%",
    "&:hover": {
      borderColor: "#12b6a6"
    }
  },
  cssLabel: {
    color: "#000000",
    fontSize: 16,
    "&$cssFocused": {
      color: "#12b6a6",
      fontSize: 16
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#12b6a6"
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#12b6a6"
    }
  },
  notchedOutline: {},
  button: {
    display: "flex",
    marginRight: "20%",
    color: "#12b6a6",
    borderColor: "#12b6a6",
    "&:hover": {
      borderColor: "#12b6a6"
    },
    padding: "10px 12px",
    fontSize: 24,
    marginTop: "2%",
    borderRadius: 8,
    textTransform: "none",
    width: "15%",
    marginLeft: "65%"
  }
});

class Login extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className="main-content">
        <h1 className="header-login">Log In</h1>
        <div className="login-page">
          <Grid container spacing={24}>
            <Grid item xs>
              <form className="form-width">
                <div className="label">
                  <TextField
                    className={classes.inputstyle}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                    label="Email"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </div>
                <div className="label">
                  <TextField
                    className={classes.inputstyle}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                    label="Password"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </div>

                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Log In
                </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
