import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import Container from "../../../components/admin/container";


class Admin extends Component {

    render() {
      return (
        <div class="brickBackground">
          <Nav 
          currentPage="Approved Applications"
          />
          <h1>Whats UP</h1>
        </div>)
    }
  
  };
  
  export default Admin;