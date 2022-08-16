import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import Navbar from "../../Comp/NavBar";
import Userdashboard from "./dashboard";
import ViewAllVehicles from "../adminHomePage/viewAllVehicles";
import UpdateOdoMeter from "./UpdateOdoMeter";
import EnterRevenueLicenseDetails from "./enterRevenueLicenseDetails";

const UserHomePage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <HashRouter basename={"/userHome"}>
                    <Switch>
                        <Route  path={'/Update-revenue-license'}>
                            <EnterRevenueLicenseDetails/>
                        </Route>
                        <Route  path={'/Update-Latest-ODO'}>
                            <UpdateOdoMeter/>
                        </Route>
                        <Route  path={'/View-Vehicle-Details'}>
                            <ViewAllVehicles/>
                        </Route>
                        <Route exact path={"/"}>
                            <Userdashboard/>
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        </div>
    );
};

export default UserHomePage;
