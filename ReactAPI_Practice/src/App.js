import React, { useEffect, useState } from "react";
import axios from "axios";

function Navigation(event) {
  const arr = [];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      for (let i = 0; i < res.data.length; i += 1) {
        const tmp = res.data[i];
        arr.push(
          <li key={tmp.id} email={tmp.email}>
            <a
              href={tmp.id}
              onClick={(e) => {
                e.preventDefault();
                event.onClick(tmp.name, tmp.email);
              }}
            >
              {tmp.name}
            </a>
          </li>
        );
      }
      setData(arr);
    });
  });
  return (
    <nav>
      <ul>{data}</ul>
    </nav>
  );
}

function App() {
  const [item, setItem] = useState([]);

  return (
    <div className="App">
      <h1>WEB</h1>
      <Navigation
        onClick={(name, email) => {
          setItem([name, email]);
        }}
      />
      <article>
        <h2>{item[0]}</h2>
        {item[1]}
      </article>
    </div>
  );
}

export default App;
