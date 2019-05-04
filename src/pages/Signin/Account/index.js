import React from 'react';
import Nav from "../../../components/Nav";
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import SignOutButton from '../../Signin/SignOut';



const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="snowFloodtruck">
        <Nav
           home="/trucker/dashboard"
           firstPage="/trucker/application"
           firstPageName="Application"
					 signOut={<SignOutButton />}
				/>
        
        <div className="accountDisplay container mt-5 p-5">
        <h1 className="largeTitles redText pt-3 text-center ">Account Profile </h1>
        <p>Email: {authUser.email}</p>
        <PasswordForgetForm />
        <PasswordChangeForm />
        </div>
      </div>
     
    )}
    </AuthUserContext.Consumer>
    );

    const condition = authUser => !!authUser;
    
export default withAuthorization(condition)(AccountPage);