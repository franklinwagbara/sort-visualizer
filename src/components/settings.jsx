import React, { Component } from "react";
import "./css/settings.css";
import Slider from "./slider";

class Settings extends Component {
  state = {
    sortType: "",
  };

  handleInputSizeChange = (value) => {
    this.props.onInputSizeChange(value);
  };

  handleSpeedChange = (value) => {
    this.props.onSpeedChange(value);
  };

  handleClick = (sortType) => {
    this.setState({ sortType });
    this.props.sortType(sortType);
  };

  render() {
    const { sortType } = this.state;
    return (
      <div className="settings">
        <h5>Settings</h5>
        <i>Sort Type</i>
        <div className="sort-wrapper">
          <div className="sort-type">
            <button
              className={
                sortType === "Insertion" ? "sort-button focus" : "sort-button"
              }
              onClick={() => this.handleClick("Insertion")}
            >
              Insertion Sort
            </button>
            <button
              className={
                sortType === "Selection" ? "sort-button focus" : "sort-button"
              }
              onClick={() => this.handleClick("Selection")}
            >
              Selection Sort
            </button>
          </div>
          <div className="sort-type">
            <button
              className={
                sortType === "Quick" ? "sort-button focus" : "sort-button"
              }
              onClick={() => this.handleClick("Quick")}
            >
              Quick Sort
            </button>
            <button
              className={
                sortType === "Bubble" ? "sort-button focus" : "sort-button"
              }
              onClick={() => this.handleClick("Bubble")}
            >
              Bubble Sort
            </button>
          </div>
        </div>

        <div>
          <i>Adjust Input Size</i>
          <Slider
            start={0}
            mid={15}
            end={this.props.maxInput}
            onSliderChange={this.handleInputSizeChange}
          />
        </div>

        <div>
          <i>Adjust Speed</i>
          <Slider
            start={0}
            mid={15}
            end={this.props.maxSpeed}
            onSliderChange={this.handleSpeedChange}
          />
        </div>
      </div>
    );
  }
}

export default Settings;
