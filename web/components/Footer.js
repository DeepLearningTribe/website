import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';
import { Block } from './';

const styles = ({ palette }) => ({
  container: {
    flex: 1,
    backgroundColor: palette.grey[200],
    padding: '50px 0',
  },
});

export function Footer({ classes }) {
  return (
    <div className={classes.container}>
      <Block>
        <Typography variant="body1">We care about your privacy.</Typography>
        <Typography variant="body1">
          Copyright © 2017-2018{' '}
          <a href="https://deeplearningtribe.com">Deep Learning Tribe</a>{' '}
          david@deeplearningtribe.com
        </Typography>
      </Block>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Footer);
