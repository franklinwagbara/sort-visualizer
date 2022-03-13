import React, { Component } from "react";
import "./css/settings.css";
import Slider from "./slider";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="settings">
        <h5>Settings</h5>
        <div>
          <i>Adjust Array Size</i>
          <Slider />
        </div>
      </div>
    );
  }
}

export default Settings;
