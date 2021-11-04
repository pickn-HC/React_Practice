import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function UpdateContent(obj: { item: any; onSubmit: any }) {
  const [title, setTitle] = useState(obj.item.title);
  const [desc, setDesc] = useState(obj.item.desc);

  return (
    <article>
      <h2>Update</h2>
      <TextField type="hidden" name="id" value={obj.item.id} />
      <TextField
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e: any) => {
          e.preventDefault();
          setTitle(e.target.value);
        }}
      />
      <TextField
        type="text"
        name="desc"
        placeholder="description"
        value={desc}
        onChange={(e: any) => {
          e.preventDefault();
          setDesc(e.target.value);
        }}
      />
      <Button
        onClick={(e: any) => {
          e.preventDefault();
          obj.onSubmit(obj.item.id, title, desc);
          alert("Submit!");
        }}
      >
        제출
      </Button>
    </article>
  );
}

export default UpdateContent;
