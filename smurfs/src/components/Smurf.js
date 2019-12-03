import React from "react";

export const Smurf = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
    </div>
  );
};
