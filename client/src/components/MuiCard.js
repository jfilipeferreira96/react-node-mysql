import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MuiCard() {
  return (
    <Card sx={{ maxWidth: 900, mt: 3 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <Button color="error" startIcon={<DeleteIcon />}>
          Delete Post
        </Button>
        <Button startIcon={<EditIcon />}>Edit Post</Button>
        <Button color="success" startIcon={<RemoveRedEyeIcon />}>
          View Post
        </Button>
      </CardActions>
    </Card>
  );
}
