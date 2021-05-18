import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, token, setToken, ...rest }) => {
    let tokenHandler = { token, setToken };
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            token ?
                <Component {...tokenHandler} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;