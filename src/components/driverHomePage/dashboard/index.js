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
                        btnname="View Trips"
                        onClick={() => history.push('/View-Trips')}
                    />
                    <CustomCard
                        btnname="Driver Profile"
                        onClick={() => history.push('/Driver-Profile')}
                    />


                </div>
            </div>
            <ChatBot/>

        </div>
    )
}

export default Dashboard;
