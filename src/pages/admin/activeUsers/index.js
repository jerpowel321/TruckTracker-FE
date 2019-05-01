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
      
          <div className="truckApplication">
          <form>
            <div class="form-row">
              <h1>Food Truck Application 2019</h1>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="companyName">Company Name</label>
                <input type="text" class="form-control" id="companyName" placeholder="Koja Kitchen" />
              </div>
              <div class="form-group col-md-6">
                <label for="website">Website</label>
                <input type="text" class="form-control" id="inputMiddleName" placeholder="" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputFirstName"> Contact First Name</label>
                <input type="text" class="form-control" id="inputFirstName" placeholder="William" />
              </div>
              <div class="form-group col-md-3">
                <label for="inputMiddleName">Middle Initial</label>
                <input type="text" class="form-control" id="inputMiddleName" placeholder="B." />
              </div>
              <div class="form-group col-md-4">
                <label for="inputLastName">Last Name</label>
                <input type="password" class="form-control" id="inputLastName" placeholder="Pitt" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPhoneNumber">Phone Number</label>
                <input type="number" class="form-control" id="inputPhoneNumber" placeholder="4155555" />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control" >
                  <option selected>Choose...</option>
                  <option>CA</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
            <div class="text-center">
            <button type="submit" class="btn redBg text-white">Submit</button>
            </div>
          </form>
          </div>
       
      </div>
    )
  }

};

export default Admin;