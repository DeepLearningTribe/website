import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: '0 1 1024px',
  },
});

export function Block({ classes, children, className }) {
  return (
    <div className={cx(classes.container, className)}>
      <div className={classes.innerContainer}>{children}</div>
    </div>
  );
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.shape({}).isRequired,
    innerContainer: PropTypes.shape({}).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

Block.defaultProps = {
  className: '',
};

export default withStyles(styles)(Block);
