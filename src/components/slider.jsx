import React, { Component } from "react";
import "./css/slider.css";

class Slider extends Component {
  state = {
    position: -2,
    offsetX: null,
    isMouseDown: false,
    lastValue: null,
  };

  constructor(props) {
    super(props);
    this.notch = React.createRef();
  }

  componentDidMount() {
    this.setState({ offsetX: this.notch.current.offsetLeft });
  }

  handleDrag = (e) => {
    //console.log(this.state.offsetX, e.clientX);
    console.log("offset", this.state.position);
    this.setState({
      position: e.clientX - this.state.offsetX,
      lastValue: e.clientX,
    });
    //console.log("ref", this.notch.current.offsetLeft);
    //console.log(e.clientX - this.state.offSetX);
    //const delta = e.clientX - this.state.offSetX;
    //this.setState({ position: delta });
  };

  handleDragStart = (e) => {
    e.dataTransfer.setDragImage(new Image(), 0, 0);
    console.log(e.dataTransfer);
    e.preventDefault();
  };

  handleDragEnd = (e) => {
    console.log("drag end", e.clientX);
    this.setState({ position: this.state.position + e.clientX });
  };

  handleMouseMove = (e) => {
    /*  if (this.state.isMouseDown)
      this.setState({ position: this.state.position + e.movementX }); */
  };

  handleMouseDown = (e) => {
    //this.setState({ isMouseDown: true });
  };

  handleMouseUp = (e) => {
    console.log("mouse up", e.nativeEvent.offsetX);
    /* console.log("mouse up", this.state.isMouseDown);
    this.setState({ isMouseDown: false }); */
  };

  handleDragOver = (e) => {
    e.dataTransfer.dropEffect = "move";
    e.preventDefault();
  };
  render() {
    return (
      <div className="slider">
        <div
          draggable={true}
          className="notch"
          style={{ marginLeft: this.state.position }}
          ref={this.notch}
          onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          onDragEnd={this.handleDragEnd}
          onDragOver={this.handleDragOver}
        ></div>
        <input className="tt" type="range" />
      </div>
    );
  }
}

export default Slider;
