import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  container: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export function Navbar({ classes }) {
  return (
    <div className={classes.container}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.flex} variant="title" color="inherit">
            Deep Learning Tribe
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.shape({
    classes: PropTypes.shape({
      container: PropTypes.string.isRequired,
      flex: PropTypes.string.isRequired,
      menuButton: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(Navbar);
