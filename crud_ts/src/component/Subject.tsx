import React from "react";

function Subject(obj: { title: string; sub: string }) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (e) {
            e.preventDefault();
          }}
        >
          {obj.title}
        </a>
      </h1>
      {obj.sub}
    </header>
  );
}

export default Subject;
