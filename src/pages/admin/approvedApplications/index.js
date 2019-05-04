import { AuthUserContext, withAuthorization } from '../../Signin/Session';
import React, { Component } from "react";
import Nav from "../../../components/Nav";
import Container from "../../../components/admin/container";
import API from "../../../utils/API";
import SignOutButton from '../../Signin/SignOut';

class ApprovedApplication extends Component {

  state = {
    truckData: []
  }
  componentDidMount() {
    API.getAllTrucks()
      .then(res => {
        console.log("data:", res.data)
        this.setState({ truckData: res.data })
      })
      .catch(err => console.log(err));

  }
  render() {
    return (
      <div class="brickBackground">
        <Nav
          home="/admin/dashboard"
          currentPage="Approved Applications"
          signOut={<SignOutButton />}
        />
        <Container >
          <h1>Open Applications</h1>
          {this.state.truckData.map(truck => {
            return (
              <div key={truck.id}>
                <div className="" data-toggle="modal" data-target={`#exampleModalCenter${truck.id}`}>
                  <div class="card w-100 text-white">
                    <div class="card-header bg-dark">
                      <h2>{truck.businessName}</h2>
                    </div>
                    <div class="card-body bg-secondary">
                      <blockquote class="blockquote mb-0">
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

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ApprovedApplication);


