import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Row, Upload} from "antd";
import './style.css'
import BreadCrumb from "../../../Comp/breadCrumb";
import {useDispatch} from "react-redux";
import {CloudUploadOutlined} from "@ant-design/icons";
import {enterServiceExpensesAction} from "../../../models/expenseModel";

const EnterServiceExpenses = () => {
    const dispatch = useDispatch();
    const [expenseForm] = Form.useForm();
    const [fileList, setFileList] = useState(null);

    function onFinish(values) {
        const nval= {...values, img:fileList}
        dispatch(enterServiceExpensesAction(nval));
        expenseForm.resetFields()
        setFileList(null)
        expenseForm.setFieldsValue({registration_number: ''});
        expenseForm.setFieldsValue({expense_type: 'service'});
        expenseForm.setFieldsValue({expense_date: ''});
        expenseForm.setFieldsValue({due_on: ''});
        expenseForm.setFieldsValue({done_on: ''});
        expenseForm.setFieldsValue({expense_cost: ''});
        expenseForm.setFieldsValue({image: ''});
    }

    function handleChange(e) {
        console.log(e.file)
        setFileList(e.file);
    };

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    }

    useEffect(() => {
        expenseForm.setFieldsValue({expense_type: 'service'});
    }, []);




    return (
        <div>
            <BreadCrumb/>
            <Card className={"card1"}>
                <Form layout={"vertical"} onFinish={onFinish}
                      form={expenseForm}
                >
                    <Row style={{width: '100%'}}>
                        <Col span={6}>
                            <Form.Item name={'registration_number'} label="Registration number" initialValue={""} rules={[{required: true}]} >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'expense_type'} label="Expense type" value initialValue={"maintenance"} rules={[{required: true}]}>
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'expense_date'} label="Expense date" initialValue={""} rules={[{required: true}]}>
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row style={{width: '100%'}}>
                        <Col span={6}>
                            <Form.Item name={'done_on'} label="Done on" initialValue={""} rules={[{required: true}]}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'due_on'} label="Due on" initialValue={""} rules={[{required: true}]}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'expense_cost'} label="Expense cost" initialValue={""} rules={[{required: true}]}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} >
                            <Form.Item name={"image"} label="Photo" rules={[{required: true}]} >
                                <Upload name="image"
                                        listType="text"
                                        defaultFileList={fileList}
                                        // type={"file"}
                                        onChange={(e) => handleChange(e)}
                                        multiple={false}
                                        customRequest={dummyRequest}
                                        allowClear

                                >
                                    <CloudUploadOutlined/> Upload

                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>


                    <Row style={{width: '100%'}}>
                        <Col offset={18}>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>

        </div>

    );
};

export default EnterServiceExpenses;
