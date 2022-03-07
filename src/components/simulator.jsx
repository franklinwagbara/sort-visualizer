import React, { Component } from "react";
import InsertionSort from "./insertionSort";

class Simulator extends Component {
  state = {
    speed: 100,
    items: Array.from({ length: 15 }, () => Math.floor(Math.random() * 100)),
  };

  render() {
    const { items, speed } = this.state;
    const { play, onStop, onSimulate } = this.props;
    return (
      <div>
        <div className="main-area">
          <InsertionSort
            key={play}
            onStop={() => onStop()}
            items={items}
            speed={speed}
            play={play}
          />
        </div>
      </div>
    );
  }
}
export default Simulator;
