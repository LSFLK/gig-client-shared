import React from "react";
import {Navigate, useLocation} from 'react-router-dom';
import {userIsEditAuthorized} from "./Authentication";

export function ProtectedRoute(props, {children}) {
    let location = useLocation();
    const {loginRoute}=props;

    if (!userIsEditAuthorized()) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={loginRoute} state={{from: location}} replace/>;
    }

    return children;
}
