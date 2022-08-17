import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Row, Upload} from "antd";
import './style.css'
import BreadCrumb from "../../../Comp/breadCrumb";
import {useDispatch, useSelector} from "react-redux";
import {PlusOutlined} from "@ant-design/icons";
import {enterExpensesAction} from "../../../models/expenseModel";

const EnterExpenses = () => {
    const dispatch = useDispatch();
    const [expenseForm] = Form.useForm();
    const [fileList, setFileList] = useState(null);

    function onFinish(values) {
        const nval= {...values, img:fileList}
        dispatch(enterExpensesAction(nval));
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



    return (
        <div>
            <BreadCrumb/>
            <Card className={"card1"}>
                <Form layout={"vertical"} onFinish={onFinish}
                      form={expenseForm}
                >
                    <Row style={{width: '100%'}}>
                        <Col span={6}>
                            <Form.Item name={'registration_number'} label="Registration number" initialValue={""}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'expense_type'} label="Expense type" initialValue={""}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'expense_date'} label="Expense date" initialValue={""}>
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row style={{width: '100%'}}>
                        <Col span={6}>
                            <Form.Item name={'expense_name'} label="Expense name" initialValue={""}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'expense_cost'} label="Expense cost" initialValue={""}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={"image"} label="Photo" rules={[{required: true}]}>
                                <Upload name="image"
                                        listType="picture-card"
                                        //defaultFileList={fileList}
                                        // type={"file"}
                                        onChange={(e) => handleChange(e)}
                                        multiple={false}
                                        customRequest={dummyRequest}
                                        allowClear

                                >
                                    <PlusOutlined/>

                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>


                    <Row style={{width: '100%'}}>
                        <Col offset={18}>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">
                                    Search
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>

        </div>

    );
};

export default EnterExpenses;
