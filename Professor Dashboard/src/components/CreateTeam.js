import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HackathonForm from './HackathonForm';
import ProjectForm from './ProjectForm';

let hsk = [];
let psk = [];

// state = {
//     hname: '',
//     htlead: '',
//     hnom: '',
//     htd: '',
//     hskills: [],
//     pname: '',
//     ptlead: '',
//     pnom: '',
//     ptd: '',
//     pskills: []
// }

//     handlehClick = input => {
//         hsk.push(input);
//         this.setState({ hskills: hsk })
//     }


//     handlepClick = input => {
//         psk.push(input);
//         this.setState({ pskills: psk })
//     }

//     handleChange = input => e => {
//         this.setState({ [input]: e.target.value });
//     };
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CreateTeam extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="createTeam">
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Create Hackathon Team"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Create Project Team"
            />
            
          </Tabs>

          {value === 0 && <TabContainer><HackathonForm /></TabContainer>}
          {value === 1 && <TabContainer><ProjectForm /></TabContainer>}
          
        </div>
      </div>
    );
  }
}

CreateTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateTeam);
