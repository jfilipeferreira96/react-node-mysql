import React, { useState, useEffect } from "react";
import MuiCard from "../components/MuiCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h1" variant="h4" align="center" sx={{ mt: 4 }}>
        All Posts
      </Typography>
      <MuiCard />
    </Container>
  );
};

export default Home;
