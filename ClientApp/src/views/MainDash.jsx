import { Container, Box, Paper, Grid, Typography, Link, Button, IconButton } from "@mui/material";
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { Component, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import TripCard from "../components/TripCard";


const Dashboard = ({handleLoggedUser, loggedUser}) => {
    const [usersTrips, setUsersTrips] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const id = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate("")

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setLoaded(!loaded);
            handleLoggedUser(loggedInUser);
        }
        else {
            navigate("/")
        }
    }, []);

    useEffect(() => {
        axios.get("https://localhost:7096/api/trip/"+ id.userId)
        .then(res => {
            setUsersTrips(res.data);
            setLoaded(!loaded);
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (

            <Grid container spacing={2} marginTop={2} paddingX={2}>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <Paper elevation={3} sx={{padding: "10px", backgroundColor: "#CCABA3"}}>

                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} sx={{padding: "10px"}}>
                        <Typography textAlign="center" variant="h3" component="h2" >Roams</Typography> 
                        <Link href="/dashboard/roam">
                            <IconButton color="secondary" area-aria-label="Add a Roam">
                                <ControlPointRoundedIcon/>
                            </IconButton>
                        </Link>
                            {usersTrips.map((trip, i) => {
                                return(
                                    <TripCard key={i} trip={trip} />
                                );
                            })}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} sx={{padding: "10px", backgroundColor: "#CCABA3"}}></Paper>
                </Grid>
            </Grid>

    );
}

export default Dashboard;