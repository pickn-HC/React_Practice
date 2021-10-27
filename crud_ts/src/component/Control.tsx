import React from "react";
// MUI import
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";

function Control(props: { onChangeMode: any }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        href="/create"
        onClick={function (e: any) {
          e.preventDefault();
          props.onChangeMode({ mode: "Create" });
        }}
      >
        Create
      </Button>
      <Button
        variant="contained"
        href="/update"
        onClick={function (e: any) {
          e.preventDefault();
          props.onChangeMode({ mode: "Update" });
        }}
      >
        Update
      </Button>
      <Button
        variant="contained"
        onClick={function (e: any) {
          e.preventDefault();
          props.onChangeMode({ mode: "Delete" });
        }}
        type="button"
        value="Delete"
      >
        Delete
      </Button>
    </Stack>
  );
}

export default Control;
