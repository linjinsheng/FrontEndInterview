import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const result = useMemo(() => fibonacci(count), [count]);

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
   );
}

export default App;