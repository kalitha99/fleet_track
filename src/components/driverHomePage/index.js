import React from 'react';
import Navbar from "../../Comp/NavBar";
import {HashRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard";
import ViewTrips from "./viewTripDetails";
import DriverProfile from "./yourProfile";


const DriverHome = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <HashRouter basename={'/driverHome'}>
                    <Switch>

                        <Route  path={'/Driver-Profile'}>
                            <DriverProfile/>
                        </Route>
                        <Route  path={'/View-Trips'}>
                            <ViewTrips/>
                        </Route>
                        <Route exact path={'/'}>
                            <Dashboard/>
                        </Route>

                    </Switch>
                </HashRouter>
            </div>
        </div>
    );
};

export default DriverHome;
