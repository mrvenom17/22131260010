import React, { useState } from "react";
import { Box, Button, TextField, Grid } from "@mui/material";
import { generateShortcode } from "../../../LoggingMiddleware/utils/shortcode";

interface Props {
  onShorten: (original: string, short: string) => void;
}

export default function UrlForm({ onShorten }: Props) {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState<number>(30); // in minutes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const code = shortcode || generateShortcode();
    const shortUrl = `${window.location.origin}/#/${code}`;

    // Save to localStorage with expiry
    const expiresAt = Date.now() + validity * 60 * 1000;
    localStorage.setItem(
      code,
      JSON.stringify({ url, expiresAt })
    );

    onShorten(url, shortUrl);
    setUrl("");
    setShortcode("");
    setValidity(30);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Original URL"
            fullWidth
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Custom Shortcode (optional)"
            fullWidth
            value={shortcode}
            onChange={(e) => setShortcode(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Validity (minutes)"
            type="number"
            fullWidth
            value={validity}
            onChange={(e) => setValidity(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Shorten URL
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
