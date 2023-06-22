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
import { red } from '@mui/material/colors';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({open, handleClose, handleSetSignIn, loggedUser}) => {
    const [errors, setErrors] = useState("")
    const [authUser, setAuthUser] = useState({
        UserEmail: "",
        UserPassword:""
    })
    const navigate = useNavigate("")
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.post("https://localhost:7096/api/user/authenticate",
            { ...authUser },
            {
                "headers": {
                    "Content-Type": "application/json; charset=utf-8",
                    "Server": "Kestrel"
                }
            }
        )
            .then(res => {
                console.log(res.data);
                localStorage.setItem("user",JSON.stringify(res.data))
                loggedUser(res.data)
                navigate("/dashboard")

            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data)
                    // const errorResponse = err.response.data.errors;
                    // console.log(errorResponse)
                    setErrors("Username or password is incorrect");
                    
                        // console.error('Error:', errorResponse);
                    
                } else {
                    console.error('Error:', err);
                }
            }

            )
    }
    return (
        <Dialog open={open} onClose={handleClose} color='secondary'>
            <DialogTitle><Typography variant='h2' sx={{textAlign: "center"}}>Login</Typography></DialogTitle>
            <DialogContent>
                <Typography variant='body2' color="error">{errors}</Typography>
                <form onSubmit={onSubmitHandler}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setAuthUser({...authUser, UserEmail: e.target.value})}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setAuthUser({ ...authUser, UserPassword: e.target.value })}
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