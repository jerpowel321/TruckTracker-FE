import React from "react";
import "./style.css";

function Nav() {
  return (<div>
    <nav>
      <div className="nav-wrapper font amber accent-3 red-text text-darken-4">
        <a href="#" className="brand-logo font logo center red-text text-darken-4">Logo</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/admin/dashboard" className="font red-text text-darken-4">Home</a></li>
          <li><a href="/user/search" className="font red-text text-darken-4">Search</a></li>
          <li><a href="/user/saved" className="font red-text text-darken-4">Saved</a></li>
        </ul>
      </div>
    </nav>
  </div>
  )
};

export default Nav;