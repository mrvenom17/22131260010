import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Home from "./pages/Home";

export default function App() {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          URL Shortener (Frontend Only)
        </Typography>
        <Home />
      </Box>
    </Container>
  );
}
