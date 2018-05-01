import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Navbar } from './';

const styles = () => ({
  container: {
    fontFamily: "'Lato', sans-serif",
    textAlign: 'justify',
  },
});

export function Layout({ children, classes }) {
  return (
    <div className={classes.container}>
      <Navbar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Layout);
