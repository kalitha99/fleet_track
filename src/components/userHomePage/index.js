import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import Navbar from "../../Comp/NavBar";
import Userdashboard from "./dashboard";
import ViewAllVehicles from "../adminHomePage/viewAllVehicles";
import UpdateOdoMeter from "./UpdateOdoMeter";
import EnterRevenueLicenseDetails from "./enterRevenueLicenseDetails";
import EnterinsuranceDetails from "./EnterInsuranceDetails";
import EnterExpenses from "./enterExpenses";
import EnterFuelExpenses from "./enterFuelExpenses";
import EnterServiceExpenses from "./enterServiceExpenses";
import AssignDriversToVehicles from "./assignDriversToVehicles";

const UserHomePage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <HashRouter basename={"/userHome"}>
                    <Switch>
                        <Route  path={'/Assign-Drivers-To-Vehicles'}>
                            <AssignDriversToVehicles/>
                        </Route>
                        <Route  path={'/Enter-Fuel-costs'}>
                            <EnterFuelExpenses/>
                        </Route>
                        <Route  path={'/Enter-Service-costs'}>
                            <EnterServiceExpenses/>
                        </Route>
                        <Route  path={'/Enter-maintenance-costs'}>
                            <EnterExpenses/>
                        </Route>
                        <Route  path={'/Update-insurance-details'}>
                            <EnterinsuranceDetails/>
                        </Route>
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
