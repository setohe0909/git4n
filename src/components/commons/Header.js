import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 250;

const styles = (theme) => ({
  appBar: {
    background: '#fff',
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 45
  },
  menuButtonShift: {
    marginLeft: -15
  },
  flex: {
    flex: 1
  }
});

const Header = (props) => {
  return (
    <div>
      <AppBar className={classNames(props.classes.appBar, props.navDrawerOpen && props.classes.appBarShift)}>
        <Toolbar>
          <IconButton
            aria-label="Menu"
            onClick={props.handleToggleDrawer}
            className={classNames(
              !props.navDrawerOpen && props.classes.menuButton,
              props.navDrawerOpen && props.classes.menuButtonShift
            )}
          >
            <MenuIcon />
          </IconButton>
          <div className="title">
            <span>Git4n</span>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
