import React from "react";
import { Radio, FormControlLabel, RadioGroup } from "@material-ui/core";

function TOC(props: { items: any; onChangePage: any }) {
  const temp = [];

  for (let i = 0; i < props.items.length; i++) {
    temp.push(
      <FormControlLabel
        key={props.items[i].id}
        value={props.items[i].title}
        control={<Radio />}
        label={props.items[i].title}
        onChange={function (e: any) {
          e.preventDefault();
          props.onChangePage({ mode: "Read", modeNbr: i });
        }}
      ></FormControlLabel>
    );
  }

  return <RadioGroup>{temp}</RadioGroup>;
}

export default TOC;
