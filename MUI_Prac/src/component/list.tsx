import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
import { Inbox, ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

function ListFunction() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="List_Container">
      <h1> List Practice</h1>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={(e: any) => {
                e.preventDefault();
                setOpen(!open);
              }}
            >
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Star" secondary="반짝반짝" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </nav>
    </div>
  );
}

export default ListFunction;
