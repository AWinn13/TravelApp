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
import { useState } from 'react';
import axios from 'axios'

const RegForm = ({ open, handleClose, handleSetSignIn, loggedUser }) => {
    const [errors, setErrors] = useState([])
    const [newUser, setNewUser] = useState({
        Name: '',
        Email: '',
        Password: '',
        PasswordConfirm: ''
    })
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        // let pass = bcrypt.hash(newUser.Password, salt)
        // let passC = bcrypt.hash(newUser.PasswordConfirm, salt)
        // setNewUser({ ...newUser, Password: pass })
        // let currentDT = new Date();

        axios.post('https://localhost:7096/api/user',
            { ...newUser},
            {
                "headers": {
                    "Content-Type": "application/json; charset=utf-8",
                    "Server": "Kestrel"
                }
            }
        )
            .then(res => {
                console.log(res);
                localStorage.setItem("user", res.data)
                loggedUser(res.data)
            })
            .catch(err =>
                {
                    console.log(err)
                    if (err.response) {
                        console.log(err.response.data)
                        const errorResponse = err.response.data.errors;
                        console.log(errorResponse)
                        if (typeof errorResponse === "object") {
                            setErrors(errorResponse);
                            console.log("success");
                        } else {
                            console.error('Error:', errorResponse);
                        }
                    } else {
                        console.error('Error:', err.response.data.errors);
                    }
                }
                
            )

    }
    return (
        <Dialog open={open} onClose={handleClose} color='secondary'>
            <DialogTitle><Typography variant='h2' sx={{ textAlign: "center" }}>Register</Typography></DialogTitle>
            <DialogContent>
                {Object.entries(errors).map(([key, value]) => (
                    <div key={key}>

                        {value.map((item, index) => (
                            <Typography variant='body2' color="error">{item}</Typography>
                        ))}
                    </div>
                ))}
                <form onSubmit={onSubmitHandler}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewUser({ ...newUser, Name: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewUser({ ...newUser, Email: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewUser({ ...newUser, Password: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNewUser({ ...newUser, PasswordConfirm: e.target.value })}
                    />
                    <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                        <DialogContentText sx={{
                            display: "flex", alignItems: "center", flexDirection: "column"
                        }}>
                            <Typography variant='body2' sx={{ marginBottom: "10px" }}>Already have an account?</Typography>
                            <Button variant='contained' color='warning' onClick={handleSetSignIn}>
                                <Typography textAlign="center" variant='body2'>Log in</Typography>
                            </Button>
                        </DialogContentText>

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