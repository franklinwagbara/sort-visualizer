import { delay } from "lodash";
import "./App.css";
import React, { Component } from "react";
import InsertionSort from "./components/insertionSort";
import NavBar from "./components/navBar";
import Simulator from "./components/simulator";
import Settings from "./components/settings";

class App extends Component {
  state = {
    speed: 100,
    items: Array.from({ length: 15 }, () => Math.floor(Math.random() * 100)),
  };

  handleChangeInputSize = (value) => {
    console.log("change size", value);
    const items = Array.from({ length: value }, () =>
      Math.floor(Math.random() * 100)
    );
    this.setState({ items: items });
  };

  render() {
    const { speed, items } = this.state;
    console.log(items);
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="main">
          <div className="main-simulator">
            <Simulator key={items} speed={speed} items={items} />
          </div>
          <div className="main-setting">
            <Settings onChangeInputSize={this.handleChangeInputSize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
