import React, {useEffect} from 'react';
import "./style.css"
import {Button, Form, Input, InputNumber, Card, DatePicker} from 'antd';
import BreadCrumb from "../../../Comp/breadCrumb";
import {
    addNewDriverAction,
    getDriversByEmailAction,
    updateDriverAction,
    updateDriverPwAction
} from "../../../models/driverModel";
import {useDispatch, useSelector} from "react-redux";

const layout = {
    labelCol: {span: 2},
    wrapperCol: {span: 16},
};


const DriverProfile = () => {
    const [driver] = Form.useForm();
    const dispatch = useDispatch();
    const driverData = useSelector((state) => state.driverData.driverDetails);

    useEffect(() => {
        console.log(sessionStorage.getItem("EMAIL"))
        const values = {
            email: sessionStorage.getItem("EMAIL")
        }
        dispatch(getDriversByEmailAction(values));
    }, []);

    useEffect(() => {

        driver.setFieldsValue({name: driverData?.name});
        driver.setFieldsValue({email: driverData?.email});
        driver.setFieldsValue({age: driverData?.age});
        driver.setFieldsValue({nic: driverData?.nic});
        driver.setFieldsValue({address: driverData?.address});
        driver.setFieldsValue({tpNo: driverData?.tpNo});
        driver.setFieldsValue({licenseNum: driverData?.licenseNum});
        driver.setFieldsValue({bloodGroup: driverData?.bloodGroup});
    }, [driverData]);


    function onSubmit(values) {
        //console.log(values.password)
        dispatch(updateDriverPwAction(values));
    }

    return (
        <div>
            <BreadCrumb/>
            <Card>
                <Form {...layout} name="nest-messages" form={driver} onFinish={onSubmit}>
                    <Form.Item name={'name'} label="Name" rules={[{required: true}]}>
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item name={'email'} label="Email" style={{fontSize:"large"}} rules={[{type: 'email', required: true}]}>
                        <Input  disabled/>
                    </Form.Item>
                    <Form.Item name={'age'} label="Age" rules={[{type: 'number', min: 0, max: 99, required: true}]}>
                        <InputNumber disabled/>
                    </Form.Item>
                    <Form.Item name={'nic'} label="NIC" rules={[{required: true}]}>
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item name={'address'} label="Address" rules={[{required: true}]}>
                        <Input.TextArea disabled/>
                    </Form.Item>
                    <Form.Item name={'tpNo'} label="Phone Number" rules={[{required: true}]}>
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item name={'licenseNum'} label="Licence Number" rules={[{required: true}]}>
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item name={'bloodGroup'} label="Blood Group" rules={[{required: true}]}>
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item name={'password'} label="Password" rules={[{required: true}]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Update password
                        </Button>
                    </Form.Item>

                </Form>
            </Card>
        </div>
    );
};

export default DriverProfile;
