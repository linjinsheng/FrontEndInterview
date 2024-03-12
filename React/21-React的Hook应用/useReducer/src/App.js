import React, { useReducer } from "react";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "INCREMENT" });
  }

  function decrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div>
      <h2>Count:{state.count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
     </div>
   );
}

export default App;