import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthProvider } from '../Firebase/AuthContext';
import { useAuth } from '../Firebase/AuthContext';
import PrivateRoute from '../PrivateRoute';
import Admin from '../Admin';
import LogIn from '../LogIn';
import Home from '../Home';
import { AppBar, Toolbar, Box } from '@mui/material';
import { ADMIN, HOME, LOG_IN } from '../../constants/routes';



export default function App() {
    
    return (
        
        <div className="wrapper">
            <Router>
                <AuthProvider>
                    <AppBar sx={{ bgcolor: 'green' }}>
                        <Toolbar>
                            <h1>GMCdez</h1>
                            <Link to="/">Home</Link>
                            <Link to="/login">Log In</Link>
                            <Link to="/admin">Admin</Link>
                            
                        </Toolbar>
                    </AppBar>
                    <Box sx={{ height: '80px' }}></Box>

                    <Switch>
                        <Route path={LOG_IN} component={LogIn} />
                        <PrivateRoute exact path={ADMIN}component={Admin} />
                        <Route path={HOME} component={Home} />
                    </Switch>
                </AuthProvider>
            </Router>
        </div>
    );
}


