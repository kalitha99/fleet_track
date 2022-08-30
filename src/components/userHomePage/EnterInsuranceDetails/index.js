import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Modal, Row, Table} from "antd";
import './style.css'
import BreadCrumb from "../../../Comp/breadCrumb";
import {
    searchVehicleDataAction,
    setEditModalContentAction,
    updateInsuranceDetailsAction,
} from "../../../models/vehicleModel";
import {useDispatch, useSelector} from "react-redux";
import {viewAllVehicleColumns} from "./tableProperties";

const EnterinsuranceDetails = () => {
    const [editinsuranceDetailsForm] = Form.useForm();
    const [searchForm] = Form.useForm();
    const dispatch = useDispatch();
    const [shoWEditModel, setShoWEditModel] = useState(false);

    const vehicleData = useSelector((state) => state.vehicleData.vehicleDetails);
    let editRevenueLicense = useSelector((state) => state.vehicleData.editModalContent);
    //To add key for table rows
    const vehicleDataUpdated = vehicleData?.map((item) => ({key: item.registration_number, ...item}));

    function onFinish(values) {
        dispatch(searchVehicleDataAction(values));
    }

    useEffect(() => {
        editinsuranceDetailsForm.setFieldsValue({registration_number: editRevenueLicense?.registration_number});
    }, [editRevenueLicense]);

    useEffect(() => {
        const data = {
            registration_number: "",
            make: "",
            model: ""
        }
        dispatch(searchVehicleDataAction(data));
    }, []);

    const handleEditinsuranceDetailsModalShow = (data) => {
        setShoWEditModel(true)
        dispatch(setEditModalContentAction(data));
    };

    const handleOk = () => {
        setShoWEditModel(false);


    };

    const handleCancel = () => {
        setShoWEditModel(false);
    };

    function insuranceDetailsUpdate(values) {
        const data = {
            registration_number: searchForm.getFieldValue('registration_number'),
            make: searchForm.getFieldValue('make'),
            model: searchForm.getFieldValue('model')
        }
        dispatch(updateInsuranceDetailsAction(values));
        dispatch(searchVehicleDataAction(data));
    }

    console.log(editRevenueLicense)
    return (
        <div>
            <BreadCrumb/>
            <Card className={"card1"}>
                <Form layout={"vertical"} onFinish={onFinish}
                      form={searchForm}
                >
                    <Row style={{width: '100%'}}>
                        <Col span={6}>
                            <Form.Item name={'registration_number'} label="Registration number" initialValue={""}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'make'} label="Make" initialValue={""}>
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item name={'model'} label="Model" initialValue={""}>
                                <Input/>
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
            <Card style={{overflowX: "auto"}}>
                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllVehicleColumns(
                        handleEditinsuranceDetailsModalShow,
                        editinsuranceDetailsForm
                    )}
                    dataSource={vehicleDataUpdated}
                />
            </Card>

            <>
                <Modal title="Enter Revenue License Reading" visible={shoWEditModel} onOk={handleOk}
                       onCancel={handleCancel}>

                    <Form layout={"vertical"} onFinish={insuranceDetailsUpdate}
                          form={editinsuranceDetailsForm}
                          preserve={false}
                    >

                        <Form.Item name={'registration_number'} label="Registration number"
                                   initialValue={editRevenueLicense?.registration_number}>
                            <Input disabled/>
                        </Form.Item>


                        <Form.Item name={'insurance_num'} label="insurance num">
                            <Input/>
                        </Form.Item>


                        <Form.Item name={'insurance_issue_date'} label="insurance issue date">
                            <DatePicker/>
                        </Form.Item>


                        <Form.Item name={'insurance_expire_date'} label="insurance expire date">
                            <DatePicker/>
                        </Form.Item>


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
                </Modal>
            </>

        </div>

    );
};

export default EnterinsuranceDetails;
