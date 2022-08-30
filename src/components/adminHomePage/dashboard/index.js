import React, {useEffect, useState} from 'react';
import "./style.css"
import ChatBot from "../../../Comp/chatBot";
import {Card, Row, Col} from 'antd';
import CustomCard from "../../../Comp/reUsable/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useHistory} from "react-router-dom";
import BreadCrumb from "../../../Comp/breadCrumb";

const Dashboard = () => {

    const history = useHistory();

    return (
        <div className="container">
            <BreadCrumb/>
            <div className="container">
                <div className="row hidden-md-up">

                    <CustomCard
                        btnname="Add new vehicle"
                        onClick={() => history.push('/add-Vehicle')}
                    />

                    <CustomCard
                        btnname="Edit vehicle details"
                    />

                    <CustomCard
                        btnname="View all vehicle details"
                        onClick={() => history.push('/View-Vehicle-Details')}
                    />

                    <CustomCard
                        btnname="Add drivers"
                        onClick={() => history.push('/add-Driver')}
                    />

                    <CustomCard
                        btnname="Edit Driver details"
                    />

                    <CustomCard
                        btnname="View all driver details"
                        onClick={() => history.push('/View-Driver-Details')}
                    />

                    <CustomCard
                        btnname="Assign Drivers to vehicles"
                    />

                    <CustomCard
                        btnname="View assigned vehicles and drivers"
                    />

                </div>
            </div>
            <ChatBot/>

        </div>
    )
}

export default Dashboard;
