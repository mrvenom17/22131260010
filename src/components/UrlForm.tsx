import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { shortenURL } from "../utils/api";

interface Props {
  onShorten: (original: string, short: string) => void;
}

export default function UrlForm({ onShorten }: Props) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await shortenURL(url);
      onShorten(url, data.shortenedUrl || "unknown");
      setUrl("");
    } catch (err) {
      alert("Failed to shorten URL.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={3}>
      <TextField
        label="Enter URL"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Shorten URL
      </Button>
    </Box>
  );
}
