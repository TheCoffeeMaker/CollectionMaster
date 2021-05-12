import React from 'react';
import { useHistory } from "react-router-dom";


export const View = () => {
    const history = useHistory();

    const handleLogin = () => {
        localStorage.setItem('loggedIn', 'true');
        history.push("/customers");
    }

    return <div>
        <h1>Login page</h1>
        <button onClick={handleLogin}>Login</button>
    </div>
}
