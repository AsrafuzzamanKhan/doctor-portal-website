import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import img from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
const Login = () => {
    const { user, signInWithGoogle, loginUser, isLoading, authError } = useAuth();


    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    };

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>Log in</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Standard"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            name="password"
                            onBlur={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />

                        <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Log in</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register"
                        ><Button variant="text">New user? Please register</Button>
                        </NavLink>

                    </form>

                    <Button type="submit" sx={{ width: '75%', m: 1 }}
                        onClick={handleGoogleSignIn}
                        variant="contained">Google sign in</Button>
                    <br />
                    {
                        isLoading && <CircularProgress />
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

export default Login;