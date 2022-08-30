import React, {useEffect, useState} from 'react';
import "./style.css"
import axios from "axios";
import ChatBot from "../../../Comp/chatBot";
import {Col, Row} from "antd";
import CustomCard from "../../../Comp/reUsable/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BreadCrumb from "../../../Comp/breadCrumb";
import {useHistory} from "react-router-dom";

const Userdashboard = () => {
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
                    />
                    <CustomCard
                        btnname="Assign Drivers To Vehicles"
                        onClick={() => history.push('/Assign-Drivers-To-Vehicles')}
                    />

                </div>
            </div>

            <ChatBot/>

        </div>
    )
}

export default Userdashboard;
