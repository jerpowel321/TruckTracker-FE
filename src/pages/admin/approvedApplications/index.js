import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";



class Admin extends Component {

    render() {
      return (
        <div class="approvedApp">
          <Nav 
          currentPage="Approved Applications"
          />
          <h1>Whats UP</h1>
        </div>)
    }
  
  };
  
  export default Admin;