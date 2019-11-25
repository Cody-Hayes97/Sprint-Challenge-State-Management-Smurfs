import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfData } from "../actions/actions";

const Form = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input
        name="name"
        placeholder="Enter Name"
        value={newSmurf.name}
        handleChange={handleChange}
      />
      <input
        name="age"
        placeholder="Enter Age"
        value={newSmurf.age}
        handleChange={handleChange}
      />
      <input
        name="height"
        placeholder="Enter Height"
        value={newSmurf.height}
        handleChange={handleChange}
      />
    </form>
  );
};

const mapPropsToState = state => {
  return {
    smurf: state.smurf
  };
};

export default connect(mapPropsToState, {})(Form);
