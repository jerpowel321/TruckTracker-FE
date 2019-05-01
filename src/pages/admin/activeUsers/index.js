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
              <div class="form-group col-md-12">
                <h1 class="text-center font redText">Food Truck Application</h1>
              </div>
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
              <div class="form-group col-md-6">
                <label for="inputCuisineType">Type of Cuisine</label>
                <select id="inputCuisineType" class="form-control" >
                  <option selected>Select type</option>
                  <option value="American">American</option>
                  <option value="Cajun">Cajun</option>
                  <option value="Chinese">Chinese</option>
                  <option value="French<">French</option>
                  <option value="Filipino">Filipino</option>
                  <option value="Greek">Greek</option>
                  <option value="Indian">Indian</option>
                  <option value="Indonesian">Indonesian</option>
                  <option value="Italian">Italian</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Korean">Korean</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Polish">Polish</option>
                  <option value="Peruvian<">Peruvian</option>
                  <option value="Russian">Russian</option>
                  <option value="Taiwanese">Taiwanese</option>
                  <option value="Thai">Thai</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputMenuLink">Menu Link</label>
                <input type="text" class="form-control" id="inputMenuLink" placeholder="" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-5">
                <label for="inputFirstName"> Contact First Name</label>
                <input type="text" class="form-control" id="inputFirstName" placeholder="William" />
              </div>
              <div class="form-group col-md-2">
                <label for="inputMiddleName">Middle Initial</label>
                <input type="text" class="form-control" id="inputMiddleName" placeholder="B." />
              </div>
              <div class="form-group col-md-5">
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
                  <option selected>Choose a State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
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