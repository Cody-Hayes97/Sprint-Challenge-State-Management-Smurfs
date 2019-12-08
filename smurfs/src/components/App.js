import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

import { connect } from "react-redux";
import {
  getSmurfData,
  postSmurfData,
  toggleSelected
} from "../actions/actions";
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
      <h1 style={{ fontFamily: "Odibee Sans", marginTop: "2%" }}>
        Smurf Maker
      </h1>
      <Form formValue={formValue} handleChange={handleChange} />

      {/* <Button
        color="success"
        onClick={() => {
          props.getSmurfData();
          console.log(props.smurf.name);
        }}
      >
        click for data
      </Button> */}
      <Button
        color="success"
        onClick={() => {
          onSubmit();
        }}
      >
        Add your Smurf!
      </Button>
      <SmurfList
        smurfs={props.smurf}
        onclick={() => {
          props.toggleSelected();
        }}
      />
    </div>
  );
}

const mapPropsToState = state => {
  return {
    smurf: state.smurf
  };
};

export default connect(mapPropsToState, { getSmurfData, postSmurfData })(App);
