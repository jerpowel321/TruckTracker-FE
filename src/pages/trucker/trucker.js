import React, { Component } from "react";
import Nav from "../../components/Nav";
import GoogleMapReact from 'google-map-react';
// import * as app from "app"
import app from 'firebase/app';
// import {geolocated} from 'react-geolocated';
import Container from "../../components/admin/container"
import { AuthUserContext, withAuthorization } from '../Signin/Session';


var substate



// const AccountPage = () => (

// );



// if (!app.apps.length) {

// var config = {
//   apiKey: "AIzaSyDBJH8z5eJDf7cgAWMiRGXE2U1vBnQVa2g",
//     authDomain: "truck-app.appapp.com",
//     databaseURL: "https://truck-app.appio.com",
//     projectId: "truck-app",
//     storageBucket: "truck-app.appspot.com",
//     messagingSenderId: "810502901238"
// };

//     app.initializeApp(config);
// }
const db = app.database();

class Trucker extends React.Component {



  state = {
    name: "",
    position: {},
    active: false,
    bool: true,
    email: "",
    receivedEmail: false
  }

  // componentDidMount(){
  //   while(this.state.active === true){
  //     setTimeout(() => this.update(), 1000 * 300)
  //   }
  // }
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
  newPost = (id, name, lat, lng) => {
    if (id && name && lat && lng) {
      db.ref().child("trucks").push({
        id: {
          name: name,
          lat: lat,
          lng: lng
        }
      })
    }
  }

  newUpdate() {
    let interval;
    const updater = (id) => {
      if (this.state.active === true) {
        window.navigator.geolocation.getCurrentPosition(
          position => this.setState({ position: position }),
          err => console.log(err)
        )

        console.log("I work")
        db.ref().child("trucks").child(id).child("lat").set(this.state.position.coords.latitude)
        db.ref().child("trucks").child(id).child("lng").set(this.state.position.coords.longitude)
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
    }
    else {
      this.setState({ active: false })
    }
    console.log(this.state.active)
  }

  handleAuthChange = (userEmail) => {
    console.log("callback", userEmail)
    if(!this.state.receivedEmail){
      this.setState({
      email: userEmail,
      receivedEmail: true
    })
    }
    
  } 

  render() {

    return (
      <div>
        <AuthUserContext.Consumer>
          {authUser => (
            this.handleAuthChange(authUser.email)
            // <div>
            //   {console.log("sajeel" + authUser.email)}
            // </div>
          )}
        </AuthUserContext.Consumer>
        <Nav
          home="/trucker/dashboard"
          firstPage="/trucker/application"
          firstPageName="Application"
        />
        <div className="brickBackground">
          {/* <input
          id="name"
          onChange={this.handleInputChange}
        />
        <button
          onClick={() => { this.post(this.state.name, this.state.position.coords.latitude, this.state.position.coords.longitude) }}
        >
          Submit
            </button> */}

          <div className="text-center">
            <button
              className="redBg text-white updateLocation hvr-grow-shadow"
              onClick={() => { this.toggleState(); this.newUpdate(); }}
            >
              Update location
            </button>
            <button
              onClick={() => {this.newPost(this.state.email, "Cyrus' Free Candy Van", this.state.position.coords.latitude, this.state.position.coords.longitude); console.log(this.state.email) }}
            >
            new entry
            </button>
          </div>


          {/*             <input
            id="name"
            onChange={this.handleInputChange}
            />
            <button
            onClick={() => {this.post(this.state.name, this.state.position.coords.latitude, this.state.position.coords.longitude)}}
            >
            Submit
            </button>
            <button
            onClick={() => {this.toggleState(); this.update();}}
            >
            Update location
            </button> */}


          {
            window.navigator.geolocation.getCurrentPosition(
              position => this.setState({ position: position }),
              err => console.log(err)
            )
          }
        </div>
      </div>
    )
    //   return !this.props.isGeolocationAvailable
    //     ? <div>Your browser does not support Geolocation</div>
    //       : this.props.coords
    //         ? <div>
    //           <input
    //           id="name"
    //           onChange={this.handleInputChange}
    //           />
    //           <button
    //           onClick={() => {this.post(this.state.name, this.props.coords.lat, this.props.coords.lat)}}
    //           >
    //           Submit
    //           </button>
    //         </div>
    //         : <div>Getting the location data&hellip; </div>;


    // =======
    //   //   return !this.props.isGeolocationAvailable
    //   //     ? <div>Your browser does not support Geolocation</div>
    //   //       : this.props.coords
    //   //         ? <div>
    //   //           <input
    //   //           id="name"
    //   //           onChange={this.handleInputChange}
    //   //           />
    //   //           <button
    //   //           onClick={() => {this.post(this.state.name, this.props.coords.lat, this.props.coords.lat)}}
    //   //           >
    //   //           Submit
    //   //           </button>
    //   //         </div>
    //   //         : <div>Getting the location data&hellip; </div>;
    // >>>>>>> master
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Trucker);

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(Trucker);