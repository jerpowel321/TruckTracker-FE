import React from "react";
import {Navbar, NavItem} from "react-materialize";
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <Navbar brand={<span className="red-text text-darken-4">Admin Dashboard</span>} centerLogo alignLinks="left" className="font amber accent-3">
      <NavLink className="font red-text text-darken-4" to="/admin/dashboard">Home</NavLink>
      <NavLink className="font red-text text-darken-4" to="/admin/view/registered/trucks">Trucks</NavLink>
      <NavLink className="font red-text text-darken-4" to="/admin/view/registered/users">Users</NavLink>
    </Navbar>
  );
};

export default Nav;