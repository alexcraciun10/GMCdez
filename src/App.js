import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Home from './Home';
import { AppBar, Toolbar, Box } from '@mui/material';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <AppBar sx={{ bgcolor: 'green' }}>
                    <Toolbar>
                        <h1>GMCdez</h1>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/dashboard">Dash</Link>
                    </Toolbar>
                </AppBar>
                <Box sx={{ height: '80px' }}></Box>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
