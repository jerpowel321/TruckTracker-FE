import React, { Component } from "react";
import Nav from "../../../components/Nav";
import API from "../../../utils/API"
import 'firebase/auth';
import SignOutButton from '../../Signin/SignOut';
import { withAuthorization } from '../../Signin/Session';
import { Link, withRouter } from 'react-router-dom';



class TruckerApplication extends Component {
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
		zip: "",
		monday: "",
		tuesday: "",
		wednesday: "",
		thursday: "",
		friday: "",
		saturday: "",
		sunday: "",
		wait: "",
		businessImages: [],
		businessDescription: "",
		title: "Food Truck Application"
	}


	createNewTruck = (event) => {
		if (this.state.companyName == null) {
			return <div>Please provide a business name.</div>
		}
		if (this.state.firstName == null || this.state.lastName == null) {
			return <div>Please a contact first and last name. </div>
		}
		if (this.state.phone == null) {
			return <div>Please provide a contact phone number.</div>
		}
		if (this.state.address == null || this.state.city == null || this.state.state == null || this.state.zip == null) {
			return <div>Please provide a valid address including state, city and postal code.</div>
		}

		else {
			console.log("Inside Create new truck!!--------------------")
			event.preventDefault();
			const newTruck = {
				businessName: this.state.businessName,
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
				zip: this.state.zip,
				monday: this.state.monday,
				tuesday: this.state.tuesday,
				wednesday: this.state.wednesday,
				thursday: this.state.thursday,
				friday: this.state.friday,
				saturday: this.state.saturday,
				sunday: this.state.sunday,
				wait: this.state.wait,
				businessImages: this.state.businessImages,
				businessDescription: this.state.businessDescription

			}
			console.log(newTruck)
			API.saveTruck(newTruck)
				.then(res => {
					console.log(res)
					console.log("This is the response")
					if (res.errors) {
						console.log(res.errors)
					}
				});
		}
	}

	handleInputChange = (event) => {
		let { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	componentDidMount() {

		// API.getTruck(this.state.businessName).then((res) => {
		// 	console.log(res)
		// 	this.setState({ 
		// 		// businessName: res.data.businessName,
		// 		website: res.data.website,
		// 		cuisine: res.data.cuisine,
		// 		menu: res.data.menu,
		// 		firstName: res.data.firstName,
		// 		middleInitial: res.data.middleInitial,
		// 		lastName: res.data.lastName,
		// 		email: res.data.email,
		// 		phone: res.data.phoneNumber,
		// 		address: res.data.address1,
		// 		address2: res.data.address2,
		// 		city: res.data.city,
		// 		state: res.data.state,
		// 		zip: res.data.zip,
		// 		monday: res.data.monday,
		// 		tuesday: res.data.tuesday,
		// 		wednesday: res.data.wednesday,
		// 		thursday: res.data.thursday,
		// 		friday: res.data.friday,
		// 		saturday: res.data.saturday,
		// 		sunday: res.data.sunday,
		// 		wait: res.data.wait,
		// 		businessDescription: res.data.businessDescription,
		// 		title: "Update Business Information"
		// 	})
		// 	console.log("This is the current state")
		// 	console.log(this.state)

		// })
		// 	.catch(err => console.log(err));

	}

	render() {
		return (
			<div className="test">

				<Nav
					home="/trucker/dashboard"
					firstPage="/trucker/application"
					firstPageName="Application"
					secondPage="/trucker/account"
					secondPageName="Account"
					signOut={<SignOutButton />}
				/>
				<div className="truckApplication">
					<form>
						<div className="form-row">
							<div className="form-group col-md-12">
								<h1 className="text-center largeTitles redText">{this.state.title}</h1>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="companyName">Company Name</label>
								<input name="businessName" type="text" className="form-control" id="companyName" placeholder="Koja Kitchen" onChange={this.handleInputChange} />

							</div>
							<div className="form-group col-md-6">
								<label htmlFor="website">Website</label>
								<input name="website" type="text" className="form-control" id="inputMiddleName" placeholder="" onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputCuisineType">Type of Cuisine</label>
								<select name="cuisine" id="inputCuisineType" className="form-control" onChange={this.handleInputChange} >
									<option select>Select type</option>
									<option value="American">American</option>
									<option value="Cajun">Cajun</option>
									<option value="Chinese">Chinese</option>
									<option value="Thai">Dessert</option>
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
									<option value="Thai">Vietnamese</option>
									<option value="Other">Other</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputMenuLink">Menu Link</label>
								<input name="menu" type="text" className="form-control" id="inputMenuLink" placeholder="" onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-5">
								<label htmlFor="inputFirstName"> Contact First Name</label>
								<input name="firstName" type="text" className="form-control" id="inputFirstName" placeholder="William" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="inputMiddleName">Middle Initial</label>
								<input name="middleInitial" type="text" className="form-control" id="inputMiddleName" placeholder="B." onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-5">
								<label htmlFor="inputLastName">Last Name</label>
								<input name="lastName" type="text" className="form-control" id="inputLastName" placeholder="Pitt" onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Email</label>
								<input name="email" type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPhoneNumber">Phone Number</label>
								<input name="phoneNumber" type="number" className="form-control" id="inputPhoneNumber" placeholder="4155555555" onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Address</label>
							<input name="address1" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={this.handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress2">Address 2</label>
							<input name="address2" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={this.handleInputChange} />
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputCity">City</label>
								<input name="city" type="text" className="form-control" id="inputCity" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="inputState">State</label>
								<select name="state" id="inputState" className="form-control" onChange={this.handleInputChange} >
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
							<div className="form-group col-md-2">
								<label htmlFor="inputZip">Zip</label>
								<input name="zip" type="text" className="form-control" id="inputZip" onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="scheduleM">Monday</label>
								<input name="monday" type="text" className="form-control" id="scheduleM" placeholder="9am-6pm" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="scheduleT">Tuesday</label>
								<input name="tuesday" type="text" className="form-control" id="scheduleT" placeholder="9am-6pm" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="scheduleW">Wednesday</label>
								<input name="wednesday" type="text" className="form-control" id="scheduleW" placeholder="9am-6pm" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="scheduleTh">Thursday</label>
								<input name="thursday" type="text" className="form-control" id="scheduleTh" placeholder="9am-6pm" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="scheduleF">Friday</label>
								<input name="friday" type="text" className="form-control" id="scheduleF" placeholder="9am-6pm" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="scheduleS">Saturday</label>
								<input name="saturday" type="text" className="form-control" id="scheduleS" placeholder="9am-6pm" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="scheduleSu">Sunday</label>
								<input name="sunday" type="text" className="form-control" id="scheduleSu" placeholder="9am-6pm" onChange={this.handleInputChange} />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="waitTime">Current Wait Time</label>
								<input name="wait" type="text" className="form-control" id="waitTime" placeholder="10" onChange={this.handleInputChange} />
							</div>
						</div>
						<div>
							<div className="form-group">
								<label htmlFor="businessDescription">Business Description</label>
								<textarea name="businessDescription" className="form-control" id="businessDescription" rows="3"></textarea>
							</div>
						</div>
						<div className="text-center">
							<button type="submit" className="btn redBg text-white hvr-grow-shadow" onClick={this.createNewTruck}> <b className="text-white">Submit</b></button>
						</div>
					</form>
				</div>
			</div>
		)
	}

};


// function InputValidationError({ error }) {
// 	if (error == null) {
// 		return null;
// 	}

// 	return (
// 		<div className="text-danger" role="alert">
// 			{error.message}
// 		</div>
// 	);
// }


const condition = authUser => !!authUser;

export default withAuthorization(condition)(TruckerApplication);


