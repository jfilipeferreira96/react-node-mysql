import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NewPostForm = () => {
  const [inputs, setInputs] = useState({});
  const [authors, setAuthors] = useState([]);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        navigate("../posts", { replace: true });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        let response = await fetch(`http://localhost:3000/new-post`);
        if (response) {
          let data = await response.json();
          console.log(data);
          setAuthors(data);
        } else {
          throw "Error fetching authors.";
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <form onSubmit={onSubmitForm}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField required id="cardName" label="Title" fullWidth variant="standard" name="title" onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="cardNumber" label="Summary" fullWidth variant="standard" name="summary" onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextareaAutosize
            name="content"
            required
            id="expDate"
            label="Post Content"
            minRows={5}
            placeholder="Post content"
            style={{ width: "100%" }}
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Author</InputLabel>
            <Select id="demo-simple-select" value={inputs.author || ""} onChange={handleChange} name="author">
              <MenuItem disabled value="">
                <em>Select Author</em>
              </MenuItem>
              {authors &&
                authors.map((author) => (
                  <MenuItem key={author.id} value={author.id}>
                    {author.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
            Add Post
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewPostForm;
