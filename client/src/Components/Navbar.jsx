import React from 'react';
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          EngineEx
        </Typography>
        <Button  color="inherit" component={Link} to="/Home">Home</Button>
        <Button  color="inherit" component={Link} to="/Login">Login</Button>
        <Button color="inherit" component={Link} to="/Signup">Signup</Button>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Navbar;
