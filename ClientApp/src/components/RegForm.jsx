import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText,
    DialogActions, 
    TextField,
    Typography,
    Button,
    Container
} 
from '@mui/material';

const RegForm = ({open, handleClose, handleSetSignIn}) => {
    const onSubmitHandler = () => {
        console.log("**************************************the form has been submitted")
    }
    return (
        <Dialog open={open} onClose={handleClose} color='secondary'>
            <DialogTitle><Typography variant='h2' sx={{textAlign: "center"}}>Register</Typography></DialogTitle>
            <DialogContent>
            <form onSubmit={onSubmitHandler}>
                <TextField
                    autoFocus
                    margin="dense"
                    label="First name"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Last name"
                    fullWidth
                    variant="standard"
                    type='text'
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />
                <DialogContentText sx={{display:"flex", justifyContent: "space-between",
            marginTop: "10px"}}>
                    Already have an account?
                    <Button variant='contained' color='warning' onClick={handleSetSignIn}>
                        <Typography textAlign="center" variant='body2'>Log in</Typography>
                    </Button>
                </DialogContentText>
                <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
                    <Button type='submit' variant='contained'>
                        <Typography textAlign="center" variant='body2'>Submit</Typography>
                    </Button>
                </Container>
            </form>
            </DialogContent>
        </Dialog>
    );
}
export default RegForm