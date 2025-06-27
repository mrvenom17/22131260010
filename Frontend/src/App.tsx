import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Home from "./pages/Home";

export default function App() {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h3" align="center" gutterBottom>
          URL Shortener
        </Typography>
        <Home />
      </Box>
    </Container>
  );
}
