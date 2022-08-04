import React from 'react';
import './style.css';
import {Button, Row, Col, } from "antd";
import {Typography} from "antd";
import {useHistory} from 'react-router-dom';
import { LoginOutlined} from "@ant-design/icons";

const LandingPage = () => {

    const history = useHistory();

    return (

        <div className="landingPage">


            <Row >
                <Col offset={2} span={3}>
                    <Typography style={{
                        "fontSize": "48px",
                        "display": "flex",
                        "fontWeight": "700",
                        "letterSpacing": ".35rem",
                        "paddingTop": "40px"
                    }}>
                        FLEETTrack
                    </Typography>

                </Col>
            </Row>

            <Row >
                <Col offset={2} span={10}>
                    <Typography style={{
                        "fontSize": "22px",
                        "display": "flex",
                        "fontWeight": "700",
                        "letterSpacing": ".25rem",
                        "paddingTop": "40px"
                    }}>
                        Your one stop solution for managing vehicle fleet...

                    </Typography>
                </Col>

            </Row>

            <Row >
                <Col offset={2} span={3} style={{"paddingTop": "30px"}}>
                    <Button style={{"fontWeight": "700",}} type="primary" shape="round" icon={<LoginOutlined/>} size={"large"} onClick={() => history.push("/login")}>
                        Login
                    </Button>
                </Col>
            </Row>




        </div>
    );
};

export default LandingPage;
