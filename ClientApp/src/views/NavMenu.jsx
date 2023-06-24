import { Component, useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { Link } from '@mui/material';
import ProfileMenu from '../components/ProfileMenu';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from '../components/ThemeComponent';

import LoginForm from '../components/LoginForm';
import RegForm from '../components/RegForm';

function NavMenu({loggedUser, handleLoggedUser, handleClickOpen, signIn, open, handleClose, handleSetSignIn}) {
  const theme = createTheme(themeOptions);

  return (

      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant='h2' component="h1">
              <Link color='inherit' sx={{ "&:hover": { color: "inherit" } }} underline='none' href='/'>RoamMap </Link>
            </Typography>
            {loggedUser ?

              <ProfileMenu loggedUser={handleLoggedUser} />
              :
              <Button variant='contained' color="secondary" onClick={handleClickOpen}>
                <Typography textAlign="center" variant='body2'>Login</Typography>
              </Button>
            }
            {
              signIn ?
                <RegForm open={open} handleClose={handleClose} handleSetSignIn={handleSetSignIn} loggedUser={handleLoggedUser} /> :
                <LoginForm open={open} handleClose={handleClose} handleSetSignIn={handleSetSignIn} loggedUser={handleLoggedUser} />
            }
          </Toolbar>
        </Container>
      </AppBar>

  );
}
export default NavMenu;
