import { reduce } from "lodash";
import React, { Component } from "react";
import "./css/slider.css";

class Slider extends Component {
  state = {
    start: this.props.start,
    pointer: this.props.mid,
    end: this.props.end,
  };

  handleChange = (e) => {
    console.log(this.state.pointer);
    this.setState({ pointer: e.target.value }, () =>
      this.props.onChangeInputSize(e.target.value)
    );
  };
  render() {
    const { start, pointer, end } = this.state;
    return (
      <div>
        <div>
          <span style={{ marginRight: 5 }}>
            {pointer < 10 ? `0${pointer}` : pointer}
          </span>
          <input
            type="range"
            min={start}
            max={end}
            value={pointer}
            className="slider"
            id="myRange"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
