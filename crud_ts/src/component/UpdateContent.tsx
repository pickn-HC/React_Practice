import React, { useState } from "react";

function UpdateContent(obj: { item: any; onSubmit: any }) {
  const [title, setTitle] = useState(obj.item.title);
  const [desc, setDesc] = useState(obj.item.desc);

  return (
    <article>
      <h2>Update</h2>
      <form
        action="/create-process"
        method="post"
        onSubmit={(e: any) => {
          e.preventDefault();
          obj.onSubmit(
            e.target.id.value,
            e.target.title.value,
            e.target.desc.value
          );
          alert("Submit!");
        }}
      >
        <input type="hidden" name="id" value={obj.item.id} />
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </p>
        <p>
          <textarea
            name="desc"
            placeholder="description"
            value={obj.item.desc}
            onChange={function (e) {
              obj.item.desc = e.target.value;
              setDesc(e.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit"></input>
        </p>
      </form>
    </article>
  );
}

export default UpdateContent;
