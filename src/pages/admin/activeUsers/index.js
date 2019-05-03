import React, { Component } from "react";
import Nav from "../../../components/Nav";
import API from "../../../utils/API"

class Admin extends Component {


  render() {
    return (
      <div className="brickBackground">

        <Nav
          home="/admin/dashboard"
          currentPage="Active Users"
        />
        <div className="truckApplication">
 

        </div>
        </div>
        )
      }
    
    };
    
export default Admin;