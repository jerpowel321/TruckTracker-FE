
import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../../constants/routes';


import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav class="navbar navbar-expand-lg navbar-light goldBg redText">
    <a class="navbar-brand font redText mr-5">Logo</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        
        
        <li class="nav-item active">
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li class="nav-item active">
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li class="nav-item active">
          <SignOutButton />
        </li>
      </ul>
    </div>
  </nav>
);


//Once signedIn trucker/dashboard

const NavigationNonAuth = () => (

  <nav class="navbar navbar-expand-lg navbar-light goldBg redText">
    <a class="navbar-brand font redText mr-5">Logo</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navigation;
