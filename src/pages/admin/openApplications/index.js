import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import Container from "../../../components/admin/container";
import API from "../../../utils/API"

// Cyrus Page Dont Touch

class Admin extends Component {
  state = {
    truckData: []
  }
  componentDidMount() {
    API.getAllTrucks()
      .then(res => {
        console.log(res)
        this.setState({ truckData: res.dataValues })
      })
      .catch(err => console.log(err));

    // API.getTruck(1)
    //   .then(res => console.log(res));
  }


  render() {
    return (
      <div class="brickBackground">
        <Nav
          currentPage="Open Applications"
        />
        <Container >
          <h1>Whats UP</h1>
          {this.state.truckData.map(truck => {
            return (
              <h1>{truck.name}</h1>
            )
          })}
        </Container>
      </div>)
  }

};

export default Admin;



// state = {
//   truckData: []
// }
// componentDidMount() {
//   API.getAllTrucks()
//     .then(res => {
//       console.log(res)
//       this.setState({ truckData: res.dataValues })
//     })
//     .catch(err => console.log(err));

//   // API.getTruck(1)
//   //   .then(res => console.log(res));
// }


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
//       <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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


// approveApplication = id =>
// API.approveTruck()
//   .then(res => {
//     console.log(res)
//   })

// closeApplication = id =>
// API.removeTruck()