import React from 'react';
import './style.css';
import {Row, Col, Menu, Dropdown, Typography} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import {auth} from "../../fireBase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useHistory} from 'react-router-dom';


const Navbar = () => {
    const history = useHistory();
    const [user, loading, error] = useAuthState(auth);
    const menu = (
        <Menu>

            <Menu.Item onClick={()=>(auth.signOut(), history.push("/"))} className='dropdownItem'>
                <LogoutOutlined  className='menuItem'/> Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="header">
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
                        <div>
                            <div className="user">
                                <span> user </span>
                            </div>
                        </div>
                    </Dropdown>
                    <div className='loggedText'>
                        <span className="loggedText2">Hello</span>
                        <span style={{"fontSize": "18px"}}>{user?  user.email : ""  }  </span>
                    </div>
                </Col>
            </Row>
        </div>
    );
}


export default Navbar;
