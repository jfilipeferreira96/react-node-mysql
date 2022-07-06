import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

const NewPostForm = () => {
  const [inputs, setInputs] = useState({});
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      if (response) {
        navigate("../posts", { replace: true });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}/edit`);

        if (response) {
          let data = await response.json();
          setInputs(data);
        } else {
          throw "Error fetching Values.";
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchValues();
  }, []);

  //if (!inputs) return <div></div>;

  return (
    <form onSubmit={onSubmitForm}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cardName"
            value={inputs.title || ""}
            label="Title"
            fullWidth
            variant="standard"
            name="title"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cardNumber"
            value={inputs.summary || ""}
            label="Summary"
            fullWidth
            variant="standard"
            name="summary"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cardNumber"
            value={inputs.content || ""}
            label="Body"
            fullWidth
            variant="standard"
            name="content"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Author</InputLabel>
            <Select id="demo-simple-select" disabled value={inputs.author_id || ""} onChange={handleChange} name="author">
              <MenuItem value={inputs.author_id || ""}>{inputs.name || ""}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
            Edit Post
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewPostForm;
