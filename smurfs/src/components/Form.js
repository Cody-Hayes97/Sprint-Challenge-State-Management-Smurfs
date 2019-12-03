import React from "react";

const Form = props => {
  const handleChange = () => {};

  return (
    <form>
      <input
        name="name"
        placeholder="Enter Name"
        value={props.formValue.name}
        onChange={props.handleChange}
      />
      <input
        name="age"
        placeholder="Enter Age"
        value={props.formValue.age}
        onChange={props.handleChange}
      />
      <input
        name="height"
        placeholder="Enter Height"
        value={props.formValue.height}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default Form;
