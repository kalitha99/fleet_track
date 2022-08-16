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
                <BreadCrumb />
                    <Row justify={{auto: true}}>
                        <Col offset={1} span={4}>
                            <CustomCard
                                btnname="View all vehicle details"
                                onClick={()=>history.push('/View-Vehicle-Details')}
                            />
                        </Col>
                        <Col  span={4}>
                            <CustomCard
                                btnname="Enter vehicle ODO reading"
                                onClick={()=>history.push('/Update-Latest-ODO')}
                            />
                        </Col>
                        <Col  span={4}>
                            <CustomCard
                                btnname="Enter vehicle maintenance costs"
                            />
                        </Col>
                        <Col  span={4}>
                            <CustomCard
                                btnname="Enter fuel expenses"
                            />
                        </Col>
                        <Col  span={4}>
                            <CustomCard
                                btnname="Enter vehicles Service expenses and next service details"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={1} span={4}>
                            <CustomCard
                                btnname="Enter vehicles revenue license details "
                                onClick={()=>history.push('/Update-revenue-license')}
                            />
                        </Col>
                        <Col  span={4}>
                            <CustomCard
                                btnname="Enter vehicles Insurance details "

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
    )
}

export default Userdashboard;
