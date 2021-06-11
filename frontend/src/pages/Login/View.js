import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import logo from '../../resources/logo.png';
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
                    <img src={logo} alt="TheCoffeeMaker Logo"/>
                </div>
            </div>
         </div>
         )
}
