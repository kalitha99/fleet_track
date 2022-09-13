import React from 'react';
import "./style.css"
import ChatBot from "../../../Comp/chatBot";
import CustomCard from "../../../Comp/reUsable/card";
import BreadCrumb from "../../../Comp/breadCrumb";
import {useHistory} from "react-router-dom";

const UserDashboard = () => {
    const history = useHistory();

    return (
        <div className="container">
            <BreadCrumb/>
            <div className="container">
                <div className="row hidden-md-up">
                    <CustomCard
                        btnname="View all vehicle details"
                        onClick={() => history.push('/View-Vehicle-Details')}
                    />

                    <CustomCard
                        btnname="Enter vehicle ODO reading"
                        onClick={() => history.push('/Update-Latest-ODO')}
                    />

                    <CustomCard
                        btnname="Enter vehicle maintenance costs"
                        onClick={() => history.push('/Enter-maintenance-costs')}
                    />

                    <CustomCard
                        btnname="Enter fuel expenses"
                        onClick={() => history.push('/Enter-Fuel-costs')}
                    />

                    <CustomCard
                        btnname="Enter vehicles Service expenses "
                        onClick={() => history.push('/Enter-Service-costs')}
                    />

                    <CustomCard
                        btnname="Enter vehicles revenue license details "
                        onClick={() => history.push('/Update-revenue-license')}
                    />

                    <CustomCard
                        btnname="Enter vehicles Insurance details "
                        onClick={() => history.push('/Update-insurance-details')}
                    />

                    <CustomCard
                        btnname="View assigned vehicles and drivers"
                        onClick={() => history.push('/view-Assigned-Vehicles-And-Drivers')}
                    />
                    <CustomCard
                        btnname="Assign Drivers To Vehicles"
                        onClick={() => history.push('/Assign-Drivers-To-Vehicles')}
                    />
                    <CustomCard
                        btnname="Assign Trips"
                        onClick={() => history.push('/Assign-Trips')}
                    />
                    <CustomCard
                        btnname="View Trips"
                        onClick={() => history.push('/View-Trips')}
                    />
                    <CustomCard
                        btnname="View Expenses"
                        onClick={() => history.push('/View-Expenses')}
                    />
                    <CustomCard
                        btnname="Predict Cost"
                        onClick={() => history.push('/Predict-Cost')}
                    />

                </div>
            </div>

            <ChatBot/>

        </div>
    )
}

export default UserDashboard;
