import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const NewPostForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField required id="cardName" label="Name on card" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="cardNumber" label="Card number" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="expDate" label="Expiry date" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Select sx={{ width: "100%" }}>
            <MenuItem disabled value="">
              <em>Select Author</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
            Add Post
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default NewPostForm;
