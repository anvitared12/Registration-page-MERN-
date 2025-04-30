import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", formData);
      alert(res.data.message);
    } catch (err) {
      alert("Failed to sign up");
      console.error(err);
    }
  };

  // Style objects
  const heading = { fontSize: "2.5rem", fontWeight: "600" };
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"
  };
  const row = { display: "flex", marginTop: "2rem" };
  const btnStyle = {
    marginTop: "2rem",
    fontSize: "1.2rem",
    fontWeight: 700,
    backgroundColor: "blue",
    color: "white"
  };

  return (
    <Grid align="center">
      <Paper style={paperStyle} sx={{ width: { xs: "80vw", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw" }, height: '60vh' }}>
        <Typography style={heading}>SignUp</Typography>
        <form onSubmit={handleSubmit}>
          <TextField style={row} label="Enter Name" name="name" type="text" onChange={handleChange} fullWidth />
          <TextField style={row} label="Enter Email" name="email" type="email" onChange={handleChange} fullWidth />
          <TextField style={row} label="Enter Password" name="password" type="password" onChange={handleChange} fullWidth />
          <Button type="submit" variant="contained" style={btnStyle} fullWidth>SignUp</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;

