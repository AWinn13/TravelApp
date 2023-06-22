import React, { Component, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
import Dashboard from "./components/MainDash";
import RoamForm from "./components/RoamForm";
import {themeOptions} from "./components/ThemeComponent";
import './custom.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavMenu from './components/NavMenu';

const theme = createTheme(themeOptions);

export default function App() {
  
    const [loggedUser, setLoggedUser] = useState(false)
    const [open, setOpen] = useState(false);
    const [signIn, setSignIn] = useState(false);
  
    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        // const foundUser = JSON.parse(loggedInUser);
        setLoggedUser(loggedInUser);
  
      }
    }, [loggedUser]);

    const handleLoggedUser = (res) => {
      setLoggedUser(res)
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
        <NavMenu loggedUser={loggedUser}
          handleLoggedUser={handleLoggedUser}
          handleClickOpen={handleClickOpen}
          signIn={signIn}
          open={open}
          handleClose={handleClose}
          handleSetSignIn={handleSetSignIn}
        />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard handleLoggedUser={handleLoggedUser}/>} />
          <Route path='/dashboard/roam' element={<RoamForm handleLoggedUser={handleLoggedUser} />} />
          </Routes>

      </ThemeProvider>
    );
  }

