import React, { Component } from "react";
import Nav from "../../components/Nav";
import GoogleMapReact from 'google-map-react';
// import * as app from "app"
import app from 'firebase/app';
// import {geolocated} from 'react-geolocated';
import Container from "../../components/admin/container"
import { AuthUserContext, withAuthorization } from '../Signin/Session';
import SignOutButton from '../Signin/SignOut';
import API from "./../../utils/API"
import * as firebase from "firebase"
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAebySY2-ib0pM0xXsMX3pC2dQkmW7n9fw");

Geocode.enableDebug();

var config = {
  apiKey: "AIzaSyDBJH8z5eJDf7cgAWMiRGXE2U1vBnQVa2g",
  authDomain: "truck-firebase.firebaseapp.com",
  databaseURL: "https://truck-firebase.firebaseio.com",
  projectId: "truck-firebase",
  storageBucket: "truck-firebase.appspot.com",
  messagingSenderId: "810502901238"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const database = firebase.database()
const connectedRef = database.ref(".info/connected");
const connectionsRef = database.ref("userConnects");

const db = app.database();

class Trucker extends React.Component {

  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.45
    },
    zoom: 15
  };

  state = {
    name: "",
    position: {},
    active: false,
    bool: true,
    email: "",
    receivedEmail: false,
    bg: "redBg",
    buttonText: "Enable Geolocation",
    currentLocation: {},
    userLocations: [],
    address: ""
  }

  
  componentDidMount() {
    {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({
          position: position, currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        }),
        err => console.log(err)
      )
    }

    connectionsRef.on("value", snap => {
      let allUsers = []
      let locations = snap.val()
      let connects = Object.keys(snap.val())
      console.log(connects)
      console.log(Math.floor(Date.now() / 1000))
      for(let i = 0; i < connects.length; i++){
        if((parseInt(connects[i]) + (60 * 15)) < Math.floor(Date.now() / 1000)){
          connectionsRef.child(connects[i]).remove()
          console.log(connectionsRef.child(connects[i]))
          // console.log(Math.floor(Date.now() / 60000))
          // console.log("parent: " + ddd)
          // database.ref("userConnects").child(parent).delete()
        }
      }
      for(let key in locations){
        let user = {
          lat: locations[key].lat,
          lng: locations[key].lng
        }
        allUsers.push(user)
      }
      this.setState({
        userLocations: allUsers
      })
    })

    console.log(this.state.position)
    API.getAllTrucks().then((res) => {
      console.log(res)
      for (let i = 0; i < res.data.length; i++) {
        if (this.state.email === res.data[i].email && res.data[i].approved === true) {
          this.setState({ name: res.data[i].businessName })
        }
      }
    })
    
  }

  update() {
    let interval;
    const updater = () => {
      if (this.state.active === true) {
        window.navigator.geolocation.getCurrentPosition(
          position => this.setState({ position: position }),
          err => console.log(err)
        )

        console.log("I work")
        db.ref("-LduGXztZPLOWaQjzbq").child("lat").set(this.state.position.coords.latitude)
        db.ref("-LduGXztZPLOWaQjzbq").child("lng").set(this.state.position.coords.longitude)
      }
      if (this.state.bool === true) {
        interval = setInterval(updater, 300000)
        this.setState({ bool: false })
      }
    }
    updater();
  }

  handleInputChange = event => {
    this.setState({ name: event.target.value });
  };

  post = (name, lat, lng) => {
    if (name && lat && lng) {
      db.ref().push({
        name: name,
        lat: lat,
        lng: lng
      })
    }
    console.log(this.state)
  }
  /////////////////////////////////////////////////
  ////// CHECK ID PLACEMENT LATER
  newPost = (id, name, lat, lng, address) => {
    if (id && name && lat && lng) {
      db.ref().child("trucks").child(id.replace(".", "%20")).set({
        name: name,
        lat: lat,
        lng: lng,
        address: this.state.address
      })
    }
  }

  newUpdate(id, name, lat, lng) {
    let interval;
    let address;
    Geocode.fromLatLng(lat, lng).then(
      response => {
        address = response.results[0].formatted_address;
        this.setState({address: address})
        console.log(address)
      },
      error => {
        console.error(error);
      })


    const updater = () => {
      if (this.state.active === true) {
        window.navigator.geolocation.getCurrentPosition(
          position => this.setState({ position: position }),
          err => console.log(err)
        )

        console.log("I work")
        this.newPost(id, name, lat, lng, address)
      }
      if (this.state.bool === true) {
        interval = setInterval(updater, 300000)
        this.setState({ bool: false })
      }
    }
    updater();
    
  }
  /////////////////////////////////////////////////

  toggleState() {
    if (this.state.active === false) {
      this.setState({ active: true })
      this.setState({ bg: "btn-success" })
      this.setState({ buttonText: "Geolocation Enabled" })
    }
    else {
      this.setState({ active: false })
      this.setState({ bg: "redBg" })
      this.setState({ buttonText: "Enable Geolocation" })
    }
    console.log(this.state.active)
  }

  handleAuthChange = (userEmail) => {
    if (!this.state.receivedEmail) {
      this.setState({
        email: userEmail,
        receivedEmail: true
      })
    }

  }

  render() {
    {
      var heatMapData = {    
        positions: this.state.userLocations,
        options: {   
          radius: 20,   
          opacity: 0.6,
      }}
    }

    return (
      <div>
        <AuthUserContext.Consumer>
          {authUser => (
            this.handleAuthChange(authUser.email)
          )}
        </AuthUserContext.Consumer>
        <Nav
          home="/trucker/dashboard"
          firstPage="/trucker/application"
          firstPageName="Application"
          secondPage="/trucker/account"
          secondPageName="Account"
          signOut={<SignOutButton />}
        />
        {/* <div className="brickBackground" style={{marginTop: "-5%"}}> */}
        <div className="truckerDashboard">
          <div className="resultsContainer"></div>
          <div style={{ height: '60vh', width: '50%', marginLeft: "25%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyCC9CsEo4ZXBb-6M2d9TfG8DgvcTXXcEo0" }}
              defaultCenter={this.state.currentLocation || this.props.center}
              defaultZoom={this.props.zoom}
              heatmapLibrary={true}
              heatmap={heatMapData}
            >
            </GoogleMapReact>
          </div>

          <div style={{ marginTop: "-5%" }} className="text-center">
            <button
              className={(this.state.bg) + " text-white updateLocation hvr-grow-shadow"}
              onClick={() => { this.toggleState(); this.newUpdate(this.state.email, this.state.name, this.state.position.coords.latitude, this.state.position.coords.longitude); console.log(this.state); }}
            >
              {this.state.buttonText}
            </button>
          </div>


          {
            window.navigator.geolocation.getCurrentPosition(
              position => this.setState({ position: position }),
              err => console.log(err)
            )
          }
        </div>
      </div>
    )

  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Trucker);

