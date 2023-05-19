import React, { Component, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { Link } from '@mui/material';
import ProfileMenu from './ProfileMenu';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './ThemeComponent';

import LoginForm from './LoginForm';
import RegForm from './RegForm';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavMenu() {
  const theme = createTheme(themeOptions);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSignIn(false);
    setOpen(false);
  };


  const handleSetSignIn = () => {
    setSignIn(!signIn);
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant='h2' component="body2">
              <Link color='inherit' sx={{"&:hover": {color: "inherit"}}} underline='none' href='/'>RoamMap </Link> 
            </Typography>
            <ProfileMenu/>
            {/* <Button variant='contained' color="secondary" onClick={handleClickOpen}>
              <Typography textAlign="center" variant='body2'>Login</Typography>
            </Button>
            {signIn ? 
              <RegForm open={open} handleClose={handleClose} handleSetSignIn={handleSetSignIn}/>:
              <LoginForm open={open} handleClose={handleClose} handleSetSignIn={handleSetSignIn}/>
            } */}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default NavMenu;
