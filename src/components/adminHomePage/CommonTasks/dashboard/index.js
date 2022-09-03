import React from 'react';
import "./style.css"
import ChatBot from "../../../../Comp/chatBot";
import CustomCard from "../../../../Comp/reUsable/card";
import BreadCrumb from "../../../../Comp/breadCrumb";
import {useHistory} from "react-router-dom";

const CommonTaskDashboard = () => {
    const history = useHistory();

    return (
        <div className="container">
            <BreadCrumb/>
            <div className="container">
                <div className="row hidden-md-up">
                    <CustomCard
                        btnname="View all vehicle details"
                        onClick={() => history.push('/Common-tasks/View-Vehicle-Details')}
                    />

                    <CustomCard
                        btnname="Enter vehicle ODO reading"
                        onClick={() => history.push('/Common-tasks/Update-Latest-ODO')}
                    />

                    <CustomCard
                        btnname="Enter vehicle maintenance costs"
                        onClick={() => history.push('/Common-tasks/Enter-maintenance-costs')}
                    />

                    <CustomCard
                        btnname="Enter fuel expenses"
                        onClick={() => history.push('/Common-tasks/Enter-Fuel-costs')}
                    />

                    <CustomCard
                        btnname="Enter vehicles Service expenses "
                        onClick={() => history.push('/Common-tasks/Enter-Service-costs')}
                    />

                    <CustomCard
                        btnname="Enter vehicles revenue license details "
                        onClick={() => history.push('/Common-tasks/Update-revenue-license')}
                    />

                    <CustomCard
                        btnname="Enter vehicles Insurance details "
                        onClick={() => history.push('/Common-tasks/Update-insurance-details')}
                    />

                    <CustomCard
                        btnname="View assigned vehicles and drivers"
                        onClick={() => history.push('/Common-tasks/view-Assigned-Vehicles-And-Drivers')}
                    />
                    <CustomCard
                        btnname="Assign Drivers To Vehicles"
                        onClick={() => history.push('/Common-tasks/Assign-Drivers-To-Vehicles')}
                    />
                    <CustomCard
                        btnname="Assign Trips"
                        onClick={() => history.push('/Common-tasks/Assign-Trips')}
                    />
                    <CustomCard
                        btnname="View Trips"
                        onClick={() => history.push('/Common-tasks/View-Trips')}
                    />

                </div>
            </div>

            <ChatBot/>

        </div>
    )
}

export default CommonTaskDashboard;
