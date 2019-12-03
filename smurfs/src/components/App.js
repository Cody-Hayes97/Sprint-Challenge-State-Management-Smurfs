import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getSmurfData, postSmurfData } from "../actions/actions";
import Form from "./Form";
import { SmurfList } from "./SmurfList";

import "./App.css";

function App(props) {
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const onSubmit = e => {
    console.log("onSubmit");
    const newSmurf = { ...formValue, id: Date.now() };
    props.postSmurfData(newSmurf);
    setFormValue({
      name: "",
      age: "",
      height: "",
      id: ""
    });
  };

  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Form formValue={formValue} handleChange={handleChange} />

      <button
        onClick={() => {
          props.getSmurfData();
          console.log(props.smurf.name);
        }}
      >
        click for data
      </button>
      <button
        onClick={() => {
          onSubmit();
        }}
      >
        click for post
      </button>
      <SmurfList smurfs={props.smurf} />
    </div>
  );
}

const mapPropsToState = state => {
  return {
    smurf: state.smurf
  };
};

export default connect(mapPropsToState, { getSmurfData, postSmurfData })(App);
