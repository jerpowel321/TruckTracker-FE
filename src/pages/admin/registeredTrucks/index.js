import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import Container from "../../../components/admin/container";
import API from "../../../utils/API"

class Admin extends Component {

  state = {
    truckData: []
  }
  componentDidMount(){
    API.getAllTrucks()
      .then(res => {
        console.log("data:", res.data)
        this.setState({ truckData: res.data })
      })
      .catch(err => console.log(err));
      // API.getTruck(1)
      //   .then(res => console.log(res));
  }

    render() {
      return (
        <div class="brickBackground">
          <Nav 
          currentPage="Registered Trucks"
          />
          <Container>
          {this.state.truckData.map(truck => {
            return (
              <div key={truck.id}>
                <div  data-toggle="modal" data-target={`#exampleModalCenter${truck.id}`}>
                </div>
                      <ul>
                      <h1 className="font red-text">{truck.businessName}</h1>
                      <h3>Businiess Information</h3>
                      <h5>
                      {truck.cuisine}
                        {truck.menu}
                      </h5>
                      <h3>Contact Information</h3>
                      <h5>Name: {truck.firstName} {truck.middleInitial}
                        {truck.lastName} <br />
                          Phone: {truck.phone} <br />
                          Address:  {truck.address} {truck.address2} {truck.city} {truck.state} {truck.zip}
                          Email: {truck.email}
                      </h5>
                     
                      </ul>
                </div>
            )
          })}
           </Container>

        </div>)
    }
  
  };
  
  export default Admin;