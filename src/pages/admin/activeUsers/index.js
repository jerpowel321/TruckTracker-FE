import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
// import API from "../../../../routes/api-routes"
import Container from "../../../components/admin/container";

class Admin extends Component {
  // componentDidMount() {
  //   this.loadActtiveUsers();
  // }

  // loadActtiveUsers = () => {
  //   API.getUser()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };
    render() {
      return (
        <div className="brickBackground">

          <Nav 
          currentPage="Active Users"
          />
          <Container>
          <h1>Whats UP WHYYYY CAIN hello hello hello hello</h1>
 
          </Container>
        </div>)
    }
  
  };
  
  export default Admin;