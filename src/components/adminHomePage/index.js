import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import Navbar from "../../Comp/NavBar";
import Dashboard from "./dashboard";
import AddNewDriver from "./AddNewDriver";
import AddNewVehicle from "./AddNewVehicle";
import ViewAllVehicles from "./viewAllVehicles";
import ViewAllDrivers from "./viewAllDrivers";
import CreateNewLogin from "./CreateNewLogin";
import ViewTrips from "../userHomePage/viewAllTrips";
import ViewAndAssignTrips from "../userHomePage/ViewAndAssignTrips";
import ViewAssignedVehiclesAndDrivers from "../userHomePage/viewAssignedVehiclesAndDrivers";
import AssignDriversToVehicles from "../userHomePage/assignDriversToVehicles";
import EnterFuelExpenses from "../userHomePage/enterFuelExpenses";
import EnterServiceExpenses from "../userHomePage/enterServiceExpenses";
import EnterExpenses from "../userHomePage/enterExpenses";
import EnterinsuranceDetails from "../userHomePage/EnterInsuranceDetails";
import EnterRevenueLicenseDetails from "../userHomePage/enterRevenueLicenseDetails";
import UpdateOdoMeter from "../userHomePage/UpdateOdoMeter";
import CommonTaskDashboard from "./CommonTasks/dashboard";

const AdminHomePage = () => {
    return (
        <div>
            <Navbar/>
            <div>

                <HashRouter basename={'/adminHome'}>
                    <Switch>
                        <Route exact path={'/Common-tasks/View-Trips'}>
                            <ViewTrips/>
                        </Route>
                        <Route exact path={'/Common-tasks/Assign-Trips'}>
                            <ViewAndAssignTrips/>
                        </Route>
                        <Route exact path={'/Common-tasks/view-Assigned-Vehicles-And-Drivers'}>
                            <ViewAssignedVehiclesAndDrivers/>
                        </Route>
                        <Route exact path={'/Common-tasks/Assign-Drivers-To-Vehicles'}>
                            <AssignDriversToVehicles/>
                        </Route>
                        <Route exact path={'/Common-tasks/Enter-Fuel-costs'}>
                            <EnterFuelExpenses/>
                        </Route>
                        <Route exact path={'/Common-tasks/Enter-Service-costs'}>
                            <EnterServiceExpenses/>
                        </Route>
                        <Route exact path={'/Common-tasks/Enter-maintenance-costs'}>
                            <EnterExpenses/>
                        </Route>
                        <Route exact path={'/Common-tasks/Update-insurance-details'}>
                            <EnterinsuranceDetails/>
                        </Route>
                        <Route exact path={'/Common-tasks/Update-revenue-license'}>
                            <EnterRevenueLicenseDetails/>
                        </Route>
                        <Route exact path={'/Common-tasks/Update-Latest-ODO'}>
                            <UpdateOdoMeter/>
                        </Route>
                        <Route exact path={'/Common-tasks/View-Vehicle-Details'}>
                            <ViewAllVehicles/>
                        </Route>
                        <Route exact path={"/Common-tasks"}>
                            <CommonTaskDashboard/>
                        </Route>
                        <Route path={'/Create-New-Login'}>
                            <CreateNewLogin/>
                        </Route>
                        <Route path={'/View-All-Drivers'}>
                            <ViewAllDrivers/>
                        </Route>
                        <Route path={'/View-Vehicle-Details'}>
                            <ViewAllVehicles/>
                        </Route>
                        <Route path={'/add-Vehicle'}>
                            <AddNewVehicle/>
                        </Route>
                        <Route path={'/add-Driver'}>
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
