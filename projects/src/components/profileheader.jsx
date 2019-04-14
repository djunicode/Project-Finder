import React, { Component } from "react";
import "../css/styles.css";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const styles = () => ({
  headerText: {
    color: "white",
    fontWeight: 400,
    fontSize: "64px",
    '@media screen and (max-width:800px)': {
      fontSize: "52px"
    }

  }
})
class ProfileHeader extends Component {

  state = {};
  render() {
    const { classes } = this.props
    return (

      < div className="profile-header  " >
        <h2 className={classes.headerText}>
          Projects & Hackathons
        </h2>
      </div >
    );
  }
}
ProfileHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileHeader);
