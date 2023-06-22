import { Container, Box, Paper, Grid, Typography, Link, Button, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { themeOptions} from './ThemeComponent';
import { Component, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Dashboard = ({handleLoggedUser}) => {
    const theme = createTheme(themeOptions);
    const [loggedUser, setLoggedUser] = useState(false)
    const [usersTrips, setUsersTrips] = useState([]);
    const id = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate("")

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            // const foundUser = JSON.parse(loggedInUser);
            handleLoggedUser(loggedInUser);
        }
        else {
            navigate("/")
        }
    }, [loggedUser]);

    useEffect(() => {
        axios.get("https://localhost:7096/api/trip/"+ id.UserId)
        .then(res => {
            setUsersTrips(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    })

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} marginTop={2} paddingX={2}>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <Paper elevation={3} sx={{padding: "10px", backgroundColor: "#CCABA3"}}></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} sx={{padding: "10px"}}>
                        <Typography textAlign="center" variant="h3" >Roams</Typography> 
                        <Link href="/dashboard/roam">
                            <IconButton color="secondary" area-aria-label="Add a Roam">
                                <ControlPointRoundedIcon/>
                            </IconButton>
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} sx={{padding: "10px", backgroundColor: "#CCABA3"}}></Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Dashboard;