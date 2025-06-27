import React from "react";
import { List, ListItem, ListItemText, Link } from "@mui/material";

interface Props {
  urls: { original: string; short: string }[];
}

export default function UrlList({ urls }: Props) {
  return (
    <List>
      {urls.map((item, idx) => (
        <ListItem key={idx}>
          <ListItemText
            primary={
              <Link href={item.short} target="_blank" rel="noopener">
                {item.short}
              </Link>
            }
            secondary={item.original}
          />
        </ListItem>
      ))}
    </List>
  );
}
