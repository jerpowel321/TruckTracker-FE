import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";



class Admin extends Component {

    render() {
      return (
        <div className="registeredTrucks">
          <Nav 
          currentPage="Registered Trucks"
          />
          <h1>Whats UP</h1>
        </div>)
    }
  
  };
  
  export default Admin;