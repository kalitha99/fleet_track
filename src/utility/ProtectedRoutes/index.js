import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

function ProtectedRoute({children, ...rest}) {
    const role = useSelector(store => store.auth.roleType);
    const {pathname} = rest.location;
    let canAccess = false;
    if (pathname.startsWith("/adminHome") && (role === "admin")) {
        canAccess = true;
    } else if (pathname.startsWith("/userHome") && role === "user") {
        canAccess = true;
    } else if (pathname.startsWith("/driverHome") && role === "driver") {
        canAccess = true;
    } else {
        canAccess = false;
    }
    return (

        <Route {...rest} render={() => {
            return canAccess ? children : <Redirect to='/login'/>
        }}/>
    );

}

export default ProtectedRoute;