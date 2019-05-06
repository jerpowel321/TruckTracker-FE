import { withAuthorization } from '../../Signin/Session';
import * as ROLES from '../../../constants/roles';

import { compose } from 'recompose';

import { withFirebase } from '../../Signin/Firebase';
import React, { Component } from "react";
import Nav from "../../../components/Nav";
// import Container from "../../../components/admin/container";
// import API from "../../../utils/API"
import Chart from "../../../components/admin/chart";
import { Bar, Line, Pie } from "react-chartjs-2";
import SignOutButton from '../../Signin/SignOut';

class RegisteredTrucks extends Component {


    render() {
      return (
        <div className="">
        <Nav
          home="/admin/dashboard"
          signOut={<SignOutButton />}
        />
        <div className="registeredTrucksBackground">
        <div className="d-flex justify-content-center">
        <div className="w-75 bg-white text-center mt-5">
        <Chart />
        </div>
        </div>
        </div>
      
      </div>)
    }
  
  };

  const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withAuthorization(condition),
  withFirebase,
)(RegisteredTrucks);

// export default RegisteredTrucks