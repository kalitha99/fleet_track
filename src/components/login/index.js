import React from 'react';
import "./style.css"
import {Row, Col, Card, Form, Input, Button} from "antd";
import {useHistory} from 'react-router-dom';
import axios from "axios";


const Login = () => {
    const ACCESS_TOKEN = 'ACCESS_TOKEN';
    const USERNAME = 'USERNAME';

    const history = useHistory();

    function onFinish(values) {
        axios.post('http://localhost:3500/api/login', {
                name: values.username,
                password: values.password
            }
        ).then(r => {
            console.log(r)
            if (r.data.status === 'ok') {
                    sessionStorage.setItem(ACCESS_TOKEN, r.data.accessToken);
                    sessionStorage.setItem(USERNAME, r.data.name);
                    if (r.data.roles === 'admin'){
                        history.push("/adminHome")
                    }else if (r.data.roles === 'user'){
                        history.push("/userHome")
                    }
            }else {
                console.log('wrong user name or password')
            }

        }
        /*,history.push("/adminHome/")*/)
        //
        //     signInWithEmailAndPassword(auth,values.username,values.password)
        //         .then(auth=>console.log(auth),history.push("/adminHome/"))
        //         .catch(error=>console.log(error))
        // }

        //     createUserWithEmailAndPassword(auth,values.username,values.password)
        //         .then(async (userCredential) => {
        //             const user = userCredential.user;
        //             await updateProfile(user, {
        //                 displayName: 'Admin',
        //             })
        //             alert("Welcome " + user.displayName);
        //         })
        //         .catch(error=>console.log(error))
    }

    return (
        <div className="loginPage">
            <div className="site-card-wrapper">
                <Row className="login" justify="center" align="bottom">
                    <Col offset={12} span={12}>
                        <Card hoverable={true} className="site-card" title="LOGIN" bordered={false}>
                            <Form
                                name="basic"
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
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Login;
