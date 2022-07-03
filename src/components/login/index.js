import React from 'react';
import "./style.css"
import {Row, Col, Card, Form, Input, Button} from "antd";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../fireBase";
import {useHistory} from 'react-router-dom';



const Login = () => {
    const history = useHistory();
    function onFinish(values) {

        signInWithEmailAndPassword(auth,values.username,values.password)
            .then(auth=>console.log(auth),history.push("/adminHome/"))
            .catch(error=>console.log(error))
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
                                    <Input />
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
