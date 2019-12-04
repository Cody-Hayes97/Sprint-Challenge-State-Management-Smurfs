import React from "react";
import { Input } from "reactstrap";

const Form = props => {
  const handleChange = () => {};

  return (
    <form style={{ width: "50%", margin: "5% 0 2% 25%" }}>
      <Input
        style={{ marginBottom: "2%" }}
        name="name"
        placeholder="Enter Name"
        value={props.formValue.name}
        onChange={props.handleChange}
      />
      <Input
        style={{ marginBottom: "2%" }}
        name="age"
        placeholder="Enter Age"
        value={props.formValue.age}
        onChange={props.handleChange}
      />
      <Input
        style={{ marginBottom: "2%" }}
        name="height"
        placeholder="Enter Height"
        value={props.formValue.height}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default Form;
