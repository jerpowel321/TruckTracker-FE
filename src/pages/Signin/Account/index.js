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
         <div className=" d-flex justify-content-center">
        <div className="accountDisplay accountContainer mt-5 p-5">
        <h1 className="largeTitles redText pt-3 text-center ">Account Profile </h1>
        <p className="text-center">Email: {authUser.email}</p>
        <PasswordForgetForm />
        <PasswordChangeForm />
        </div>
      </div>
      </div>
     
    )}
    </AuthUserContext.Consumer>
    );

    const condition = authUser => !!authUser;
    
export default withAuthorization(condition)(AccountPage);