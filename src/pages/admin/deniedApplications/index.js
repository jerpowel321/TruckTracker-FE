
import { withAuthorization } from '../../Signin/Session';
import * as ROLES from '../../../constants/roles';

import { compose } from 'recompose';

import { withFirebase } from '../../Signin/Firebase';


import React, { Component } from "react";
import Nav from "../../../components/Nav";
import Container from "../../../components/admin/container";
import SignOutButton from '../../Signin/SignOut';
import API from "../../../utils/API";


class DeniedApplication extends Component {

  state = {
    truckData: []
  }
  componentDidMount() {
    API.getDeniedApplications()
      .then(res => {
        console.log("data:", res.data)
        this.setState({ truckData: res.data })
      })
      .catch(err => console.log(err));

  }
  render() {
    return (
      <div class="deniedBackground">
        <Nav
          home="/admin/dashboard"
          // currentPage="Denied Applications"
          signOut={<SignOutButton />}
        />
        <Container >
        <h1 className="largeTitles redText text-center">Denied Applications</h1>
          {this.state.truckData.map(truck => {
            return (
              <div key={truck.id}>
                <div className="" data-toggle="modal" data-target={`#exampleModalCenter${truck.id}`}>
                  <div className="card w-100 text-muted">
                    <div className="card-header goldBg">
                      <h2 className="font redText">{truck.businessName}</h2>
                    </div>
                    <div className="card-body bg-white">
                      <blockquote className="blockquote mb-0">
                        Owner: {truck.firstName} {truck.middleInitial} {truck.lastName}<br />
                        Phone: {truck.phone}<br />
                        Email: {truck.email}
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id={`exampleModalCenter${truck.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">{truck.businessName}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Website: <a href={`${truck.website}`} target="_blank" rel="noopener noreferrer" >Link</a><br />
                        Cuisine: {truck.cuisine}<br />
                        Menu: <a href={`${truck.menu}`} target="_blank" rel="noopener noreferrer" >Link</a><br />
                        Owner: {truck.firstName} {truck.middleInitial} {truck.lastName}<br />
                        Email: {truck.email}<br />
                        Phone: {truck.phone}<br />
                        Address: {truck.address} {truck.address2}, {truck.city}, {truck.state} {truck.zip}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          })}
        </Container>
      </div>
    )
  }

};


const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withAuthorization(condition),
  withFirebase,
)(DeniedApplication);
