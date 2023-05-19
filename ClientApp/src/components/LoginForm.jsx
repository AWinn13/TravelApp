import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText,
    DialogActions,
    TextField,
    Typography,
    Link,
    Button,
    Container
} 
from '@mui/material';

const LoginForm = ({open, handleClose, handleSetSignIn}) => {
    return (
        <Dialog open={open} onClose={handleClose} color='secondary'>
            <DialogTitle><Typography variant='h2' sx={{textAlign: "center"}}>Login</Typography></DialogTitle>
            <DialogContent>
                <form action="">
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
                    
                    <DialogContentText mt={2} sx={{display:"flex", justifyContent: "space-between", marginTop: "10px"}}>
                        Need an account?
                        <Button variant='contained' color='warning' onClick={handleSetSignIn}>
                            <Typography textAlign="center" variant='body2'>Sign Up</Typography>
                        </Button>
                    </DialogContentText>
                    <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
                        <Button type='submit' variant='contained'>
                            <Typography textAlign="center" variant='body2'>Submit</Typography>
                        </Button>
                    </Container>
                </form>
            </DialogContent>
            <DialogActions>
                
            </DialogActions>
        </Dialog>
    );
}
export default LoginForm