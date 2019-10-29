import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../constants/routes';

const PasswordForgetPage = () => (
  <div className="yellowBug">
    <nav class="navbar navbar-expand-lg blackBg redText d-flex justify-content-end">
    <img className="logo alignLogo" src="https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" alt="TruckTracker Logo" />
    <div className="mr-2">
      <NavLink className="font redText" to="/">Sign In</NavLink>
      </div>
    </nav>
    <div className="d-flex justify-content-center">
      <div class="signInCard text-center  signInCard">
        <div class="card-body ">
          <div>
            <h1 className="redText largeTitles">Forgot Password</h1>
            <PasswordForgetForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (


      <form onSubmit={this.onSubmit} className="mt-3">
      <div className="row">
      <div className="col-sm-6">
       <b><label for="email" className="p-1 col-form-label float-right text-white mr-2"><i class="fas fa-envelope-square mr-2 text-white pl-1"></i>Email Address</label></b>
       </div>
       <div className="col-sm-4">
        <input className="mr-2"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder=""
        /> 
        </div>
        </div>
        <div className="row">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
        <button className="redBg text-white hvr-grow-shadow border border-dark mt-2 mb-4 p-2" disabled={isInvalid} type="submit">
          <b>Password Reset</b>
        </button>
        </div>
        </div>
        {error && <p>{error.message}</p>}
      </form>

    );
  }
}

const PasswordForgetLink = () => (
  <p className="mr-5 p-1 darkbackground">
    <Link to={ROUTES.PASSWORD_FORGET}><b>Forgot Password?</b></Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };