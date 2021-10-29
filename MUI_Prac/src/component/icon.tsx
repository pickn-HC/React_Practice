import * as React from "react";
import { Grid, SvgIcon, SvgIconProps, Typography } from "@mui/material";
import { Delete, DeleteForever, Apple } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

function Icon() {
  function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <div className="Icon_Container">
      <div className="Icon_1">
        <h1> Material Icon Practice </h1>
        <Grid container sx={{ color: "text.primary" }}>
          <Grid item xs={4}>
            <Typography>Filled</Typography>
          </Grid>
          <Grid item xs={8}>
            <Delete />
            <DeleteForever />
          </Grid>
        </Grid>
        <Apple />
      </div>
      <div className="Icon_2">
        <h1> SvgIcon Practice</h1>
        <HomeIcon sx={{ fontSize: 40 }} />
        <HomeIcon fontSize="large" color="primary" />
        <HomeIcon color="secondary">default</HomeIcon>
        <HomeIcon fontSize="small" sx={{ color: pink[100] }} />
      </div>
    </div>
  );
}

export default Icon;
