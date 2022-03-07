import React, { Component } from "react";
import BarChart from "./barChart";
import insertion_Sort from "./../utils/insertion_Sort";

class InsertionSort extends Component {
  state = {
    items: this.props.items,
    count: 0,
    transition: null,
    timerId: null,
    play: false,
    restart: false,
  };

  trigger() {
    if (!this.state.play) return;
    const transition = insertion_Sort([...this.props.items]);
    this.setState(
      { transition },
      () =>
        (this.state.timerId = setInterval(
          () => this.transition(),
          this.props.speed
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
    const { items, count, play } = this.state;
    return (
      <div>
        <BarChart key={items} items={items} />
        <button className="simulate-button" onClick={this.simulate}>
          {this.formatSimulateButton()}
        </button>
      </div>
    );
  }
}

export default InsertionSort;
