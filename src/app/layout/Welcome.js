import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handelclick() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <h1> count {this.state.count}</h1>
        <button onClick={() => this.handelclick()}>click me</button>
      </div>
    );
  }
}

export default Welcome;
