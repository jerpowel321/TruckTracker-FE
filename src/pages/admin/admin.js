import { withAuthorization } from '../Signin/Session';
import * as ROLES from '../../constants/roles';

import { compose } from 'recompose';

import { withFirebase } from '../Signin/Firebase';


import React, { Component } from "react";
import Nav from "../../components/Nav";
import Card from "../../components/admin/card";
import SignOutButton from '../Signin/SignOut';

import "./style.css";

class Admin extends Component {


  render() {
    return (
      <div className="adminDashboard">
        <Nav
          home="/admin/dashboard"
          signOut={<SignOutButton />} />
        <div className="d-flex justify-content-center">
          <div className="adminContainer">
            <div className="row">
              <div className="col-sm-6 d-flex justify-content-center">
                <Card
                  image="https://images.unsplash.com/photo-1500338427510-5deb175987d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1354&q=80"
                  title="Registered Trucks"
                  // number={20}
                  icon="fa-truck"
                  buttonText="View Trucks"
                  imageClass="truckImg w-100"
                  link="/admin/view/registered/trucks"

                />
              </div>
              {/* <Card
            image="https://cdn0.iconfinder.com/data/icons/glyph-user-group-icon-set-1-ibrandify/512/40-512.png"
            title="Registered Users"
            number={10}
            icon="fa-user"
            buttonText="View Users"
            imageClass="userImg"
            link="/admin/view/registered/users"
          /> */}
              <div className="col-sm-6 d-flex justify-content-center">
                <Card
                  image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  title="Open Applications"
                  // number={5}
                  icon="fa-clipboard"
                  buttonText="Open Applications"
                  imageClass="openImg w-100"
                  link="/admin/view/applications/open"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-6 d-flex justify-content-center">
                <Card
                  image="https://www.greensfelder.com/assets/htmlimages/blogs/2018/denied-on-wooden-blocks-rszd.png"
                  title="Denied Applications"
                  // number={3}
                  icon="fa-thumbs-down"
                  buttonText="View Denied"
                  imageClass="deniedImg"
                  link="/admin/view/applications/denied"
                />
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <Card
                  image="https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Approved Applications"
                  // number={5}
                  icon="fa-thumbs-up"
                  buttonText="View Approved"
                  imageClass="approvedImg"
                  link="/admin/view/applications/approved"
                />
              </div>
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
)(Admin);