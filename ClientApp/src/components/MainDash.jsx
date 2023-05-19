import { Container, Box, Paper, Grid } from "@mui/material";


const Dashboard = () => {



    return (
        <>
            <Grid container spacing={2} marginTop={2}>
                <Grid item xs={3} sx={{textAlign: "center"}}>
                    <Paper elevation={3} sx={{padding: "10px"}}></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} sx={{padding: "10px"}}>
                        <Box sx={{textAlign: "center"}}>
                            <h3>Roams</h3>
                        </Box>
                        
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} sx={{padding: "10px"}}></Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboard;