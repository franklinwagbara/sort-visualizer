import React, { Component } from "react";
import "./css/navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo">Logo</div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Page 1</li>
          <li>FAQ</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
