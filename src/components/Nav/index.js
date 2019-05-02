import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light goldBg redText">
    <a className="navbar-brand font redText mr-5">Logo</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
         <li className="nav-item active">
           <NavLink className="font mr-3 redText" to="/admin/dashboard">Home</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="font mr-3 redText" to="/admin/view/registered/trucks">Search</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="font mr-3 redText" to="/admin/view/registered/users">Saved</NavLink>
         </li>
       </ul>
     </div>
   </nav>
  )
};

export default Nav;