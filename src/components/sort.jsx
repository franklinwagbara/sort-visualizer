import React, { Component } from "react";
import BarChart from "./barChart";

class Sort extends Component {
  state = {
    items: this.props.items,
    count: 0,
    transition: null,
    timerId: null,
    play: false,
    restart: false,
  };

  trigger() {
    const { items, speed, maxSpeed, onSort } = this.props;
    const { play } = this.state;
    if (!play) return;
    const transition = onSort([...items]);
    this.setState(
      { transition },
      () =>
        (this.state.timerId = setInterval(
          () => this.transition(),
          maxSpeed - speed
        ))
    );
  }

  simulate = () => {
    this.setState({ play: true, count: 0 }, () => this.trigger());
  };

  formatSimulateButton = () => {
    const { play, restart } = this.state;

    if (!play && !restart) return "Simulate";
    else if (play) return "Simulating...";
    else return "Restart";
  };

  transition() {
    const { transition, count } = this.state;
    if (count >= transition.length) {
      this.stop();
      clearInterval(this.state.timerId && this.state.timerId);
      return;
    }
    const items = transition && transition[count];
    this.setState({ count: this.state.count + 1, items });
  }

  stop = () => {
    this.setState({ play: false, restart: true });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <h3>{this.props.SortName + " Sort"}</h3>
        <BarChart key={items} items={items} />
        <button className="simulate-button" onClick={this.simulate}>
          {this.formatSimulateButton()}
        </button>
      </div>
    );
  }
}

export default Sort;
