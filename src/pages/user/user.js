import API from "./../../utils/API"
import Nav from "../../components/Nav";
import { ReviewButton } from "../../components/Review"
import Stars from "../../components/Stars";

import * as firebase from "firebase"
import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';

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
const db = firebase.database()
const connectedRef = db.ref(".info/connected");
const connectionsRef = db.ref("userConnects");


const AnyReactComponent = ({ text }) => <div title={text}><img src="https://api-food-truck.herokuapp.com/assets/images/truck.png" style={{ width: "20px" }}></img><p style={{ fontSize: "8px" }}></p></div>;



class User extends Component {
  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.45
    },
    zoom: 15
  };

  state = {
    lat: 37.77,
    lng: -122.45,
    trucks: [],
    currentLocation: {},
    reviews: [],
    urls: []
  }

  getGeolocation(allTrucks){
    for (let i = 0; i < allTrucks.length; i++){
      Geocode.fromLatLng(allTrucks[i].lat, allTrucks[i].lng).then(
        response => {
          let address = response.results[0].formatted_address;
          console.log(address)
          allTrucks[i].address = address
        },
        error => {
          console.error(error);
        }
        
      );
    }
    
    console.log("THIS SHOULD BE ALL THE INDIVIDUAL ADDRESSES" + JSON.stringify(allTrucks))
  }

  viewReviews(id) {
    API.viewReview(id)
      .then(res => {
        console.log("data:", res.data)
        this.setState({ reviews: res.data })
        console.log("The reviews set state is updated")
        console.log(this.state.reviews)
      })
      .catch(err => console.log(err));

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

    db.ref().child("trucks").on("value", snap => {
      console.log("Value change")
      console.log(snap.val())
      let allTrucks = [];
      let urls = [];
      let location = snap.val();
      for (let key in location) {
        let truck = {
          name: location[key].name,
          lat: location[key].lat,
          lng: location[key].lng,
          address: ""
        }
        allTrucks.push(truck)
        console.log("alltrucks: " + JSON.stringify(allTrucks))
      }
      
        for (let i = 0; i < allTrucks.length; i++){
          Geocode.fromLatLng(allTrucks[i].lat, allTrucks[i].lng).then(
            response => {
              let address = response.results[0].formatted_address;
              console.log(address)
              allTrucks[i].address = address
            },
            error => {
              console.error(error);
            }
            
          );
        }
        
        console.log("THIS SHOULD BE ALL THE INDIVIDUAL ADDRESSES" + JSON.stringify(allTrucks))
          

      API.getAllTrucks().then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < allTrucks.length; j++) {
            console.log("This is all the data that is retrieved")
            console.log(res.data)
            if (res.data[i].businessName === allTrucks[j].name) {
              allTrucks[j].url = res.data[i].menu
              urls.push(res.data[i].menu)
              allTrucks[j].id = res.data[i].id
            }
          }
        }
      })
      console.log(allTrucks)
      this.setState({
        trucks: allTrucks,
        urls: urls
      })


      console.log(this.state)
    })

    // connectedRef.on("value", snap => {
    //   let latlng = {
    //     lat: this.state.currentLocation.lat,
    //     lng: this.state.currentLocation.lng
    //   }
    //   if (snap.val()) {
    //     var con = connectionsRef.push(latlng);
    //     con.onDisconnect().remove();
    //   }
    // })
  }
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="beachBackground">
        <Nav
          home="/user/dashboard"
          firstPage="/"
          firstPageName="Back"
        />
        <div style={{ height: '50vh', width: '50%', marginLeft: "25%", marginTop: "5%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCC9CsEo4ZXBb-6M2d9TfG8DgvcTXXcEo0" }}
            defaultCenter={this.state.currentLocation || this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.state.trucks.map(truck => (
              <AnyReactComponent
                key={truck.name}
                text={truck.name}
                lat={truck.lat}
                lng={truck.lng}
              />
            ))}
          </GoogleMapReact>
        </div>
        <div className="resultsContainer">
          <div className="card-header font redText goldBg">
            Food Truck Results
          </div>

          <ol className="bg-light pt-3 pb-3">
            {this.state.trucks.map((truck, index) => {
              // console.log(truck);
              if (truck.name) {
                const modalID = `truck-modal-${index}`;
                return (
                  <div key={truck.name}>
                    <li>
                      <h4 className="py-2 ">{truck.name}</h4>
                      <p><img id="menuimg" src="https://png.pngtree.com/svg/20160810/a8bca7b49c.svg"></img> Address:{truck.address}</p>
                      <p><i className="fa-lg far fa-clock mr-1" /> Hours of Operation:</p>
                      <p><i className="fa-lg fas fa-phone mr-1" /> Number:</p>
                      <p><i className="fa-lg fas fa-hourglass-half mr-2" /> Wait Time:</p>
                      <p><img id="menuimg" src="https://www.sccpre.cat/mypng/detail/164-1647640_restaurant-menu-comments-food-search-icon-png.png" /> <a href={truck.url}>Menu</a></p>
                      <p onClick={() => this.viewReviews(truck.name)}><i className="fa-lg fas fa-comment-alt mr-2" />Reviews</p>
                      {this.state.reviews.map(review => (
                        <div>
                          <p>{review.username}</p>
                          <Stars rating={review.rating} />
                          <p>{review.rating}</p>
                          <p>{review.comment}</p>
                        </div>
                      ))}
                      <ReviewButton truckName={truck.name} />
                    </li>
                  </div>
                  
                )
              }
              else{
                let addressArray = []
                Geocode.fromLatLng(truck.lat, truck.lng).then(
                  response => {
                    let address = response.results[0].formatted_address;
                    addressArray.push(address)
                  },
                  error => {
                    console.error(error);
                  }
                );
                return (
                  <div key={truck.name}>
                    <li>
                      <h4 className="py-2 ">{truck.name}</h4>
                      <p><img id="menuimg" src="https://png.pngtree.com/svg/20160810/a8bca7b49c.svg"></img> Address: {truck.address}</p>
                      <p><i className="fa-lg far fa-clock mr-1" /> Hours of Operation:</p>
                      <p><i className="fa-lg fas fa-phone mr-1" /> Number:</p>
                      <p><i className="fa-lg fas fa-hourglass-half mr-2" /> Wait Time:</p>
                      <p><img id="menuimg" src="https://www.sccpre.cat/mypng/detail/164-1647640_restaurant-menu-comments-food-search-icon-png.png" /> <a href={truck.url}>Menu</a></p>
                      <p onClick={() => this.viewReviews(truck.name)}><i className="fa-lg fas fa-comment-alt mr-2" />Reviews</p>
                      {this.state.reviews.map(review => (
                        <div>
                          <p>{review.username}</p>
                          <Stars rating={review.rating} />
                          <p>{review.rating}</p>
                          <p>{review.comment}</p>
                        </div>
                      ))}
                      <ReviewButton truckName={truck.name} />
                    </li>
                  </div>
                  
                )
              }
              {console.log(this.state)}
            })}
          </ol>

        </div>

      </div>
    );
  }
}

export default User;

