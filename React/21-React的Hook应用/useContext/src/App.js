import React, { useState } from "react";
import MyContext from "./MyContext";
import ChildComponent from "./ChildComponent";

function App() {
  const [name, setName] = useState("John");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <MyContext.Provider value={name}>
        <ChildComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;