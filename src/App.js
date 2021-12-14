import React from 'react';
import { AuthProvider } from './components/Firebase/AuthContext';
import { Link, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Box } from '@mui/material';
import Admin from './components/Admin';
import SignIn from './components/SignIn';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import * as ROUTES from './constants/routes';

export default function App() {
    return (
        <div className="wrapper">
            <AuthProvider>
                <AppBar sx={{ bgcolor: 'green' }}>
                    <Toolbar>
                        <h1>GMCdez</h1>
                        <Link to="/">Home</Link>
                        <Link to="/signin">Sign In</Link>
                        <Link to="/admin">Admin</Link>
                    </Toolbar>
                </AppBar>
                <Box sx={{ height: '80px' }}></Box>

                <Routes>
                    <Route path={ROUTES.HOME} element={<Home/>} />
                    <Route path={ROUTES.SIGNIN} element={<SignIn/>} />
                    <Route
                        path={ROUTES.ADMIN}
                        element={
                            <PrivateRoute redirectTo="/signin">
                                <Admin />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </div>
    );
}
