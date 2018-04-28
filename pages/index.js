import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import isEmail from 'validator/lib/isEmail';
import withRoot from '../src/withRoot';
import { Newsletter, HeroCarousel, Navbar, Footer } from '../components';

const styles = () => ({
  container: {},
});

class Index extends React.Component {
  state = {
    newsletterEmail: '',
    isNewsletterValid: true,
    isDone: false,
    isLoading: false,
    isSuccess: false,
  };

  onNewsletterInputChange = e => {
    const { value: newsletterEmail } = e.target;
    const isNewsletterValid = isEmail(newsletterEmail);
    this.setState({ newsletterEmail, isNewsletterValid });
  };

  onNewsletterButtonClick = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false, isSuccess: true });
    }, 5000);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Navbar />
        <HeroCarousel />
        <Newsletter
          value={this.state.newsletterEmail}
          isValid={this.state.isNewsletterValid}
          isDone={this.state.isDone}
          isSuccess={this.state.isSuccess}
          isLoading={this.state.isLoading}
          onChange={this.onNewsletterInputChange}
          onClick={this.onNewsletterButtonClick}
        />
        <Footer />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.shape({
    classes: PropTypes.shape({
      container: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRoot(withStyles(styles)(Index));
