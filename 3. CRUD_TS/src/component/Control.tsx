import React from "react";
import "../App.css";
// MUI import
import { Button, Stack } from "@mui/material";

function Control(props: { onChangeMode: any }) {
  return (
    <div className="container">
      <Button
        variant="contained"
        className="item"
        onClick={function (e: any) {
          e.preventDefault();
          props.onChangeMode({ mode: "Create" });
        }}
      >
        Create
      </Button>
      <Button
        variant="contained"
        className="item"
        onClick={function (e: any) {
          e.preventDefault();
          props.onChangeMode({ mode: "Update" });
        }}
      >
        Update
      </Button>
      <Button
        variant="contained"
        className="item"
        onClick={function (e: any) {
          e.preventDefault();
          props.onChangeMode({ mode: "Delete" });
        }}
        type="button"
        value="Delete"
      >
        Delete
      </Button>
    </div>
  );
}
const styles = {
  width: "300px",
};

export default Control;
