import React from 'react';
import './style.css';
import {Row, Col, Menu, Dropdown, Typography} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';


const Navbar = () => {
    const history = useHistory();
    const menu = (
        <Menu>

            <Menu.Item onClick={() => (sessionStorage.clear(), history.replace("/"))} className='dropdownItem'>
                <LogoutOutlined key={1} className='menuItem'/> Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <div  className="header">
            <Row>
                <Col span={3}>

                    <Typography style={{
                        "fontSize": "24px",
                        "display": "flex",
                        "fontWeight": "700",
                        "letterSpacing": ".3rem"
                    }}>
                        FLEETTrack
                    </Typography>
                </Col>
                <Col span={21} className="logged">
                    <Dropdown overlay={menu}>
                        <div className='loggedText'>
                            <span className="loggedText2">Hello</span>
                            <span
                                style={{"fontSize": "18px"}}>{sessionStorage.USERNAME ? sessionStorage.USERNAME : ""}  </span>
                        </div>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    );
}


export default Navbar;
