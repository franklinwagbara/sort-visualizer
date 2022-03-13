import React, { Component } from "react";
import InsertionSort from "./insertionSort";

class Simulator extends Component {
  state = {
    speed: this.props.speed,
    items: this.props.items,
  };

  render() {
    const { items, speed } = this.state;
    return (
      <div>
        <div>
          <InsertionSort items={items} speed={speed} />
        </div>
      </div>
    );
  }
}
export default Simulator;
