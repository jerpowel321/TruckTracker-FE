import React, { Component } from 'react';
import Nav from "../../components/Nav";
import GoogleMapReact from 'google-map-react';
import * as firebase from "firebase"

// var config = {
//   apiKey: "AIzaSyBZAsoLrmwUdH_uxJHTDTNKZBtVMT3QRy4",
//   authDomain: "what-the-truck-test.firebaseapp.com",
//   databaseURL: "https://what-the-truck-test.firebaseio.com",
//   projectId: "what-the-truck-test",
//   storageBucket: "what-the-truck-test.appspot.com",
//   messagingSenderId: "518407603448"
// };

// firebase.initializeApp(config)
// const AnyReactComponent = ({ text }) => <div>{text}</div>;



class User extends Component {
  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.45
    },
    zoom: 15
  };

  constructor(){
    super()
    this.state = {
      location: {lat: 37.77, lng: -122.45}
    }
  }
  componentDidMount(){
    const rootRef = firebase().database().ref().child("react")
    const locationRef = rootRef.child("latLong")
    locationRef.on("value", snap => {
      this.setState({
        location: {lat: snap.lat.val(), lng:snap.lng.val()}
      })
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <Nav />
        {/* <div style={{ height: '50vh', width: '50%', marginLeft: "25%", marginTop: "5%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCC9CsEo4ZXBb-6M2d9TfG8DgvcTXXcEo0" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={this.state.lat}
              lng={this.state.lng}
              text="hello"
            />
          </GoogleMapReact> */}
        {/* </div> */}
      </div>
    );
  }
}

export default User;
