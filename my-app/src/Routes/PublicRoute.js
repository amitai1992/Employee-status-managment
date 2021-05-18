import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({component: Component ,restricted , token,...rest}) => {
    console.log(restricted);
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
             token && restricted ?
             <Redirect to="/dashboard"/> 
             :  <Component {...rest} />
        )} />
    );
};

export default PublicRoute;