import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Form, Input, Modal, Row, Table} from "antd";
import './style.css'
import BreadCrumb from "../../../Comp/breadCrumb";
import {searchVehicleDataAction, setEditModalContentAction, updateODOAction} from "../../../models/vehicleModel";
import {useDispatch, useSelector} from "react-redux";
import {viewAllVehicleColumns} from "./tableProperties";

const UpdateOdoMeter = () => {
    const [editOdoForm] = Form.useForm();
    const [searchForm] = Form.useForm();
    const dispatch = useDispatch();
    const [shoWEditModel, setShoWEditModel] = useState(false);
    const [editOdoModelData, seteditOdoModelData] = useState(null);

    const vehicleData = useSelector((state) => state.vehicleData.vehicleDetails);
    let editODO = useSelector((state) => state.vehicleData.editModalContent);
    //To add key for table rows
    let vehicleDataUpdate = vehicleData?.map((item) => ({key: item.registration_number, ...item}));


    function onFinish(values) {
        values.assigned_driver=""
        dispatch(searchVehicleDataAction(values));
    }


    useEffect(() => {
        editOdoForm.setFieldsValue({registration_number: editODO?.registration_number});
        editOdoForm.setFieldsValue({latest_odo_reading: editODO?.latest_odo_reading});
    }, [editODO]);

    useEffect(() => {
        const data = {
            registration_number: "",
            make: "",
            model: "",
            assigned_driver:""
        }
        dispatch(searchVehicleDataAction(data));
    }, []);

    const handleAddOdoModalShow = (data) => {
        setShoWEditModel(true)
        dispatch(setEditModalContentAction(data));
    };

    const handleOk = () => {
        setShoWEditModel(false);


    };

    const handleCancel = () => {
        setShoWEditModel(false);
    };

    function OdoUpdate(values) {
        const data = {
            registration_number: searchForm.getFieldValue('registration_number'),
            make: searchForm.getFieldValue('make'),
            model: searchForm.getFieldValue('model'),
            assigned_driver:""
        }
        dispatch(updateODOAction(values));
        dispatch(searchVehicleDataAction(data));
        editOdoForm.setFieldsValue({new_odo: ""});
        handleOk()
    }

    console.log(editODO)
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
                        <Col span={5} offset={1}>
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
            <Card>
                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllVehicleColumns(
                        handleAddOdoModalShow,
                        editOdoForm
                    )}
                    dataSource={vehicleDataUpdate}
                />
            </Card>

            <>
                <Modal title="Enter ODO meter Reading" visible={shoWEditModel} onOk={handleOk} onCancel={handleCancel}>

                    <Form layout={"vertical"} onFinish={OdoUpdate}
                          form={editOdoForm}
                          preserve={false}
                    >

                        <Form.Item name={'registration_number'} label="Registration number"
                                   initialValue={editODO?.registration_number}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'latest_odo_reading'} label="ODO Reading"
                                   initialValue={editODO?.latest_odo_reading}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'new_odo'} label="New ODO Reading" initialValue={""}>
                            <Input/>
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

export default UpdateOdoMeter;
