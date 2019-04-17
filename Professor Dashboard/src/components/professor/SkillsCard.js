import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ProfileCard from "./ProfileCard";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

class SkillsCard extends React.Component {
  state = {
    dense: false,
    secondary: false
  };

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;

    return (
      <div style={{ marginTop: "2%" }}>
        <div style={{ float: "left", width: "40%", marginLeft: "20%" }}>
          <Paper>
            <div>
              <List className={styles.root}>
                <ListItem>
                  <ListItemText primary="Skills" />
                  <a href="#">
                    <i
                      class="fas fa-plus-circle"
                      style={{ color: "#12B6A6", fontSize: "20px" }}
                    />
                  </a>
                </ListItem>
                {/* <Divider /> */}
                <ListItem>
                  <ListItemText primary="NLP" />
                  <a href="#">
                    <i
                      class="fas fa-pen"
                      style={{ color: "#12B6A6", fontSize: "15px" }}
                    />
                  </a>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Deep Learning" />
                  <a href="#">
                    <i
                      class="fas fa-pen"
                      style={{ color: "#12B6A6", fontSize: "15px" }}
                    />
                  </a>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Python , Django" />
                  <a href="#">
                    <i
                      class="fas fa-pen"
                      style={{ color: "#12B6A6", fontSize: "15px" }}
                    />
                  </a>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Web Development" />
                  <a href="#">
                    <i
                      class="fas fa-pen"
                      style={{ color: "#12B6A6", fontSize: "15px" }}
                    />
                  </a>
                </ListItem>
                <Divider />
                <ListItem>
                  {/* <ListItemText primary="See More" /> */}
                  <Typography style={{ color: "#B1B1B1", paddingLeft: "40%" }}>
                    <a href="#" style={{ color: "#B1B1B1" }}>
                      See More
                    </a>
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Paper>
        </div>
        <div style={{ float: "right" }}>
          <ProfileCard />
        </div>
      </div>
    );
  }
}

SkillsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SkillsCard;
