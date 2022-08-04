import React from 'react';
import "./style.css"
import {Button, Card, DatePicker, Form, Input, InputNumber} from "antd";

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 },
};

const AddNewVehicle = () => {
    return (
        <div>
            <Card>
                <Form {...layout} name="nest-messages">
                    <Form.Item name={'make'} label="Make" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'model'} label="Model" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'year'} label="Year" rules={[{type: 'number', min: 1950, max: 2024,required: true}]}>
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item name={ 'initialODOmeterreading'} label="Initial ODO meter reading" rules={[{required: true}]}>
                        <Input type="number"/>
                    </Form.Item>
                    <Form.Item name={'regno'} label="Registration Number" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'licenceNo'} label="Licence Number" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'issuedate'} label="Issued Date" rules={[{required: true}]}>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item name={'expiredate'} label="Expire Date" rules={[{required: true}]}>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item name={'bloodgroup'} label="Blood Group" rules={[{required: true}]}>
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
