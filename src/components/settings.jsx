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
          <i>Adjust Input Size</i>
          <Slider
            start={0}
            mid={50}
            end={100}
            onChangeInputSize={this.props.onChangeInputSize}
          />
        </div>
      </div>
    );
  }
}

export default Settings;
