import React, { Component } from "react";
import Child from './Child';
export class Perent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentname: "i am perent",
    };
    this.greetPetent = this.greetPetent.bind(this);
  }

  greetPetent(parms) {
    alert(`hellow ${this.state.parentname} and ${parms}`);
    console.log(parms)
  }

  render() {
    return <div>
      <Child greetHandeler={this.greetPetent}/>
    </div>;
  }
}

export default Perent;
