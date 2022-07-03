import React from "react";
import NewPostForm from "../components/NewPostForm";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const NewPost = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Create a New Post
        </Typography>
        <NewPostForm />
      </Paper>
    </Container>
  );
};

export default NewPost;
