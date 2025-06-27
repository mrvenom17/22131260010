import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

interface Props {
  urls: { original: string; short: string }[];
}

export default function UrlList({ urls }: Props) {
  return (
    <List>
      {urls.map((item, idx) => (
        <ListItem key={idx}>
          <ListItemText
            primary={item.short}
            secondary={item.original}
          />
        </ListItem>
      ))}
    </List>
  );
}
