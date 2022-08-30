import React from 'react';
import "./style.css"
import {Button, Form, Input, InputNumber, Card, DatePicker} from 'antd';
import BreadCrumb from "../../../Comp/breadCrumb";
import {addNewDriverAction} from "../../../models/driverModel";
import {useDispatch} from "react-redux";

const layout = {
    labelCol: {span: 2},
    wrapperCol: {span: 16},
};

const AddNewDriver = () => {
    const dispatch = useDispatch();

    function onFinish(values) {

        values.assigned_vehicle = "unassigned";
        dispatch(addNewDriverAction(values));
    }

    return (
        <div>
            <BreadCrumb/>
            <Card>
                <Form {...layout} name="nest-messages" onFinish={onFinish}>
                    <Form.Item name={'name'} label="Name" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'email'} label="Email" rules={[{type: 'email', required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'age'} label="Age" rules={[{type: 'number', min: 0, max: 99, required: true}]}>
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item name={'nic'} label="NIC" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'address'} label="Address" rules={[{required: true}]}>
                        <Input.TextArea/>
                    </Form.Item>
                    <Form.Item name={'tpNo'} label="Phone Number" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'licenseNum'} label="Licence Number" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'bloodGroup'} label="Blood Group" rules={[{required: true}]}>
                        <Input/>
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

export default AddNewDriver;
