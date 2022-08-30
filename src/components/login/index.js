import React, {useEffect} from 'react';
import "./style.css"
import {Row, Col, Card, Form, Input, Button} from "antd";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loginUserAction} from "../../models/authModel";


const Login = () => {


    const dispatch = useDispatch();
    const history = useHistory();

    function onFinish(values) {
        const val = {
            name: values.username,
            password: values.password,
            history
        }
        dispatch(loginUserAction(val));
    }


    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src="../../pics/Untitled.jpg" alt="Login"/>
                </div>
                <Form
                    name="login-form"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}

                    autoComplete="off"

                    onFinish={onFinish}
                >
                    <p className="form-title">Welcome back</p>
                    <p>Login to the Dashboard</p>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;

