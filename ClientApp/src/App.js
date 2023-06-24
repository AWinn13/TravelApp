import React, { Component, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./views/Home";
import Dashboard from "./views/MainDash";
import RoamForm from "./views/RoamForm";
import {themeOptions} from "./components/ThemeComponent";
import './custom.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavMenu from './views/NavMenu';
import { useNavigate } from 'react-router-dom';
const theme = createTheme(themeOptions);

export default function App() {
    const navigate = useNavigate("");
    const [loggedUser, setLoggedUser] = useState(false)
    const [open, setOpen] = useState(false);
    const [signIn, setSignIn] = useState(false);
  
    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        setLoggedUser(loggedInUser);
      }
      else {
        navigate("/")
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
            <Route exact path='/' element={<Home handleLoggedUser={handleLoggedUser} loggedUser={loggedUser} />} />
            <Route path='/dashboard' element={<Dashboard handleLoggedUser={handleLoggedUser} loggedUser={loggedUser} />} />
            <Route path='/dashboard/roam' element={<RoamForm handleLoggedUser={handleLoggedUser} loggedUser={loggedUser} />} />
          </Routes>

      </ThemeProvider>
    );
  }

