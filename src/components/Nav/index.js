import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { defaultProps } from "recompose";

function NavItem({ children, to }) {
  if (children == null || !children.length || to == null) {
    return null;
  }

  return (
    <li className="nav-item active">
      <NavLink className="font mr-3 redText" to={to}>{children}</NavLink>
    </li>
  );
}

function Nav(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-sm blackBg redText d-flex justify-content-around">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav navbar-group mt-2 mt-lg-0">
          <NavItem to={props.home}>Home</NavItem>
          <NavItem to={props.firstPage}>{props.firstPageName}</NavItem>
          <NavItem to={props.secondPage}>{props.secondPageName}</NavItem>
          <NavItem to={props.thirdPage}>{props.thirdPageName}</NavItem>
        </ul>
        <div className="navbar-group logo-container">
          <img className="logo" src="https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" alt="TruckTracker Logo" />
        </div>
        <div className="navbar-group navbar-group-right">
          <div className=" font mr-5  blackBg">{props.currentPage}</div>
          {props.signOut}
        </div>
      </div>
    </nav>
  )
};

export default Nav;