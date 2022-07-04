import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function MuiCard({ post }) {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response = await fetch(`http://localhost:3000/posts`);
        if (response) {
          let data = await response.json();
          console.log(data);
          setPosts(data);
        } else {
          throw "Error fetching Posts.";
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      });
      console.log(response);
      if (response.ok) {
        setPosts((prevState) => prevState.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const viewPost = (id) => {
    console.log(id);
  };

  return posts.map((post) => (
    <Card sx={{ maxWidth: 900, mt: 3 }} key={post.id}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <Button color="error" startIcon={<DeleteIcon />} onClick={() => deletePost(post.id)}>
          Delete Post
        </Button>
        <Link to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
          <Button startIcon={<EditIcon />}>Edit Post</Button>
        </Link>
        <Button color="success" startIcon={<RemoveRedEyeIcon />} onClick={() => viewPost(post.id)}>
          View Post
        </Button>
      </CardActions>
    </Card>
  ));
}
