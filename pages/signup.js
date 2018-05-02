import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import isEmail from 'validator/lib/isEmail';
import { AccountForm, Layout } from '../components';
import withRoot from '../src/withRoot';

const styles = () => ({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: '0 1 20rem',
    margin: '0 10px 50px 10px',
  },
});

export class Signup extends Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
  };

  state = {
    email: '',
    isEmailValid: true,
    password: '',
    isPasswordValid: true,
    message: '',
  };

  onEmailChange = e => {
    const { value: email } = e.target;
    this.setState({ email, isEmailValid: isEmail(email), message: '' });
  };

  onPasswordChange = e =>
    this.setState({ password: e.target.value, message: '' });

  onSubmit = e => {
    e.preventDefault();
    const { email, password, isEmailValid, isPasswordValid } = this.state;
    if (!isEmailValid) {
      return this.setState({ message: 'Your email does not seem to be valid' });
    }
    return this.setState({
      message: `
        Email: ${email}
        Password: ${password}
        Email Valid: ${isEmailValid}
        Password Valid: ${isPasswordValid}
      `,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      email,
      password,
      isEmailValid,
      isPasswordValid,
      message,
    } = this.state;
    return (
      <Layout>
        <div className={classes.container}>
          <AccountForm
            className={classes.form}
            title="Create Your Account"
            message={message}
            email={email}
            isEmailValid={isEmailValid}
            password={password}
            isPasswordValid={isPasswordValid}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            onSubmit={this.onSubmit}
          />
        </div>
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(Signup));
