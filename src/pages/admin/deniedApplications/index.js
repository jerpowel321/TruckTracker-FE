import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import Container from "../../../components/admin/container";
import Chart from "../../../components/admin/chart";
import {Bar, Line, Pie} from "react-chartjs-2";

class Admin extends Component {

    render() {
      return (
        <div className="">
          <Nav 
          currentPage="Denied Applications"
          />
         
          <Chart />
 
         
        </div>)
    }
  
  };
  
  export default Admin;