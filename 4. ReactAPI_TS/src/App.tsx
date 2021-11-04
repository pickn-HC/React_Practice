import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Navigation(event: any) {
  const arr: Array<any> = [];
  const [data, setData] = useState<Array<any>>();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res: any) => {
      for (let i = 0; i < res.data.length; i += 1) {
        const tmp: any = res.data[i];
        arr.push(
          <li key={tmp.id} data-email={tmp.email}>
            <a
              href={tmp.id}
              onClick={(e: any) => {
                e.preventDefault();
                event.onClick(tmp.name, tmp.email);
              }}
            >
              {tmp.name}
            </a>
          </li>,
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

interface itemType {
  name: string;
  email: string;
}

function App() {
  const [item, setItem] = useState<itemType>({ name: '', email: '' });

  return (
    <div className="App">
      <h1>WEB</h1>
      <Navigation
        onClick={(name: string, email: string) => {
          setItem({ name, email });
        }}
      />
      <article>
        <h2>{item.name}</h2>
        {item.email}
      </article>
    </div>
  );
}

export default App;
