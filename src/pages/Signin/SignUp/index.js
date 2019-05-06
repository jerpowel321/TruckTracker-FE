import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';


import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../constants/routes';
import * as ROLES from '../../../constants/roles';

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
  isAdmin: false,
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles,
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ACCOUNT);
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';


    return (
      <div className="whiteBackground">
        <nav class="navbar navbar-expand-lg navbar-light goldBg redText d-flex justify-content-around">
          <img className="logo" src="https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" />
        </nav>
        <div className="noMarginContainer signInCard">
          <form className="signUpForm" onSubmit={this.onSubmit}>
            <h1 className="redText largeTitles text-center">Sign Up</h1>

            <br></br>
            <b><label for="username" className="col-sm-5 col-form-label text-white"><i class="fas fa-address-card mr-2"></i>Full Name</label></b>


            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />



            <b><label for="email" className="col-sm-5 col-form-label text-white"><i class="fas fa-envelope-square mr-2"></i>Email Address</label></b>

            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />


            <br></br>
            <b><label for="password" className="col-sm-5 col-form-label text-white"><i class="fas fa-lock mr-2"></i>Password</label></b>


            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />

            <br></br>
            <b><label for="password" className="col-sm-5 col-form-label text-white"><i class="fas fa-user-lock mr-2"></i>Confirm Password</label></b>

            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />

            <label>
              Admin:
          <input
                name="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={this.onChangeCheckbox}
              />
            </label>

            {error && <p className="text-white darkbackground p-1">{error.message}</p>}


            <br></br>
            <br></br>
            <div className="float-right">
              <button className="btn btn-light btn-md text-monospace" disabled={isInvalid} type="submit"><span class="spinner-grow spinner-grow-sm"></span><strong>Sign Up</strong></button>
            </div>


            <br disabled={!isInvalid}></br>
            <br disabled={!isInvalid}></br>






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