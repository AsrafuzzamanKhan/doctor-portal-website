import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import img from '../../../images/login.png'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData)
        setLoginData(newLoginData)
    };

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {

            alert('wrong password')
            return;

        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Name"
                            name="name"
                            onBlur={handleOnBlur}

                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            type="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Re-type Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />

                        <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Log in</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login"
                        ><Button variant="text">Already registered? please login</Button>
                        </NavLink>

                    </form>}
                    {isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={img} alt=""></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;