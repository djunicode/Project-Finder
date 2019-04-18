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
    button: {
        display: "flex",

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


    },
})

class Year extends Component {
    state = {
        year: "",
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
            >
                Year
            </InputLabel>
            <Select

                value={this.state.year}
                onChange={this.handleChange}
                input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="year"

                    />

                }
            >
                <MenuItem value={10}>F.E</MenuItem>
                <MenuItem value={20}>S.E</MenuItem>
                <MenuItem value={30}>T.E</MenuItem>
                <MenuItem value={40}>B.E</MenuItem>
            </Select>
        </FormControl>);
    }
}

export default withStyles(styles)(Year);