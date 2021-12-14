import React, { useRef, useState } from 'react';
import { useAuth } from '../Firebase/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { ADMIN } from '../../constants/routes';

export default function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate(from, {replace: true});
        } catch {
            setError('Failed to log in');
        }

        setLoading(false);
    }

    return (
        <Box>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                            <Typography variant="subtitle1">Sign in with Email address</Typography>
                            {error && <h1 variant="danger">{error}</h1>}
                            <TextField id="outlined-input" label="Email" type="email" inputRef={emailRef} required />
                            <TextField id="outlined-password-input" label="Password" type="password" inputRef={passwordRef} required />
                            <Button disabled={loading} variant="outlined" disableRipple="true" type="submit" onClick={handleSubmit}>
                                Sign In
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
