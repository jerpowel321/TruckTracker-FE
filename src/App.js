import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Admin from "./pages/admin";
import AdminTrucks from "./pages/admin/registeredTrucks";
import AdminUsers from "./pages/admin/registeredUsers";
import AdminOpenApp from "./pages/admin/openApplications";
import AdminDeniedApp from "./pages/admin/deniedApplications";
import AdminApprovedApp from "./pages/admin/approvedApplications";
import User from "./pages/user";
import Trucker from "./pages/trucker";
import TruckerApplication from "./pages/trucker/Food Truck Application";

// Auth section

import SignUpPage from './pages/Signin/SignUp';
import SignInPage from './pages/Signin/SignIn';
import PasswordForgetPage from './pages/Signin/PasswordForget';
import AccountPage from './pages/Signin/Account';

// CONSTANTS
import * as ROUTES from './constants/routes';
import { withAuthentication } from './pages/Signin/Session';



const App = () => (
  
  <Router>
    <div>
      {/* <Navigation /> */}

      
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />

      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={Admin} />
     
       </div>
      <Switch>
  

   
        <Route exact path="/admin/view/registered/trucks" component={AdminTrucks} />
        <Route exact path="/admin/view/registered/users" component={AdminUsers} />
        <Route exact path="/admin/view/applications/open" component={AdminOpenApp} />
        <Route exact path="/admin/view/applications/denied" component={AdminDeniedApp} />
        <Route exact path="/admin/view/applications/approved" component={AdminApprovedApp} />
        <Route exact path="/user/dashboard" component={User} />
        <Route exact path="/trucker/dashboard" component={Trucker} />
        <Route exact path="/trucker/application" component={TruckerApplication} />

      </Switch>
    </Router>
  );

//   LOOK AT FIREBASE FOR ERROR 
// App.firebase = withFirebase


export default withAuthentication(App);