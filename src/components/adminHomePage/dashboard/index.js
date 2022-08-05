import React, {useEffect, useState} from 'react';
import "./style.css"
import ChatBot from "../../../Comp/chatBot";
import {Card, Row, Col} from 'antd';
import CustomCard from "../../../Comp/reUsable/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useHistory} from "react-router-dom";

const Dashboard = () => {

    const history = useHistory();

    return (
        <div>
            <div className="container">
                <div style={{
                    paddingTop:50
                }}>

                </div>
                <Row justify={{auto: true}}>
                    <Col offset={1} span={4}>
                        <CustomCard
                            btnname="Add new vehicle"
                            onClick={() => history.push('/add-Vehicle')}
                        />
                    </Col>
                    <Col  span={4}>
                        <CustomCard
                            btnname="Edit vehicle details"
                        />
                    </Col>
                    <Col  span={4}>
                        <CustomCard
                            btnname="View all vehicle details"
                            onClick={()=>history.push('/View-Vehicle-Details')}
                        />
                    </Col>
                    <Col  span={4}>
                        <CustomCard
                            btnname="Add drivers"
                            onClick={() => history.push('/add-Driver')}
                        />
                    </Col>
                    <Col  span={4}>
                        <CustomCard
                            btnname="Edit Driver details"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col offset={1} span={4}>
                        <CustomCard
                            btnname="View all driver details"
                        />
                    </Col>
                    <Col  span={4}>
                        <CustomCard
                            btnname="Assign Drivers to vehicles"
                        />
                    </Col>
                    <Col  span={4}>
                        <CustomCard
                            btnname="View assigned vehicles and drivers"
                        />
                    </Col>
                </Row>
                <ChatBot/>
            </div>
        </div>
    )
}

export default Dashboard;
