import React from "react";

export const Smurf = props => {
  return (
    <div
      style={{
        width: "50%",
        margin: "3% 0 3% 25%",
        border: "1px solid black",
        padding: "1%",
        fontSize: "20px",
        background: "#DAD299" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to right, #B0DAB9, #DAD299)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to right, #B0DAB9, #DAD299)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}
    >
      <p>
        <strong>Name: </strong>
        {props.name}
      </p>
      <p>
        <strong>Age:</strong> {props.age}
      </p>
      <p>
        <strong>Height:</strong> {props.height}
      </p>
    </div>
  );
};
