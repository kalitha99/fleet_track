import React, {useState} from 'react';
import {Button, Card, Col, Form, Input, Row} from "antd";
import './style.css'
import BreadCrumb from "../../../Comp/breadCrumb";
import axios, {Axios} from "axios";


const PredictCost = () => {

    const [searchForm] = Form.useForm();
    const [predValue, setPredValue] = useState(null);

    const onFinish = async (values) => {
        console.log("value", values);
        try {
            const result = await axios.post("http://127.0.0.1:50505/predictCost", values);
            let val=result.data.prediction
            setPredValue(val)
            console.log (result)
        } catch (e) {
            console.log("post create customer error ", e);
        }
    };

    return (
        <div>
            <BreadCrumb/>
            <Card className={"card1"}>
                <Form layout={"vertical"} onFinish={onFinish}
                      form={searchForm}
                >
                    <Row style={{width: '100%'}}>
                        <Col span={6} >
                            <Form.Item name={'service'} label="Number of vehicles to be serviced" initialValue={""} rrules={[
                                {
                                    required: true,
                                    message: 'Please enter a value!',
                                },
                            ]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'insurance'} label="Number of vehicles to be insured " initialValue={""} rrules={[
                                {
                                    required: true,
                                    message: 'Please enter a value!',
                                },
                            ]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8} offset={1}>
                            <Form.Item name={'revenue'} label="Number of vehicles need revenue license " initialValue={""} rules={[
                                {
                                    required: true,
                                    message: 'Please enter a value!',
                                },
                            ]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row style={{width: '100%'}}>
                        <Col offset={18}>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">
                                    Predict Cost
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Card className={"card1"}>
                {predValue?
                    <h3>Predicted value for next month : Rs. {predValue? predValue+".00" : ""}</h3>
                    : ""
                }

            </Card>

        </div>

    );
};

export default PredictCost;
