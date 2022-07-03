import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import Navbar from "../NavBar";
import Dashboard from "./dashboard";

const AdminHomePage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <BrowserRouter basename={"/adminHome"}>
                    <Switch>
                        <Route exact path={"/"}>
                            <Dashboard/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default AdminHomePage;
