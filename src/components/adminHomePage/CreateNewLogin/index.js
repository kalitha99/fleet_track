import React from 'react';
import "./style.css"
import {Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select} from "antd";
import {useDispatch} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";
import {signUpAction} from "../../../models/authModel";

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 16},
};

const CreateNewLogin = () => {
    const [signUp] = Form.useForm();
    const dispatch = useDispatch();

    function onFinish(values) {
        console.log(values)
        dispatch(signUpAction(values));
        signUp.setFieldsValue({name: ""});
        signUp.setFieldsValue({role: ""});
        signUp.setFieldsValue({email: ""});
        signUp.setFieldsValue({password: ""});
    }

    return (
        <div>
            <BreadCrumb/>
            <Card>
                <Form  {...layout} onFinish={onFinish} name="nest-messages" form={signUp}>
                    <Form.Item name={'role'} label="Role">
                        <Select
                            placeholder="Select a Role"
                            allowClear
                        >
                            <Select.Option value={""}/>
                            <Select.Option value={"admin"}>Admin</Select.Option>
                            <Select.Option value={"user"}>User</Select.Option>
                            <Select.Option value={"driver"}>Driver</Select.Option>

                        </Select>
                    </Form.Item>

                    <Form.Item name={'name'} label="Name (for drivers use driver name)" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name={'email'} label="Email" rules={[{
                        type: 'email',
                    },
                        {required: true}]
                    }>
                        <Input/>
                    </Form.Item>

                    <Form.Item name={'password'} label="password" rules={[{required: true}]}>
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default CreateNewLogin;
