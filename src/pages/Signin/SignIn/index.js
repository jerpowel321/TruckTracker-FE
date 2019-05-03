import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../constants/routes';
import { NavLink } from "react-router-dom";
import Nav from "../../../components/Nav";

const SignInPage = () =>

  (
    <div className="brickBackground" >
      <nav className="navbar navbar-expand-lg navbar-light goldBg redText">
        <div className="justify-content-center">
          <img className="logo" src="https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" />
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        </div>
      </nav>
      <div className="d-flex justify-content-center">
        <div className="card w-50 bg-light  signInCard">
          <div className="card-body bg-light">
            <div className="" >
              <div className="">
                <h1 className="font text-center redText ">Trucker & Admin</h1>
                <h1 className="redText font text-center mr-5">Sign In</h1>
                <SignInForm />
                <PasswordForgetLink />
                <SignUpLink />
                <button className="bg-warning p-2 hvr-grow-shadow"><NavLink className=" redText" to="/user/dashboard">I am a User</NavLink></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form  onSubmit={this.onSubmit}>
        <b><label for="email" className="col-sm-4 col-form-label">Email Address</label></b>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Enter Email Address"
          id="email"
        /> <br></br>
        <b><label for="password" className="col-sm-4 col-form-label">Password</label></b>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Enter Password"
          id="password"
        /><br></br>
        <button className="redBg text-white p-2 hvr-grow-shadow m-2" disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };