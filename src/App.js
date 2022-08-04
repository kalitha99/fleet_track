import './App.css';
import React from "react";
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import LandingPage from "./components/landingPage/index";
import Login from "./components/login";
import AdminHomePage from "./components/adminHomePage";
import UserHomePage from "./components/userHomePage";
library.add(
    faComments
)

function App() {
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path={"/"}>
                    <LandingPage/>
                </Route>
                <Route exact path={"/login"}>
                    <Login/>
                </Route>
                <Route exact path={"/adminHome"}>
                    <AdminHomePage/>
                </Route>
                <Route exact path={"/userHome"}>
                    <UserHomePage/>
                </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
