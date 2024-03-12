import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;