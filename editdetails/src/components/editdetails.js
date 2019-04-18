import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Save from "./Buttons/save";
import Designation from "./Inputs/designation"
import Year from "./Inputs/year";
import Name from "./Inputs/name";
import { Grid } from '@material-ui/core';
import Description from "./Inputs/description"

const styles = theme => ({

    title: {
        marginLeft: "20%"
    },
    inputimage: {
        verticalAlign: "middle",
        marginTop: "40%",
        height: "40%",
        backgroundColor: "white",
        marginLeft: "20%",
        maxWidth: "160px",
        backgroundColor: "#12b6a6",
        borderRadius: "50%",
        borderColor: "black",
    }


})

const DialogTitle = withStyles(theme => ({
    root: {
        height: "40px",
        fontSize: "34px",
        textAlign: "center",
        paddingBottom: theme.spacing.unit * 2,
    },
    closeButton: {
        color: "#12b6a6",
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,

    },

}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography className={classes.root} >{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {

        marginRight: "10%",
        padding: theme.spacing.unit * 2,
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {

        marginRight: "10%",
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);

class Editdetails extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props
        return (
            <div>
                <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                    Open dialog
        </Button>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                    maxWidth='md'
                    fullWidth={true}
                    style={{ boxShadow: "0px 3px 6px black" }}
                >
                    <DialogTitle class={classes.title} id="customized-dialog-title" onClose={this.handleClose}>
                        Edit details
          </DialogTitle>
                    <DialogContent >
                        <Grid container spacing={24}>
                            <Grid item xs={4}>

                                <div className={classes.inputimage}>

                                </div>

                            </Grid>
                            <Grid item xs={8}>

                                <Name />
                                <Designation />
                                < Year />
                                < Description />

                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions>

                        <Save />

                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}

export default withStyles(styles)(Editdetails);