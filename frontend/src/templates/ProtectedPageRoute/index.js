import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

const ProtectedPageRoute = (props) => {
    let { component: Component, ...rest } = props;
    const isUserLoggedIn = localStorage.getItem('loggedIn');
    if(isUserLoggedIn) {
    return( 
       <React.Fragment>
            <Header />
            <Route {...rest} render={(props) => <Component {...props} />} />
            <Footer />
        </React.Fragment>
        )
    }
    return <Redirect to="/"/>
}

export default ProtectedPageRoute;