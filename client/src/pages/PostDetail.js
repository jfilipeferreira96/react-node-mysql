import React, { useState, useEffect } from "react";
import PostDetailCard from "../components/PostDetailCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PostDetail from "../components/PostDetailCard";

const Home = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h1" variant="h4" align="center" sx={{ mt: 4 }}>
        All Posts
      </Typography>
      <PostDetailCard />
    </Container>
  );
};

export default Home;
