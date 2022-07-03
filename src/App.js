import './App.css';
import React from "react";
import Navbar from "./components/NavBar/index";
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import LandingPage from "./components/landingPage/index";
import Login from "./components/login";
import AdminHomePage from "./components/adminHomePage";

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
            </Switch>
        </BrowserRouter>

    );
}

export default App;
