import React, { Component } from "react";
import Nav from "../../../components/Nav";
import Container from "../../../components/admin/container";
import API from "../../../utils/API";


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
          home="/admin/dashboard"
          currentPage="Approved Applications"
          />
          <h1>Whats UP</h1>
    

        </div>)
    }
  
  };
  
  export default Admin;