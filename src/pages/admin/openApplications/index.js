

import { withAuthorization } from '../../Signin/Session';
import * as ROLES from '../../../constants/roles';

import { compose } from 'recompose';

import { withFirebase } from '../../Signin/Firebase';



import React, { Component } from "react";
import Nav from "../../../components/Nav";
import Container from "../../../components/admin/container";
import API from "../../../utils/API"
import { transformFileSync } from "@babel/core";
import SignOutButton from '../../Signin/SignOut';
// Cyrus Page Dont Touch

class Admin extends Component {
  state = {
    truckData: []
  }

  componentDidMount() {
    API.getOpenApplications()
      .then(res => {
        console.log("data:", res.data)
        this.setState({ truckData: res.data })
      })
      .catch(err => console.log(err));
  }

  approveApplication(id) {
    let truckData = [...this.state.truckData]
    truckData.forEach(truck => {
      if (truck.id === id){
        truck.approved = true;
        truck.applicationOpen = false;
        console.log(truck)
        API.updateTruck(truck.id, truck.approved, truck.applicationOpen)
        .then(res => {
          console.log("apple")
          this.setState({
            truckData
          })
          console.log(truckData)
        })
      }
    })
  };

  closeApplication(id) {
    let truckData = [...this.state.truckData]
    truckData.forEach(truck => {
      if (truck.id === id){
        truck.approved = false;
        truck.applicationOpen = false;
        console.log(truck)
        API.updateTruck(truck.id, truck.approved, truck.applicationOpen)
        .then(res => {
          console.log("apple")
          this.setState({
            truckData
          })
          console.log(truckData)
        })
      }
    })
  };



  render() {
    console.log(this.state.truckData)
    return (
      <div className="openApplicationsBackground">
        <Nav
         home="/admin/dashboard"
          signOut={<SignOutButton />}
        />
        <Container >
          <h1 className="largeTitles redText text-center">Open Applications</h1>
          {this.state.truckData.map(truck => {
            if (truck.applicationOpen){
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
                        Website: <a href={`${truck.website}`} target="_blank">Link</a><br />
                        Cuisine: {truck.cuisine}<br />
                        Menu: <a href={`${truck.menu}`} target="_blank">Link</a><br />
                        Owner: {truck.firstName} {truck.middleInitial} {truck.lastName}<br />
                        Email: {truck.email}<br />
                        Phone: {truck.phone}<br />
                        Address: {truck.address} {truck.address2}, {truck.city}, {truck.state} {truck.zip}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary approve" data-dismiss="modal" onClick={() => this.approveApplication(truck.id)}>Approve</button>
                        <button type="button" className="btn btn-danger reject" data-dismiss="modal" onClick={() => this.closeApplication(truck.id)}>Reject</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          }
          
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
)(Admin);