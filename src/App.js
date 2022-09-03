import './App.css';
import React, {useEffect} from "react";
import {faComments, faEdit} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core';
import LandingPage from "./components/landingPage/index";
import Login from "./components/login";
import AdminHomePage from "./components/adminHomePage";
import UserHomePage from "./components/userHomePage";
import {Provider} from 'react-redux';
import {store} from './store';
import ProtectedRoute from "./utility/ProtectedRoutes";
import BreadCrumb from "./Comp/breadCrumb";
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverHome from "./components/driverHomePage";


library.add(
    faComments,
    faEdit
)

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"}>
                            <LandingPage/>
                        </Route>
                        <Route exact path={"/login"}>
                            <Login/>
                        </Route>
                        <ProtectedRoute exact path={"/adminHome"}>
                            <AdminHomePage/>
                        </ProtectedRoute>
                        <ProtectedRoute exact path={"/userHome"}>
                            <UserHomePage/>
                        </ProtectedRoute>
                        <ProtectedRoute exact path={"/driverHome"}>
                            <DriverHome/>
                        </ProtectedRoute>
                    </Switch>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
