import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import API from "../../../utils/API"
import 'firebase/auth';

class Admin extends Component {
	state = {
		businessName: "",
		website: "",
		cuisine: "",
		menu: "",
		firstName: "",
		middleInitial: "",
		lastName: "",
		email: "",
		phone: "",
		address: "",
		address2: "",
		city: "",
		state: "",
		zip: ""
	}

	createNewTruck = (event) => {
		event.preventDefault();
		const newTruck = {
			businessName: this.state.companyName,
			website: this.state.website,
			cuisine: this.state.cuisine,
			menu: this.state.menu,
			firstName: this.state.firstName,
			middleInitial: this.state.middleInitial,
			lastName: this.state.lastName,
			email: this.state.email,
			phone: this.state.phoneNumber,
			address: this.state.address1,
			address2: this.state.address2,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip
		}
		console.log(newTruck)
		API.saveTruck(newTruck)
			.then(res => console.log(res)
			
			);
	}
	handleInputChange = (event) => {
		let { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div className="brickBackground">

				<Nav
					currentPage="Food Truck Application"
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
								<input name="companyName" type="text" class="form-control" id="companyName" placeholder="Koja Kitchen" onChange={this.handleInputChange} />
							</div>
							<div class="form-group col-md-6">
								<label for="website">Website</label>
								<input name="website" type="text" class="form-control" id="inputMiddleName" placeholder="" onChange={this.handleInputChange} />
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputCuisineType">Type of Cuisine</label>
								<select name="cuisine" id="inputCuisineType" class="form-control" onChange={this.handleInputChange} >
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
								<input name="menu" type="text" class="form-control" id="inputMenuLink" placeholder="" onChange={this.handleInputChange} />
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col-md-5">
								<label for="inputFirstName"> Contact First Name</label>
								<input name="firstName" type="text" class="form-control" id="inputFirstName" placeholder="William" onChange={this.handleInputChange} />
							</div>
							<div class="form-group col-md-2">
								<label for="inputMiddleName">Middle Initial</label>
								<input name="middleInitial" type="text" class="form-control" id="inputMiddleName" placeholder="B." onChange={this.handleInputChange} />
							</div>
							<div class="form-group col-md-5">
								<label for="inputLastName">Last Name</label>
								<input name="lastName" type="text" class="form-control" id="inputLastName" placeholder="Pitt" onChange={this.handleInputChange} />
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputEmail4">Email</label>
								<input name="email" type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange={this.handleInputChange} />
							</div>
							<div class="form-group col-md-6">
								<label for="inputPhoneNumber">Phone Number</label>
								<input name="phoneNumber" type="number" class="form-control" id="inputPhoneNumber" placeholder="4155555" onChange={this.handleInputChange} />
							</div>
						</div>
						<div class="form-group">
							<label for="inputAddress">Address</label>
							<input name="address1" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={this.handleInputChange} />
						</div>
						<div class="form-group">
							<label for="inputAddress2">Address 2</label>
							<input name="address2" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={this.handleInputChange} />
						</div>
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputCity">City</label>
								<input name="city" type="text" class="form-control" id="inputCity" onChange={this.handleInputChange} />
							</div>
							<div class="form-group col-md-4">
								<label for="inputState">State</label>
								<select name="state" id="inputState" class="form-control" onChange={this.handleInputChange} >
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
								<input name="zip" type="text" class="form-control" id="inputZip" onChange={this.handleInputChange} />
							</div>
						</div>
						<div class="text-center">
							<button type="submit" class="btn redBg text-white" onClick={this.createNewTruck}>Submit</button>
						</div>
					</form>
				</div>

			</div>
		)
	}

};

export default Admin;