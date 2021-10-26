import React from "react";
// MUI import
// import { Button } from "@material-ui/core";

function Control(props: { onChangeMode: any }) {
  return (
    <ul>
      {/* <Button variant="contained">Contained</Button> */}
      <li>
        <a
          href="/create"
          onClick={function(e: any) {
            e.preventDefault();
            props.onChangeMode({ mode: "Create" });
          }}
        >
          Create
        </a>
      </li>
      <li>
        <a
          href="/update"
          onClick={function(e: any) {
            e.preventDefault();
            props.onChangeMode({ mode: "Update" });
          }}
        >
          Update
        </a>
      </li>
      <li>
        <input
          onClick={function(e: any) {
            e.preventDefault();
            props.onChangeMode({ mode: "Delete" });
          }}
          type="button"
          value="Delete"
        ></input>
      </li>
    </ul>
  );
}

export default Control;
