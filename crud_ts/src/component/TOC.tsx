import React from "react";

function TOC(props: { items: any; onChangePage: any }) {
  const temp = [];

  for (let i = 0; i < props.items.length; i++) {
    temp.push(
      <li key={i}>
        <a
          href="/"
          onClick={function (e) {
            e.preventDefault();
            props.onChangePage({ mode: "Read", modeNbr: i });
          }}
        >
          {props.items[i].title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ul>{temp}</ul>
    </nav>
  );
}

export default TOC;
