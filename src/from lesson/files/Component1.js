import { useState } from "react";
import ReactDOM from "react-dom";
import Component2 from './Component2'

function Component1() {
    const [user, setUser] = useState("Jesse Hall");
  
    return (
      <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </>
    );
  }
export default Component1;