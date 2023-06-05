import { Component, useState } from 'react';
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

function NavMenu() {
  const theme = createTheme(themeOptions);

  const [loggedUser, setLoggedUser] = useState(false)
  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleLoggedUser = (res) => {
    if (res.hasOwnProperty("data")) {
      console.log("RESPONSE--------->", res)
      setLoggedUser(res.data);
      console.log("USER------------>", loggedUser);
    }
    else {
      console.log("RESPONSE--------->", res)
      setLoggedUser(res);
      console.log("USER------------>", loggedUser);
    }
    handleClose();
  }

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
    </ThemeProvider>
  );
}
export default NavMenu;
