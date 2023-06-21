import { Container, Box, Paper, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions} from './ThemeComponent';
import { Component, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const theme = createTheme(themeOptions);
    const [loggedUser, setLoggedUser] = useState(false)
    const navigate = useNavigate("")

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            // const foundUser = JSON.parse(loggedInUser);
            setLoggedUser(loggedInUser);

        }
        else {
            navigate("/")
        }
    }, [loggedUser]);
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} marginTop={2}>
             <a href='/dashboard/roam'>Roam Form</a>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <Paper elevation={3} sx={{padding: "10px", backgroundColor: "#CCABA3"}}></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} sx={{padding: "10px"}}>
                        <Typography textAlign="center" variant="h3" >Roams</Typography> 
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