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
                        btnname="Create New Login"
                        onClick={() => history.push('/Create-New-Login')}
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
                        btnname="View all driver details"
                        onClick={() => history.push('/View-All-Drivers')}
                    />

                    <CustomCard
                        btnname="Common tasks"
                        onClick={() => history.push('/Common-tasks')}
                    />


                </div>
            </div>
            <ChatBot/>

        </div>
    )
}

export default Dashboard;
