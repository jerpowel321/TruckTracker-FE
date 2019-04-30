import React from "react";
import { NavLink } from "react-router-dom";
function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light goldBg redText">
      <a class="navbar-brand font redText mr-5">{props.currentPage}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <NavLink class="font mr-3 redText" to="/admin/dashboard">Home</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Nav;