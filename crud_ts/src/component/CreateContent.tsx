import { Button, TextField } from "@material-ui/core";
import React from "react";

// textfield 를 두개 만들고 button을 통해서 submit하는 형태로 만들고
// submit에서 onSubmit 이 되는지 확인해보자
function CreateContent(obj: { onSubmit: any }) {
  let _title: string = "";
  let _desc: string = "";

  return (
    <article>
      <h2>Create</h2>
      <TextField
        type="text"
        name="title"
        placeholder="title"
        onChange={(e: any) => {
          e.preventDefault();
          _title = _title + e.nativeEvent.data;
        }}
      />
      <TextField
        type="text"
        name="desc"
        placeholder="description"
        onChange={(e: any) => {
          e.preventDefault();
          _desc = _desc + e.nativeEvent.data;
        }}
      />
      <Button
        onClick={(e: any) => {
          e.preventDefault();
          obj.onSubmit(_title, _desc);
          alert("Submit!");
        }}
      >
        제출
      </Button>

      {/* <form
        action="/create-process"
        method="post"
        onSubmit={(e: any) => {
          e.preventDefault();
          obj.onSubmit(e.target.title.value, e.target.desc.value);
          alert("Submit!");
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="desc" placeholder="description" />
        </p>
        <p>
          <input type="submit"></input>
        </p>
      </form> */}
    </article>
  );
}

export default CreateContent;
