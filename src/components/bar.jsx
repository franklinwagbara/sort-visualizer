import React, { Component } from "react";
import "./css/bar.css";

class Bar extends Component {
  state = {};
  style = {
    height: this.props.value * this.props.scale,
    width: this.props.barWidth,
    margin: this.props.space,
    backgroundColor: "rgb(3, 36, 59)",
  };

  render() {
    const style = this.style;
    return (
      <div>
        <div style={style}> </div>
      </div>
    );
  }
}

export default Bar;
