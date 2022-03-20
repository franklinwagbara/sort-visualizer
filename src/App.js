import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import Simulator from "./components/simulator";
import Settings from "./components/settings";
import selectionSort from "./utils/selectionSort";
import insertion_Sort from "./utils/insertion_Sort";
import bubbleSort from "./utils/bubbleSort";
import Navbar from "./utils/components/navbar";

class App extends Component {
  state = {
    speed: 100,
    sortType: "Selection",
    maxInput: 100,
    maxSpeed: 1000,
    items: Array.from({ length: 15 }, () => Math.floor(Math.random() * 100)),
  };

  sortTypes = {
    Insertion: insertion_Sort,
    Selection: selectionSort,
    Bubble: bubbleSort,
  };

  handleInputSizeChange = (value) => {
    const items = Array.from({ length: value }, () =>
      Math.floor(Math.random() * 100)
    );
    this.setState({ items: items });
  };

  handleSpeedChange = (value) => {
    this.setState({ speed: value });
  };

  handleSortType = (sortType) => {
    this.setState({ sortType });
  };

  render() {
    const { speed, items, maxInput, maxSpeed, sortType } = this.state;
    return (
      <div className="main-wrapper">
        <div>
          <NavBar />
        </div>
        <div className="main">
          <div className="main-simulator">
            <Simulator
              key={items || speed}
              maxSpeed={maxSpeed}
              speed={speed}
              items={items}
              onSort={this.sortTypes[sortType]}
              SortName={sortType}
            />
          </div>
          <div className="main-setting">
            <Settings
              maxInput={maxInput}
              maxSpeed={maxSpeed}
              onInputSizeChange={this.handleInputSizeChange}
              onSpeedChange={this.handleSpeedChange}
              sortType={this.handleSortType}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
