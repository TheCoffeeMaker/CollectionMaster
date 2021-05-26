import React, { useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import './index.scss';


export const View = () => {
    const history = useHistory();

    const handleLogin = () => {
        localStorage.setItem('loggedIn', 'true');
        history.push("/customers");
    }
    
    return (
        <div className="login-page">
            <div className="container">
                <div className="login-container">
                    <h3>Get Started</h3>
                    <h3>Domain served from cmd:</h3>
                    <h4>{process.env.REACT_APP_API_DEV_DOMAIN}</h4>
                    <div>
                        <TextField 
                        label="Email" 
                        />
                    </div>    
                    <div>
                    <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                    </div>
                </div>
                <div className="login-info">
            
                </div>
            </div>
         </div>
         )
}
