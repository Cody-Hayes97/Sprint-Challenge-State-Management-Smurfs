import React from "react";
import { Smurf } from "./Smurf";

export const SmurfList = ({ smurfs }) => {
  //   console.log(smurfs);
  return (
    <div>
      {smurfs.map(smurf => (
        <Smurf age={smurf.age} name={smurf.name} height={smurf.height} />
      ))}
    </div>
  );
};
