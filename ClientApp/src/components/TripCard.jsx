import { Paper, Typography } from "@mui/material";
import { useState } from "react";
var moment = require("moment")

const TripCard = ({trip}) => {
    const convStartDate = new Date(trip.startDate)
    const convEndDate = new Date(trip.endDate)
    const startDate = moment(convStartDate, "YYYY-MM-DD").format("MMMM Do, YYYY")
    const endDate = moment(convEndDate, "YYYY-MM-DD").format("MMMM Do, YYYY")
    return (
        <Paper elevation={3} sx={{ padding: "10px", marginBottom: "10px", width: "70%", marginX: "auto", backgroundColor: "#CCABA3"}}>
            <Typography variant="h4" component="h3" mb={2}>
                {trip.tripName}
            </Typography>
            <Typography variant="h5" component="h4" mb={2}>
                {startDate} - {endDate}
            </Typography>
            <Typography variant="h5" component="h4" mb={2}>
                {trip.location}
            </Typography>
            <Typography variant="h5" component="h4" mb={2}>
                {trip.description}
            </Typography>
        </Paper>
    );
}
export default TripCard;