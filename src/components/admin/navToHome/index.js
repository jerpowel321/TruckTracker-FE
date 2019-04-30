import React from "react";

function Nav(props) {
  return (<div>
    <nav>
      <div className="nav-wrapper font amber accent-3 red-text text-darken-4">
        <a href="#" className="brand-logo font logo center red-text text-darken-4">{props.currentPage}</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/admin/dashboard" className="font red-text text-darken-4">Home</a></li>
        </ul>
      </div>
    </nav>
  </div>
  )
};

export default Nav;