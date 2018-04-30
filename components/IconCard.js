import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from 'material-ui/Paper';

const styles = ({ palette }) => ({
  container: {
    padding: '2rem',
  },
  icon: {
    color: palette.primary[500],
  },
  iconContainer: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0 40px',
  },
  iconBackground: {
    position: 'absolute',
  },
  title: {
    textAlign: 'center',
    margin: '20px 0',
  },
});

export function IconCard({ classes, className, children, title, icon }) {
  return (
    <Paper className={cx(classes.container, className)}>
      <div className={classes.iconContainer}>
        <img
          className={classes.iconBackground}
          src="/static/other/bg_icon.png"
          alt=""
        />
        <FontAwesomeIcon icon={icon} size="5x" className={classes.icon} />
      </div>
      <Typography variant="title" className={classes.title}>
        {title}
      </Typography>
      <Typography>{children}</Typography>
    </Paper>
  );
}

IconCard.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.shape({}).isRequired,
    innerContainer: PropTypes.shape({}).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string,
};

IconCard.defaultProps = {
  className: '',
};

export default withStyles(styles)(IconCard);
