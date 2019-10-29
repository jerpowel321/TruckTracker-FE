import API from "./../../utils/API"
import Nav from "../../components/Nav";
import { ReviewButton } from "../../components/Review";
import Stars from "../../components/Stars";
import * as firebase from "firebase"
import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import Moment from 'react-moment';
import "./style.css";
import Geocode from "react-geocode";
import { Accordion, Card, Button } from 'react-bootstrap';

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
    lat: 37.781237,
    lng: -122.408114,
    trucks: [], //To view trucker information from firebase
    currentLocation: {},
    reviews: [], //To view reviews for a specific truck
    allReviews: null, //To view reviews for all trucks, used for displaying images
    sqltrucks: [], //To get sql database trucker information
  }

  getGeolocation(allTrucks) {
    for (let i = 0; i < allTrucks.length; i++) {
      Geocode.fromLatLng(allTrucks[i].lat, allTrucks[i].lng).then(
        response => {
          if (response.results) {
            let address = response.results[0].formatted_address;
            console.log(address)
            allTrucks[i].address = address
          }
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
        this.setState({ reviews: res.data })
      })
      .catch(err => console.log(err));

  }

  getImages() {
    API.viewAllReviews().then((res) => {
      this.setState({ allReviews: res.data })
    })
      .catch(err => console.log(err));
  }

  gettruckInfo() {
    API.getAllTrucks().then((res) => {
      this.setState({ sqltrucks: res.data })
      console.log("This is the current sql trucks info")
      console.log(this.state.sqltrucks)

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

    function compare(a, b) {
      let disA = a.distance
      let disB = b.distance

      let comparison = 0;
      if (disA > disB) {
        comparison = 1;
      } else if (disA < disB) {
        comparison = -1;
      }
      return comparison;
    }

    db.ref().child("trucks").on("value", snap => {
      console.log("Value change")
      console.log(snap.val())
      let allTrucks = [];
      let location = snap.val();
      for (let key in location) {
        let truck = {
          name: location[key].name,
          lat: location[key].lat,
          lng: location[key].lng,
          address: location[key].address,
          distance: 0,
        }
        allTrucks.push(truck)
        console.log("alltrucks: " + JSON.stringify(allTrucks))
      }

      for (let i = 0; i < allTrucks.length; i++) {
        Geocode.fromLatLng(allTrucks[i].lat, allTrucks[i].lng).then(
          console.log("HELLO"),
          response => {
            if (response.results) {
              let address = response.results[0].formatted_address;
              console.log(allTrucks[i].name + address)
              allTrucks[i].address = address
            }
          },
          error => {
            console.error(error);
          }

        );
      }

      console.log("THIS SHOULD BE ALL THE INDIVIDUAL ADDRESSES" + JSON.stringify(allTrucks))

      if (this.state.currentLocation) {
        for (let i = 0; i < allTrucks.length; i++) {
          let distance = (Math.abs(allTrucks[i].lat) - Math.abs(this.state.lat)) + (Math.abs(allTrucks[i].lng) - Math.abs(this.state.lng))
          allTrucks[i].distance = distance
        }
      }

      allTrucks = allTrucks.sort(compare)

      console.log(allTrucks)

      this.setState({
        trucks: allTrucks,
      })

      console.log(this.state)
      // console.log(this.state)

      console.log("--------------this.state.trucks----------------------------")
      console.log(this.state.trucks)
      console.log("--------------this.state.sqltrucks----------------------------")
      console.log(this.state.sqltrucks)
    })

    connectedRef.on("value", snap => {
      let update = Math.floor(Date.now() / 1000)
      let latlng = {
        lat: this.state.currentLocation.lat,
        lng: this.state.currentLocation.lng
      }
      if (snap.val() && latlng.lat) {
        var con = connectionsRef.child(update).set({
          lat: latlng.lat,
          lng: latlng.lng
        });
        // con.onDisconnect().update({disco: Math.floor(Date.now() / 60000)});
      }
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="beachBackground">
        <Nav
          firstPage="/"
          firstPageName="TruckTracker"
        />
        <div style={{ height: '50vh', width: '50%', marginLeft: "25%", marginTop: "5%" , backgroundColor: 'none'}}>
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
          <div className="card-header font text-white redBg">
            Food Truck Results
          </div>

          <ol className="bg-light pt-3 pb-3">
            {this.state.trucks.map((truck, index) => {
              // console.log("This should console log each truck");
              // console.log(truck);
              if (truck.name) {
                const modalID = `truck-modal-${index}`;
                return (
                  <div key={truck.name}>
                    <li className="py-2 redText ">
                      <h4 className="py-2 redText ">{truck.name}</h4>
                      <Accordion>
                        <Card className="businessInfoCard w-100">
                          <Card.Header className="businessInfoHeader">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => this.gettruckInfo(truck.name)}>
                              <p className="goldText writeReview"><i className="fa-lg fas fa-info-circle mr-2"></i>Business Info</p>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body className="businessInfoBody">
                              {this.state.sqltrucks.filter(sqltrucks => sqltrucks.businessName === truck.name).map(sqltrucks => (
                                <div className="businessInfo pl-5">
                                  {/* {!sqltrucks.businessName
                                    ?  <p>Oh no, looks like this business does not have any. Be the first one!</p>
                                    : null
                                  } */}
                                  <p className="pt-4 "><i className="fa-lg fas fa-map-marker-alt pr-2 text-danger"></i><span className="font-weight-bold">Address:</span> {truck.address}</p>


                                  {sqltrucks.cuisine
                                    ? <p><i className="fa-lg fas fa-utensils mr-2 purple"></i><span className="font-weight-bold mr-2">Cuisine:</span>{sqltrucks.cuisine}</p>
                                    : null
                                  }
                                  {sqltrucks.phone
                                    ? <p><i className="fa-lg fas fa-phone mr-1 text-info" /> <span className="font-weight-bold mr-2">Number:</span>{sqltrucks.phone}</p>
                                    : null
                                  }
                                  {sqltrucks.monday || sqltrucks.tuesday || sqltrucks.wednesday || sqltrucks.thursday || sqltrucks.friday || sqltrucks.saturday || sqltrucks.sunday
                                    ? <p><i className="fa-lg far fa-clock mr-1 beige" /> <span className="font-weight-bold mr-2">Hours of Operation:</span></p>
                                    : null
                                  }

                                  {sqltrucks.monday
                                    ? <p><i className="" /> <span className="font-weight-bold mr-2">Monday:</span>{sqltrucks.monday}</p>
                                    : null
                                  }
                                  {sqltrucks.tuesday
                                    ? <p><i className="" /> <span className="font-weight-bold mr-2">Tuesday:</span>{sqltrucks.tuesday}</p>
                                    : null
                                  }
                                  {sqltrucks.wednesday
                                    ? <p><i className="" /> <span className="font-weight-bold mr-2">Wednesday:</span>{sqltrucks.wednesday}</p>
                                    : null
                                  }
                                  {sqltrucks.thursday
                                    ? <p><i className="" /> <span className="font-weight-bold mr-2">Thursday:</span>{sqltrucks.thursday}</p>
                                    : null
                                  }
                                  {sqltrucks.friday
                                    ? <p><i className="" /> <span className="font-weight-bold mr-2">Friday:</span>{sqltrucks.friday}</p>
                                    : null
                                  }
                                  {sqltrucks.saturday
                                    ? <p><i className="" /> <span className="font-weight-bold mr-2">Saturday:</span>{sqltrucks.saturday}</p>
                                    : null
                                  }
                                  {sqltrucks.sunday
                                    ? <p><i className="" /> <span className="font-weight-bold mr-2">Sunday:</span>{sqltrucks.sunday}</p>
                                    : null
                                  }
                                  {sqltrucks.wait
                                    ? <p><i className="fa-lg fas fa-hourglass-half mr-2 orange" /> <span className="font-weight-bold mr-2">Current Wait Time:</span>{sqltrucks.wait}</p>
                                    : null
                                  }
                                  {sqltrucks.website
                                    ? <p><i className="fa-lg fab fa-internet-explorer pr-2 text-success"></i>
                                      <span className="font-weight-bold mr-2">Website:</span>
                                      <a href={sqltrucks.website} target="_blank">{sqltrucks.website}</a></p>
                                    : null
                                  }
                                  {sqltrucks.menu
                                    ? <p><img className="pr-1 purple" id="menuimg" src="https://cdn2.iconfinder.com/data/icons/food-restaurant-1/128/flat-56-512.png" /><span className="font-weight-bold mr-2">Menu:</span> <a href={sqltrucks.menu}>{sqltrucks.menu}</a></p>
                                    : null
                                  }


                                </div>
                              ))}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="reviewCard">
                          <Card.Header className="reviewHeader">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => this.viewReviews(truck.name)}>
                              <p className="goldText writeReview"><i className="fa-lg fas fa-comment-alt mr-2" />Reviews</p>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body className="reviewBody pl-2 pr-5">
                              {this.state.reviews.filter(review => review.truckName === truck.name).map(review => (
                                <div className="review">
                                  <h4 className="pt-3 text-center">{review.userName}</h4>
                                  <Stars rating={review.rating} />
                                  <p className="pl-3 pr-3 ">{review.comment}</p>
                                </div>
                              ))}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="imagesCard">
                          <Card.Header className="imagesHeader">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => this.getImages(truck.name)}>
                              <p className="goldText writeReview"><i className="fa-lg far fa-images mr-2"></i>Images</p>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                          <Card.Body className="imagesBody pl-2 pr-5">
                              <ReviewImages reviews={this.state.allReviews} truckName={truck.name} />
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <ReviewButton truckName={truck.name} />

                    </li>
                  </div>

                )
              }
            })}
          </ol>

        </div>

      </div>
    );
  }
}

function ReviewImages({ reviews, truckName }) {
  if (reviews == null) {
    return null;
  }

  const images = [];

  for (const review of reviews) {
    if (review.truckName === truckName && review.userImages != null) {
      for (const image of review.userImages) {
        images.push(image);
      }
    }
  }

  if (images.length === 0) {
    return <div className="pt-1 pb-2 pl-5">No images currently available for this business.</div>;
  }

  return images.map(image => <img src={image} />);
}

export default User;

