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
        console.log(res)
        this.setState({truckData: res.dataValues})
      })
      .catch(err => console.log(err));

      // API.getTruck(1)
      //   .then(res => console.log(res));
  }


    render() {
      return (
        <div class="brickBackground">
          <Nav 
          currentPage="Approved Applications"
          />
          <h1>Whats UP</h1>
          {this.state.truckData.map (truck => {
            return (
              <h1>{truck.name}</h1>
            )
          })}

        </div>)
    }
  
  };
  
  export default Admin;