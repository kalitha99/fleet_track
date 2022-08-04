import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import Navbar from "../../Comp/NavBar";
import Userdashboard from "./dashboard";

const UserHomePage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <BrowserRouter basename={"/userHome"}>
                    <Switch>
                        <Route exact path={"/"}>
                            <Userdashboard/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default UserHomePage;
