import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/splashPage";


import Admin from "./pages/admin";
import AdminTrucks from "./pages/admin/registeredTrucks";
import AdminUsers from "./pages/admin/registeredUsers";
import AdminActiveUsers from "./pages/admin/activeUsers";
import AdminOpenApp from "./pages/admin/openApplications";
import AdminDeniedApp from "./pages/admin/deniedApplications";
import AdminApprovedApp from "./pages/admin/approvedApplications";
import User from "./pages/user";
import Trucker from "./pages/trucker";

// import AppTwo from './pages/Signin/AppTwo';
import NavigationAuth from './pages/Signin/NavigationAuth';
import LandingPage from './pages/Signin/Landing';
import SignUpPage from './pages/Signin/SignUp';
import SignInPage from './pages/Signin/SignIn';
import PasswordForgetPage from './pages/Signin/PasswordForget';
import HomePage from './pages/Signin/Home';
import AccountPage from './pages/Signin/Account';
import AdminPage from './pages/Signin/Admin';

// CONSTANTS
import * as ROUTES from './constants/routes';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavigationAuth />

       <hr />

       <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
       <Route path={ROUTES.SIGN_IN} component={SignInPage} />
       <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
       <Route path={ROUTES.HOME} component={HomePage} />
       <Route path={ROUTES.ACCOUNT} component={AccountPage} />
       <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Switch>
        <Route exact path="/" component={Splash} />

        <Route exact path="/admin/dashboard" component={Admin} />
        <Route exact path="/admin/view/registered/trucks" component={AdminTrucks} />
        <Route exact path="/admin/view/registered/users" component={AdminUsers} />
        <Route exact path="/admin/view/active/users" component={AdminActiveUsers} />
        <Route exact path="/admin/view/applications/open" component={AdminOpenApp} />
        <Route exact path="/admin/view/applications/denied" component={AdminDeniedApp} />
        <Route exact path="/admin/view/applications/approved" component={AdminApprovedApp} />
        <Route exact path="/user/dashboard" component={User} />
        <Route exact path="/trucker/dashboard" component={Trucker} />
        <Route exact path="*" component={Splash} />
      </Switch>
    </Router>
  );
}


export default App;
