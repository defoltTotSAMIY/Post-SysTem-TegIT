import { useState } from "react";
import ReactDOM from "react-dom";

function Component4({ user }) {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

  export default Component4;