import React, { Component } from "react";
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

class Trucker extends Component {

  render() {
    return (

      <div>
        <Nav />
        {/* // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '50%', marginLeft: "25%", marginTop: "5%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCC9CsEo4ZXBb-6M2d9TfG8DgvcTXXcEo0" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div> */}
        
      </div>
    );

  }

};

export default Trucker;