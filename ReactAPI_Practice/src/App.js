import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Nav() {
  const [data, setData] = useState([]);

  useEffect(async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);

  }, []);


  return (
    <nav>
      <ul>
        {data.map((item) => {
          <li>{data[0].id}</li>
        })}
      </ul>
    </nav>
  );
}


function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav></Nav>
      <article>
        <h2>Welcome</h2>
        Hello, React &amp; Axios
      </article>
    </div>
  );
}

export default App;
