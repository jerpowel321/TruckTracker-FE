import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../constants/routes';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log(authUser)
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("trucker/application");
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';


    return (
      <div className="whiteBackground">
          <nav class="navbar navbar-expand-lg navbar-light goldBg redText">
      <img src="https://cors-anywhere.herokuapp.com/https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" />
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      </div>
    </nav>
      <div className="noMarginContainer">
      <form className="signUpForm" onSubmit={this.onSubmit}>
      <h1 className="redText largeTitles text-center">Sign Up</h1>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
      </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p className="text-white darkbackground p-1">
    Don't have an account?   <Link to={ROUTES.SIGN_UP}> <b>Sign Up</b></Link>
  </p>
);


const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };