import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../constants/routes';

const PasswordForgetPage = () => (
  <div className="brickBackground">
    <nav class="navbar navbar-expand-lg navbar-light goldBg redText">
      <img src="https://cors-anywhere.herokuapp.com/https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" />
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      </div>
    </nav>
    <div className="d-flex justify-content-center">
      <div class="card w-50 text-center bg-white signInCard">
        <div class="card-body bg-white">
          <div>
            <h1 className="redText font">PasswordForget</h1>
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


      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>

    );
  }
}

const PasswordForgetLink = () => (
  <p >
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };