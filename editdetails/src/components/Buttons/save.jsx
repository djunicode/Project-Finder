import React, { Component } from 'react';
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
const styles = theme => ({
    button: {
        display: "flex",

        color: "#12b6a6",
        borderColor: "#12b6a6",
        "&:hover": {
            borderColor: "#12b6a6"
        },
        padding: "10px 12px",
        fontSize: 24,
        marginBottom: "2%",
        borderRadius: 8,
        textTransform: "none",
        width: "20%",
        height: 52,
        lineHeight: "1.5",





    },
})
class Save extends Component {
    state = {}
    render() {
        const { classes } = this.props
        return (<Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.button}
        >
            Save
          </Button>);
    }
}

export default withStyles(styles)(Save);