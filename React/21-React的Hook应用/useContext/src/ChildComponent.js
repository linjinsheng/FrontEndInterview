import React, { useContext } from "react";
import MyContext from "./MyContext";

function ChildComponent() {
  const name = useContext(MyContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>{name}, how are you doing?</p>
    </div>
  );
}

export default ChildComponent;