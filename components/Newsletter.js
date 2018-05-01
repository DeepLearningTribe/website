import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { CircularProgress } from 'material-ui/Progress';
import { darkTheme } from '../src/getPageContext';

const styles = () => ({
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/static/images/newsletter.jpg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  innerContainer: {
    flex: '1',
    maxWidth: '800px',
    minHeight: '33rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '8rem 0',
  },
  successContainer: {
    flex: '1',
    maxWidth: '800px',
    minHeight: '33rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2.8rem',
  },
});

export function Newsletter({
  classes,
  value,
  onChange,
  onClick,
  isValid,
  isLoading,
  isSuccess,
}) {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <div className={classes.outerContainer}>
        {isSuccess ? (
          <div className={classes.successContainer}>
            <Typography variant="headline" className={classes.title}>
              Success!
            </Typography>
            <Typography>
              You have subscribed to the most amazing deep learning newsletter
              ever!
            </Typography>
          </div>
        ) : (
          <div className={classes.innerContainer}>
            <Typography variant="headline" className={classes.title}>
              Join our newsletter!
            </Typography>
            <Typography>
              Sign up today for free and be the first to get notified on our new
              tutorials and blog posts!
            </Typography>
            <FormControl
              className={classes.formControl}
              error={!isValid}
              aria-describedby={isValid ? 'email-text' : 'email-error-text'}
            >
              <InputLabel htmlFor="newsletter-email">
                Enter Your Email
              </InputLabel>
              <Input id="newsletter-email" value={value} onChange={onChange} />
              {!isValid && (
                <FormHelperText id="newsletter-email">
                  Please, check your email
                </FormHelperText>
              )}
            </FormControl>
            <Button
              variant="raised"
              color="primary"
              size="large"
              className={classes.button}
              onClick={onClick}
            >
              {isLoading ? (
                <CircularProgress color="white" size={30} />
              ) : (
                'Subscribe Now!'
              )}
            </Button>
          </div>
        )}
      </div>
    </MuiThemeProvider>
  );
}

Newsletter.propTypes = {
  classes: PropTypes.shape({
    outerContainer: PropTypes.string.isRequired,
    innerContainer: PropTypes.string.isRequired,
    successContainer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Newsletter);
