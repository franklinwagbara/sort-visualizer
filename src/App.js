import { delay } from "lodash";
import "./App.css";
import React, { Component } from "react";
import InsertionSort from "./components/insertionSort";
import NavBar from "./components/navBar";
import Simulator from "./components/simulator";

class App extends Component {
  state = {
    play: false,
    restart: false,
  };

  render() {
    return (
      <div>
        <NavBar />
        <Simulator />
      </div>
    );
  }
}

export default App;
