import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import API from "../../../utils/API"

class Admin extends Component {


  render() {
    return (
      <div className="brickBackground">

        <Nav
          currentPage="Active Users"
        />
        <div className="truckApplication">
 

        </div>
        </div>
        )
      }
    
    };
    
export default Admin;