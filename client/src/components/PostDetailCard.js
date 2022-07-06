import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function PostDetailCard() {
  const [detail, setDetail] = useState([]);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async (id) => {
      try {
        let response = await fetch(`http://localhost:3000/posts/${id}`);
        if (response) {
          let data = await response.json();
          console.log(data);
          setDetail(data);
        } else {
          throw "Error fetching the details.";
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchDetail(id);
  }, [id]);

  return (
    <Card sx={{ maxWidth: 900, mt: 3 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author Info: {detail.author_name} - {detail.author_email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Data/hora: {detail.humanReadableDate}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            {detail.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
