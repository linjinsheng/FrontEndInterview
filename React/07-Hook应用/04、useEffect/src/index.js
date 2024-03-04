import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
let timer = null;

function App() {
  const [count, setCount] = useState(0);
  useEffect(
    () => {
      document.title = "componentDidMount" + count;
    },
    [count]
  );
  useEffect(() => {
    timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      document.title = "componentWillUnmount";
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      Count: {count}
      <button onClick={() => clearInterval(timer)}>clear</button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
