import React from 'react';
import { Route } from "react-router-dom";

const PageRoute = (props) => {
    let { component: Component, ...rest } = props;
    return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default PageRoute;