import React from 'react';
import "./style.css"
import {Button, Card, DatePicker, Form, Input, InputNumber} from "antd";
import {addNewVehicleAction} from "../../../models/vehicleModel";
import {useDispatch} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const AddNewVehicle = () => {
    const dispatch = useDispatch();

    function onFinish(values) {
        console.log(values)
        dispatch(addNewVehicleAction(values));
    }

    return (
        <div>
            <BreadCrumb />
            <Card>
                <Form {...layout} onFinish={onFinish} name="nest-messages">
                    <Form.Item name={'make'} label="Make" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'model'} label="Model" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'year'} label="Year" rules={[{type: 'number', min: 1950, max: 2024,required: true}]}>
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item name={ 'initial_odo_reading'} label="Initial ODO meter reading" rules={[{required: true}]}>
                        <Input type="number"/>
                    </Form.Item>
                    <Form.Item name={'registration_number'} label="Registration Number" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'revenue_license_num'} label="Revenue Licence Number" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'revenue_license_issue_date'} label="Revenue Licence Issued Date" rules={[{required: true}]}>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item name={'revenue_license_expire_date'} label="Revenue Licence Expire Date" rules={[{required: true}]}>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item name={'fuel_type'} label="Fuel Type" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'vehicle_type'} label="Vehicle type" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default AddNewVehicle;
