import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';

const styles = () => ({
  container: {
    position: 'relative',
  },
  main: {
    position: 'absolute',
    bottom: 0,
  },
  shadow: {
    fontWeight: 700,
    opacity: 0.1,
    paddingLeft: '1rem',
    userSelect: 'none',
    textAlign: 'left',
  },
});

export function Title({ classes, className, children }) {
  return (
    <div className={cx(classes.container, className)}>
      <Typography variant="display2" className={classes.shadow}>
        {children}
      </Typography>
      <Typography variant="headline" className={classes.main}>
        {children}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.shape({}).isRequired,
    innerContainer: PropTypes.shape({}).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};

export default withStyles(styles)(Title);
