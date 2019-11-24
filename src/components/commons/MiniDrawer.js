import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Home from '@material-ui/icons/Home';
import ViewList from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const drawerWidth = 250;

const styles = (theme) => ({
  drawerContainer: {
    backgroundImage: 'linear-gradient(to bottom right, #8547c6, #bf63e6)',
    height: '100vh'
  },
  drawerPaper: {
    backgroundImage: 'linear-gradient(to bottom right, #8547c6, #bf63e6)',
    color: 'white',
    position: 'relative',
    height: '100vh',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerInner: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64
    }
  },
  avatar: {
    margin: '10% auto',
    border: '10px #3f1f62 solid'
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

const MiniDrawer = (props) => {
  let { navDrawerOpen } = props;
  const classes = props.classes;

  return (
    <Drawer
      className={classes.drawerContainer}
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose)
      }}
      open={navDrawerOpen}
    >
      <Divider />
      <div className={classes.root}>
        <Avatar alt="User" src="/img/avatar5.jpg" className={classNames(classes.avatar, classes.bigAvatar)} />
      </div>
      <List>
        <div className="drawer-title">
          <Divider />
          <Typography type="title" align="center">
            Candidates
          </Typography>
          <Divider />
        </div>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/candidate">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Consult" />
        </ListItem>{' '}
        <ListItem button component={Link} to="/list">
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="List" />
        </ListItem>
      </List>
    </Drawer>
  );
};

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  navDrawerOpen: PropTypes.bool
};

export default withStyles(styles)(MiniDrawer);
