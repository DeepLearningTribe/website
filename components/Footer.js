import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  container: {
    flexGrow: 1,
  },
};

export function Footer({ classes }) {
  return <div className={classes.container} />;
}

Footer.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Footer);
