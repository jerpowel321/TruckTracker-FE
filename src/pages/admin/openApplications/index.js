import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import Container from "../../../components/admin/container";


class Admin extends Component {

    render() {
      return (
        <div className="brickBackground">
          <Nav 
          currentPage="Open Applications"
          />
          <Container>
          <h1>Whats UP WHYYYY CAIN hello hello hello hello</h1>
 
          </Container>
         
        </div>)
    }
  
  };
  
  export default Admin;