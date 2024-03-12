import React, { useState, useRef, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count])

  function handleAlertClick() {
    setTimeout(() => {
      alert(`You clicked ${countRef.current} times`);
    }, 3000);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleAlertClick}>Show Alert</button>
    </div>
   );
}

export default App;