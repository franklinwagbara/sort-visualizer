import React, { Component } from "react";
import Sort from "./sort";

class Simulator extends Component {
  render() {
    const { items, speed, onSort, SortName, maxSpeed } = this.props;
    return (
      <div>
        <div>
          <Sort
            key={items || speed}
            maxSpeed={maxSpeed}
            items={items}
            speed={speed}
            onSort={onSort}
            SortName={SortName}
          />
        </div>
      </div>
    );
  }
}
export default Simulator;
