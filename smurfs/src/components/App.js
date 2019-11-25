import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfData, postSmurfData } from "../actions/actions";
import Form from "./Form";

import "./App.css";
class App extends Component {
  state = {
    name: "",
    age: 0,
    height: ""
  };

  render() {
    return (
      <div className="App">
        <Form
        // name={this.props.smurf.name}
        // age={this.props.smurf.age}
        // height={this.props.smurf.height}
        // handleChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.getSmurfData();
            console.log(this.props.smurf.name);
          }}
        >
          click for data
        </button>
        <button
          onClick={() => {
            this.props.postSmurfData(this.props.smurf);
          }}
        >
          click for post
        </button>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    smurf: state.smurf
  };
};

export default connect(mapPropsToState, { getSmurfData, postSmurfData })(App);
