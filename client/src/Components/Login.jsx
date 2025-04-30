import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import axios from 'axios';

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", formData);
      alert(res.data.message);
      // Redirect or perform further actions on successful login
    } catch (err) {
      setError("Invalid credentials or error occurred");
    }
  };

  // Styles for the component
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
      <Paper
        style={paperStyle}
        sx={{
          width: {
            xs: "80vw", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw"
          },
          height: '60vh'
        }}
      >
        <Typography style={heading}>Login</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            style={row}
            label="Enter Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            style={row}
            label="Enter Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" style={btnStyle} fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Login;
