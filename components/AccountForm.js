import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from 'material-ui';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import cx from 'classnames';

const styles = () => ({
  container: {
    padding: '30px 20px',
  },
});

export function AccountForm({
  title,
  email,
  password,
  isEmailValid,
  isPasswordValid,
  message,
  onSubmit,
  onEmailChange,
  onPasswordChange,
  className,
  classes,
}) {
  return (
    <Paper
      component="form"
      className={cx(classes.container, className)}
      noValidate
      autoComplete="off"
    >
      <Typography variant="title" paragraph>
        {title}
      </Typography>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            className={classes.email}
            type="email"
            value={email}
            onChange={onEmailChange}
            fullWidth
            error={!isEmailValid}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="Password"
            className={classes.email}
            type="password"
            value={password}
            onChange={onPasswordChange}
            fullWidth
            error={!isPasswordValid}
          />
        </Grid>
        {message && (
          <Grid item xs={12}>
            <Typography color="error">{message}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button onClick={onSubmit} variant="raised" color="primary" fullWidth>
            Create Secure Account
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

AccountForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  isPasswordValid: PropTypes.bool.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(AccountForm);
