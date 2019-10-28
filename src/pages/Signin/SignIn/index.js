import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../constants/routes';
import { NavLink } from "react-router-dom";


const SignInPage = () =>

  (
    <div className="redDoor" >
      <nav className="navbar sticky-top navbar-expand-lg blackBg redText d-flex justify-content-around">
        <img className="logo" src="https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" alt="TruckTracker Logo" />
      </nav>
      <div className="d-flex justify-content-center">
        <div className="div  signInCard">
          <div className="div ">
          <div><i class="fas fa-lg fa-utensils"></i></div>


            <h1 className="redText oswaldHeader text-center">Looking for food trucks?</h1>
            <div className="text-center">
              <button className="btn btn-md hvr-grow-shadow p-2 m-2 goldBg border-dark "><NavLink className=" text-white" to="/user/dashboard"><b>Yes! Take me There.</b></NavLink></button>
            </div>
          </div>
        </div>
      
      
      
      </div>
      <div className="d-flex justify-content-center">
        <div className="div  signInCard">
          <div className="div ">
            <h1 className="redText oswaldHeader text-center mr-5">Sign In</h1>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <SignInGoogle />
              <SignInFacebook />
            </div>

            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );

const INITIAL_STATE = {
  email: '',
  password: '',
  isAdmin: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password, isAdmin } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        if (isAdmin) {
          this.props.history.push(ROUTES.ADMIN)
        }
        else {
          this.props.history.push(ROUTES.TRUCKER);
        }
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };


  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const { email, password, isAdmin, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div>

        <h3 className="hr-text-4">
          <span className="hr-text-5">OR</span>
        </h3>

        <div className="hr-text-2">
          
        </div>

    



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

          <b><label for="password" className="col-sm-5 col-form-label text-white"><i class="fas fa-star mr-2"></i>Admin</label></b>

          <input
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />

          <div className="">
            <div className="row mt-2 ">

              <button name="button" value="admin" id="adminSubmit" className="btn btn-md redBg text-white p-2 hvr-grow-shadow ml-5 mt-2 border-dark" disabled={isInvalid} onClick={this.onSubmit} type="submit">
                <b>Sign In</b>
              </button>


            </div>
          </div>
          {error && <p className="text-white darkbackground p-1 mt-3"><b>{error.message}</b></p>}
        </form>

        <br></br>

        <PasswordForgetLink /> <br></br>
        <SignUpLink />

      </div>
    );
  }
}


class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {},
          });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.TRUCKER);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>

        <div className="card darkbackground" style={{ width: '7rem' }} >
          {/* <div style={{ height: '60vh', width: '50%', marginLeft: "25%" }}> */}
          <i className="fab fa-google fa-4x text-primary mx-4 hvr-grow-shadow" onClick={this.onSubmit} ></i>
          {/* <div className="card-body" style={{ height: '4rem' }}> */}
          <b><p className="card-text text-center text-white">Sign In with Google</p></b>
          {/* </div> */}
        </div>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: {},
          });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.TRUCKER);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;


    return (
      <form onSubmit={this.onSubmit}>

        <div className="card darkbackground" style={{ width: '7rem' }} >
          <i className="fab fa-facebook-square fa-4x text-primary mx-4 hvr-grow-shadow" onClick={this.onSubmit} ></i>
          <b><p className="card-text text-center text-white">Sign In with Facebook</p></b>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    );


  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

export default SignInPage;

export { SignInForm, SignInGoogle, SignInFacebook };