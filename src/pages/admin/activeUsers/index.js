import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";



class Admin extends Component {
  // $(document).ready(function() {
  //   function getActiveUsers(event) {
  //     $.ajax({
  //       method: "GET",
  //       url: "/api/active/users"
  //     }).then({

  //     });
  //   }

  // }
    render() {
      return (
        <div className="activeUsers">
          <Nav 
          currentPage="Active Users"
          />
          <h1>Whats UP</h1>
        </div>)
    }
  
  };
  
  export default Admin;