import React, { Component } from "react";
import Bar from "./bar";
import "./css/barChart.css";

class BarChart extends Component {
  state = {
    maxWidth: 600,
    maxHeight: 600,
    barSpace: 2,
    items: this.props.items,
  };

  render() {
    const { items } = this.state;
    const { maxWidth, maxHeight, barSpace } = this.state;
    const barWidth = (maxWidth - items.length * barSpace * 2) / items.length;

    const maxItem = Math.max(...items);
    const scale = maxHeight / maxItem;
    var key = 0;

    return (
      <div className="bar-chart">
        {items.map((item) => (
          <Bar
            key={key++}
            value={item}
            barWidth={barWidth}
            scale={scale}
            space={barSpace}
          />
        ))}
      </div>
    );
  }
}

export default BarChart;
