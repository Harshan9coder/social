import React, { Component } from "react";


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      bulktext: "",
      topic:"React",
    };
  }

  handelText = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handelBulkText = (event) => {
    this.setState({
      bulktext: event.target.value,
    });
  };
  handelTopic=(event)=>{
      this.setState({
          topic:event.target.value
      })
  }
  handelSubmit=(event)=>{
      alert(`${this.state.topic} and ${this.state.bulktext}`)
    event.preventDefault();
  }
  render() {
    return (
      <form   onSubmit={this.handelSubmit}>
        <div>
          <label>eenter your name</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handelText}
          />
        </div>

        <div>
          <label>enter your message</label>
          <textarea type="textarea" value={this.state.bulktext} onChange={this.handelBulkText}/>
        </div>

        <div>
        <label>Topic</label>
         <select value={this.state.topic} onChange={this.handelTopic}>
         <option  type="checkbox"  value="select">--selct--</option>
         <option  type="checkbox"  value="react">React</option>
         <option  type="checkbox"  value="angular">Angular</option>
         <option type="checkbox"  value="vue">Vue</option>
        </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default Form;
