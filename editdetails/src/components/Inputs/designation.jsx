import React, { Component } from 'react';
import classNames from "classnames";


import { Grid, FormControl, Select, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";


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
        borderColor: "#12b6a6"
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

class Designation extends Component {
    state = {
        designation: "",
        labelWidth: 0
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { classes } = this.props
        return (<FormControl
            variant="outlined"
            className={classNames(
                classes.formControl,
                classes.inputstyle
            )}

        >
            <InputLabel
                style={{ color: "black" }}
                ref={ref => {
                    this.InputLabelRef = ref;
                }}
                htmlFor="outlined-Designation-simple"
            >
                Designation
            </InputLabel>
            <Select

                value={this.state.designation}
                onChange={this.handleChange}
                input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="designation"
                        id="outlined-Designation-simple"

                    />

                }
            >
                <MenuItem value={10}>Teacher</MenuItem>
                <MenuItem value={20}>Student</MenuItem>
            </Select>
        </FormControl>);
    }
}

export default withStyles(styles)(Designation);