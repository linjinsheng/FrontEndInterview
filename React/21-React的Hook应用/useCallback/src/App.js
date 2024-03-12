import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
   );
}

export default App;