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
    <div className="redDoor" >
      <nav className="navbar navbar-expand-lg goldBg redText d-flex justify-content-around">
          <img className="logo" src="https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" />
      </nav>
      <div className="d-flex justify-content-center">
        <div className="div  signInCard">
        <div className="div ">
                <h1 className="redText largeTitles text-center">Looking for food trucks?</h1>
                <div className="text-center">
                <button className="bg-warning p-2 hvr-grow-shadow p-2 border-dark"><NavLink className=" redText" to="/user/dashboard"><b>Yes! Take me There.</b></NavLink></button>
              </div>
        </div>
      </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="div  signInCard">
          <div className="div ">
                <h1 className="redText largeTitles text-center mr-5">Sign In</h1>
                <SignInForm />
                
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

  onSubmitTrucker = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.TRUCKER);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onSubmitAdmin = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ADMIN);
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
      <div>
      <form className="mt-3" >
        <b><label for="email" className="col-sm-5 col-form-label text-white"><i class="fas fa-envelope-square mr-2"></i>Email Address</label></b>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Enter Email Address"
          id="email"
        /> <br></br>
        <b><label for="password" className="col-sm-5 col-form-label text-white"><i class="fas fa-lock mr-2"></i>Password</label></b>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Enter Password"
          id="password"
        />
        <div>
        <div className="row mt-2">
        <div className="col-sm-5 ">
        <button name="button" value="trucker" id="truckerSubmit" className="redBg text-white p-2 hvr-grow-shadow ml-5 mt-2 border-dark float-right" disabled={isInvalid} onClick={this.onSubmitTrucker} type="submit">
        <b>Sign In</b>
        </button><br></br>
        <p className="text-white text-center float-right mt-1">I'm a Trucker.</p>
        </div>
        <div className="col-sm-5 ">
        <button name="button" value="admin" id="adminSubmit" className="redBg text-white p-2 hvr-grow-shadow ml-5 mt-2 border-dark" disabled={isInvalid} onClick={this.onSubmitAdmin} type="submit">
        <b>Sign In</b>
        </button><br></br>
        <p className="text-white ml-5">I'm an Admin.</p>
        </div>
        </div>
        </div>
        {error && <p className="text-white darkbackground p-1"><b>{error.message}</b></p>}
      </form>
      
      <PasswordForgetLink /> <br></br>
      <SignUpLink />
  
    </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };