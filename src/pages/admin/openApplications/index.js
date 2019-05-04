import { AuthUserContext, withAuthorization } from '../../Signin/Session';
import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import Container from "../../../components/admin/container";
import API from "../../../utils/API"
import { transformFileSync } from "@babel/core";
import SignOutButton from '../../Signin/SignOut';
// Cyrus Page Dont Touch

class Admin extends Component {
  state = {
    truckData: []
  }

  componentDidMount() {
    API.getAllTrucks()
      .then(res => {
        console.log("data:", res.data)
        this.setState({ truckData: res.data })
      })
      .catch(err => console.log(err));
  }
  //   // API.getTruck(1)
  //   //   .then(res => console.log(res));

  approveApplication(id) {
    API.updateTruck(id)
    .then(res => {
      console.log(res)
      console.log("z")
      let truckData = [...this.state.truckData]
      truckData.forEach(truck => {
        if (truck.id === id){
          truck.approved = true;
          truck.applicationOpen = false;
        }
      })
      this.setState({
        truckData
      })
    })
  };

  closeApplication = id => {
    API.updateTruck(id)
      .then(res => {
        console.log(res)
        console.log("banana")
        let truckData = [...this.state.truckData]
        truckData.forEach(truck => {
          if (truck.id === id){
            truck.approved = false;
            truck.applicationOpen = false;
          }
        })
        this.setState({
          truckData
        })
      });
  }



  render() {
    console.log(this.state.truckData)
    return (
      <div class="brickBackground">
        <Nav
          currentPage="Open Applications"
          signOut={<SignOutButton />}
        />
        <Container >
          <h1>Open Applications</h1>
          {this.state.truckData.map(truck => {
            return (
              <div key={truck.id}>
                <div className="" data-toggle="modal" data-target={`#exampleModalCenter${truck.id}`}>
                  <div class="card w-100 text-white">
                    <div class="card-header bg-dark">
                      <h2>{truck.businessName}</h2>
                    </div>
                    <div class="card-body bg-secondary">
                      <blockquote class="blockquote mb-0">
                        Owner: {truck.firstName} {truck.middleInitial} {truck.lastName}<br />
                        Phone: {truck.phone}<br />
                        Email: {truck.email}
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id={`exampleModalCenter${truck.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">{truck.businessName}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Website: <a href={`${truck.website}`} target="_blank">Link</a><br />
                        Cuisine: {truck.cuisine}<br />
                        Menu: <a href={`${truck.menu}`} target="_blank">Link</a><br />
                        Owner: {truck.firstName} {truck.middleInitial} {truck.lastName}<br />
                        Email: {truck.email}<br />
                        Phone: {truck.phone}<br />
                        Address: {truck.address} {truck.address2}, {truck.city}, {truck.state} {truck.zip}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary approve" data-dismiss="modal" onClick={() => this.approveApplication(truck.id)}>Approve</button>
                        <button type="button" className="btn btn-danger reject" data-dismiss="modal" onClick={() => this.closeApplication(truck.id)}>Reject</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          })}
        </Container>
      </div>)
  }

};

const condition = authUser => !!authUser;
    
export default withAuthorization(condition)(Admin);

// {`#exampleModalCenter${truck.id}`}



// render() {
//   return (
//     <div class="brickBackground">
//       <Nav
//         currentPage="Open Applications"
//       />
//       <Container >
//         <h1>Whats UP</h1>
//         {this.state.truckData.map(truck => {
//           return (
//             <h1>{truck.name}</h1>
//           )
//         })}
//       </Container>
//     </div>)
// }


// <div class="brickBackground">
// <Nav
//   currentPage="Open Applications"
// />
// <Container >
//   <h1>Whats UP</h1>
//   {this.state.truckData.map(truck => {
//     return (
//       <div>
//       <div data-toggle="modal" data-target="#exampleModalCenter">
//       <h1>{truck.businessName}</h1>
//       </div>
//       <div class="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//       <div class="modal-dialog modal-dialog-centered" role="document">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalCenterTitle">{truck.businessName}</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div class="modal-body">
//             {this.state.truckData.businessName}
//             {this.state.truckData.website}
//             {this.state.truckData.cuisine}
//             {this.state.truckData.menu}
//             {this.state.truckData.firstName}
//             {this.state.truckData.middleInitial}
//             {this.state.truckData.lastName}
//             {this.state.truckData.email}
//             {this.state.truckData.phone}
//             {this.state.truckData.address}
//             {this.state.truckData.address2}
//             {this.state.truckData.city}
//             {this.state.truckData.state}
//             {this.state.truckData.zip}
//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             <button type="button" class="btn btn-primary approve" onClick={() => this.approveApplication()}>Approve</button>
//             <button type="button" class="btn btn-primary close" onClick={() => this.closeApplication()}>Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>

//     )
//   })}
// </Container>
// </div>)


