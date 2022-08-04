import React from 'react';
import "./style.css"
import {Button, Form, Input, InputNumber, Card, DatePicker} from 'antd';

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
};

const AddNewDriver = () => {

    return (
        <div>
            <Card>
                <Form {...layout} name="nest-messages">
                    <Form.Item name={'name'} label="Name" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'email'} label="Email" rules={[{type: 'email',required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'age'} label="Age" rules={[{type: 'number', min: 0, max: 99,required: true}]}>
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item name={ 'website'} label="NIC" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'address'} label="Address" rules={[{required: true}]}>
                        <Input.TextArea/>
                    </Form.Item>
                    <Form.Item name={'phoneNo'} label="Phone Number" rules={[{required: true}]}>
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

export default AddNewDriver;
