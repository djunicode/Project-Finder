import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
const styles = theme => ({
    select: {
        "&:before": {
            borderColor: "#d1d1d1"
        },
        "&:after": {
            borderColor: "#12b6a6"
        }
    },
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        width: "100%",
        textAlign: "left",
        color: "#000000",
        borderColor: "blue"
    },
    selectEmpty: {
        textAlign: "left",
        width: "100%",
        height: 50,
        fontSize: 20
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },

    inputstyle: {
        borderRadius: 8,
        fontSize: 16,
        width: "100%",
        color: "#000000",
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
})

class Name extends Component {
    state = {}
    render() {
        const { classes } = this.props;
        return (<TextField
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
            label="Name"
            variant="outlined"
            id="custom-css-outlined-input"
        />);
    }
}

export default withStyles(styles)(Name);