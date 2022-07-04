import React from "react";
import EditPostForm from "../components/EditPostForm";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const EditPost = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Edit a Post
        </Typography>
        <EditPostForm />
      </Paper>
    </Container>
  );
};

export default EditPost;
