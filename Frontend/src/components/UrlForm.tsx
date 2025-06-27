import React, { useState } from "react";
import { Box, Button, TextField, Grid } from "@mui/material";
import { shortenURL } from "../../../LoggingMiddleware/utils/api";

interface Props {
  onShorten: (original: string, short: string) => void;
}

export default function UrlForm({ onShorten }: Props) {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState<number>(30);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await shortenURL(url, shortcode, validity);
      onShorten(url, data.shortenedUrl || "unknown");
      setUrl("");
      setShortcode("");
      setValidity(30);
    } catch (err) {
      alert("Failed to shorten URL.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Original URL"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
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
            fullWidth
            type="number"
            value={validity}
            onChange={(e) => setValidity(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Shorten URL
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
