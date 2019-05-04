import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { defaultProps } from "recompose";
function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light goldBg redText">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
         <li className="nav-item active">
           <NavLink className="font mr-3 redText" to={props.home}>Home</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="font mr-3 redText" to={props.firstPage}>{props.firstPageName}</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="font mr-3 redText" to={props.secondPage}>{props.secondPageName}</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="font mr-3 redText" to={props.thirdPage}>{props.thirdPageName}</NavLink>
         </li>
       </ul>
       <a className="navbar-brand font redText mr-5">Logo</a>
            {props.signOut}
       <div className="font mr-5 redtText">{props.currentPage}</div>
     </div>
   </nav>
  )
};

export default Nav;