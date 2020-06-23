import React, { Component } from "react";
import { PropTypes } from "prop-types";

class App extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  componentWillUpdate() {
    console.log("updated");
  }
  render() {
    return (
      <div>
        React sandbox
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
