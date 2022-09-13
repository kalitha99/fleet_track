import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Modal, Row, Table} from "antd";
import {viewAllDriverColumns} from "./tableProperties";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";
import {getDriversAction, updateDriverAction} from "../../../models/driverModel";
import {setEditModalContentAction} from "../../../models/vehicleModel";

const ViewAllDrivers = () => {
    const dispatch = useDispatch();
    const [editDriverDetailsForm] = Form.useForm();
    const [shoWEditModel, setShoWEditModel] = useState(false);
    const driverData = useSelector((state) => state.driverData.driverDetails);
    const driverModelData = useSelector((state) => state.vehicleData.editModalContent);
    //To add key for table rows
    const driverDataUpdated = driverData?.map((item,index) => ({key: index, ...item}));

    useEffect(()=>{
        dispatch(getDriversAction());
    },[])

    useEffect(() => {
        editDriverDetailsForm.setFieldsValue({id: driverModelData?.id});
        editDriverDetailsForm.setFieldsValue({name: driverModelData?.name});
        editDriverDetailsForm.setFieldsValue({email: driverModelData?.email});
        editDriverDetailsForm.setFieldsValue({age: driverModelData?.age});
        editDriverDetailsForm.setFieldsValue({nic: driverModelData?.nic});
        editDriverDetailsForm.setFieldsValue({address: driverModelData?.address});
        editDriverDetailsForm.setFieldsValue({tpNo: driverModelData?.tpNo});
        editDriverDetailsForm.setFieldsValue({licenseNum: driverModelData?.licenseNum});
        editDriverDetailsForm.setFieldsValue({bloodGroup: driverModelData?.bloodGroup});
        editDriverDetailsForm.setFieldsValue({assigned_vehicle: driverModelData?.assigned_vehicle});
    }, [driverModelData]);

    const handleOk = () => {
        setShoWEditModel(false);
    };

    const handleCancel = () => {
        setShoWEditModel(false);
    };

    function onEdit(values) {
        console.log(values)
        dispatch(updateDriverAction(values));
        dispatch(getDriversAction());
        handleOk()
    }

    const handleEditDriverDetailsModalShow = (data) => {
        setShoWEditModel(true)
        dispatch(setEditModalContentAction(data));
    };

    return (
        <div>
            <BreadCrumb />
            <Card>
                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllDriverColumns(
                        handleEditDriverDetailsModalShow
                    )}
                    dataSource={driverDataUpdated}
                />
            </Card>
            <>
                <Modal title="View/Edit Driver Details" visible={shoWEditModel} onOk={handleOk} onCancel={handleCancel}>

                    <Form layout={"vertical"} onFinish={onEdit}
                          form={editDriverDetailsForm}
                          preserve={false}
                    >

                        <Form.Item name={'id'} label="id"
                                   initialValue={driverModelData?.id} hidden>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'name'} label="Name"
                                   initialValue={driverModelData?.name}>
                            <Input />
                        </Form.Item>


                        <Form.Item name={'email'} label="Email"
                                   initialValue={driverModelData?.email}>
                            <Input/>
                        </Form.Item>


                        <Form.Item name={'age'} label="Age"
                                   initialValue={driverModelData?.age}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'nic'} label="nic"
                                   initialValue={driverModelData?.nic}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'address'} label="address"
                                   initialValue={driverModelData?.address}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'tpNo'} label="Pohone no"
                                   initialValue={driverModelData?.tpNo}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'licenseNum'} label="license Num"
                                   initialValue={driverModelData?.licenseNum}>
                            <Input/>
                        </Form.Item>


                        <Form.Item name={'bloodGroup'} label="BloodGroup"
                                   initialValue={driverModelData?.bloodGroup}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'assigned_vehicle'} label="Assigned vehicle"
                                   initialValue={driverModelData?.assigned_vehicle} >
                            <Input disabled/>
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

export default ViewAllDrivers;
