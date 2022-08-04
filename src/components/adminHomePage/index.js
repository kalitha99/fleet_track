import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import Navbar from "../../Comp/NavBar";
import Dashboard from "./dashboard";
import AddNewDriver from "./AddNewDriver";
import AddNewVehicle from "./AddNewVehicle";

const AdminHomePage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <HashRouter basename={'/adminHome'}>
                    <Switch>
                        <Route  path={'/add-Vehicle'}>
                            <AddNewVehicle/>
                        </Route>
                        <Route  path={'/add-Driver'}>
                            <AddNewDriver/>
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

export default AdminHomePage;
