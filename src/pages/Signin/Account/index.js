import React from 'react';
import Nav from "../../../components/Nav";
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import SignOutButton from '../../Signin/SignOut';



const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <Nav
           home="/trucker/dashboard"
           firstPage="/trucker/application"
           firstPageName="Application"
					 signOut={<SignOutButton />}
				/>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
    </AuthUserContext.Consumer>
    );

    const condition = authUser => !!authUser;
    
export default withAuthorization(condition)(AccountPage);