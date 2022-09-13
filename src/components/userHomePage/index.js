import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter, Link} from "react-router-dom";
import Navbar from "../../Comp/NavBar";
import ViewAllVehicles from "../adminHomePage/viewAllVehicles";
import UpdateOdoMeter from "./UpdateOdoMeter";
import EnterRevenueLicenseDetails from "./enterRevenueLicenseDetails";
import EnterinsuranceDetails from "./EnterInsuranceDetails";
import EnterExpenses from "./enterExpenses";
import EnterFuelExpenses from "./enterFuelExpenses";
import EnterServiceExpenses from "./enterServiceExpenses";
import AssignDriversToVehicles from "./assignDriversToVehicles";
import ViewAssignedVehiclesAndDrivers from "./viewAssignedVehiclesAndDrivers";
import ViewAndAssignTrips from "./ViewAndAssignTrips";
import ViewTrips from "./viewAllTrips";
import UserDashboard from "./dashboard";
import {Breadcrumb} from "antd";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import ViewExpenses from "./getVehiclesWithExpenses";
import PredictCost from "./CostPredictor";

const UserHomePage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <HashRouter basename={"/userHome"}>
                    <Switch>

                        <Route  path={'/Predict-Cost'}>
                            <PredictCost/>
                        </Route>
                        <Route  path={'/View-Expenses'}>
                            <ViewExpenses/>
                        </Route>
                        <Route  path={'/View-Trips'}>
                            <ViewTrips/>
                        </Route>
                        <Route  path={'/Assign-Trips'}>
                            <ViewAndAssignTrips/>
                        </Route>
                        <Route  path={'/view-Assigned-Vehicles-And-Drivers'}>
                            <ViewAssignedVehiclesAndDrivers/>
                        </Route>
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
                        <Route  exact path={"/"}>
                            <UserDashboard/>
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        </div>
    );
};

export default UserHomePage;
