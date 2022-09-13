import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Modal, Row, Table} from "antd";
import {viewAllVehicleColumns} from "./tableProperties";
import {getVehicleAction, setEditModalContentAction, updateVehicleAction} from "../../../models/vehicleModel";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";
import moment from "moment";

const ViewAllVehicles = () => {
    const dateFormat = "YYYY-MM-DD";
    const dispatch = useDispatch();
    const [editVehicleDetailsForm] = Form.useForm();
    const [shoWEditModel, setShoWEditModel] = useState(false);
    const vehicleModelData = useSelector((state) => state.vehicleData.editModalContent);

    const vehicleData = useSelector((state) => state.vehicleData.vehicleDetails);
    //To add key for table rows
    const vehicleDataUpdated = vehicleData?.map((item) => ({key: item.registration_number, ...item}));

    useEffect(()=>{
        dispatch(getVehicleAction());
    },[])

    useEffect(() => {
        editVehicleDetailsForm.setFieldsValue({make: vehicleModelData?.make});
        editVehicleDetailsForm.setFieldsValue({model: vehicleModelData?.model});
        editVehicleDetailsForm.setFieldsValue({year: vehicleModelData?.year});
        editVehicleDetailsForm.setFieldsValue({initial_odo_reading: vehicleModelData?.initial_odo_reading});
        editVehicleDetailsForm.setFieldsValue({registration_number: vehicleModelData?.registration_number});
        editVehicleDetailsForm.setFieldsValue({revenue_license_num: vehicleModelData?.revenue_license_num});
        editVehicleDetailsForm.setFieldsValue({revenue_license_issue_date: moment(vehicleModelData?.revenue_license_issue_date, dateFormat)});
        editVehicleDetailsForm.setFieldsValue({revenue_license_expire_date: moment(vehicleModelData?.revenue_license_expire_date, dateFormat)});
        editVehicleDetailsForm.setFieldsValue({fuel_type: vehicleModelData?.fuel_type});
        editVehicleDetailsForm.setFieldsValue({latest_odo_reading: vehicleModelData?.latest_odo_reading});
        editVehicleDetailsForm.setFieldsValue({insurance_expire_date: moment(vehicleModelData?.insurance_expire_date, dateFormat)});
        editVehicleDetailsForm.setFieldsValue({insurance_issue_date: moment(vehicleModelData?.insurance_issue_date, dateFormat)});
        editVehicleDetailsForm.setFieldsValue({vehicle_type: vehicleModelData?.vehicle_type});
        editVehicleDetailsForm.setFieldsValue({insurance_num: vehicleModelData?.insurance_num});
        editVehicleDetailsForm.setFieldsValue({assigned_driver: vehicleModelData?.assigned_driver});
    }, [vehicleModelData]);

    const handleOk = () => {
        setShoWEditModel(false);
    };

    const handleCancel = () => {
        setShoWEditModel(false);
    };

    function onEdit(values) {
        console.log(values)
        dispatch(updateVehicleAction(values));
        dispatch(getVehicleAction());
        handleOk()
    }

    const handleEditVehicleDetailsModalShow = (data) => {
        setShoWEditModel(true)
        dispatch(setEditModalContentAction(data));
    };


    return (
        <div>
            <BreadCrumb />
            <Card style={{overflowX: "auto"}}>

                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllVehicleColumns(
                        handleEditVehicleDetailsModalShow
                    )}
                    dataSource={vehicleDataUpdated}
                />
            </Card>
            <>
                <Modal title="View/Edit Driver Details" visible={shoWEditModel} onOk={handleOk} onCancel={handleCancel}>

                    <Form layout={"vertical"} onFinish={onEdit}
                          form={editVehicleDetailsForm}
                          preserve={false}
                    >

                        <Form.Item name={'make'} label="make"
                                   initialValue={vehicleModelData?.make} >
                            <Input />
                        </Form.Item>
                        <Form.Item name={'model'} label="model"
                                   initialValue={vehicleModelData?.model}>
                            <Input />
                        </Form.Item>


                        <Form.Item name={'year'} label="year"
                                   initialValue={vehicleModelData?.year}>
                            <Input/>
                        </Form.Item>


                        <Form.Item name={'initial_odo_reading'} label="initial_odo_reading"
                                   initialValue={vehicleModelData?.initial_odo_reading}>
                            <Input disabled/>
                        </Form.Item>
                        <Form.Item name={'latest_odo_reading'} label="latest_odo_reading"
                                   initialValue={vehicleModelData?.latest_odo_reading} >
                            <Input />
                        </Form.Item>

                        <Form.Item name={'registration_number'} label="registration_number"
                                   initialValue={vehicleModelData?.registration_number}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'revenue_license_num'} label="revenue_license_num"
                                   initialValue={vehicleModelData?.revenue_license_num}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'revenue_license_issue_date'} label="revenue_license_issue_date"
                                   initialValue={moment(vehicleModelData?.revenue_license_issue_date, dateFormat)}>
                            <DatePicker/>
                        </Form.Item>

                        <Form.Item name={'revenue_license_expire_date'} label="revenue_license_expire_date"
                                   initialValue={moment(vehicleModelData?.revenue_license_expire_date, dateFormat)}>
                            <DatePicker/>
                        </Form.Item>


                        <Form.Item name={'fuel_type'} label="fuel_type"
                                   initialValue={vehicleModelData?.fuel_type}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'vehicle_type'} label="vehicle_type"
                                   initialValue={vehicleModelData?.vehicle_type} >
                            <Input />
                        </Form.Item>

                        <Form.Item name={'insurance_expire_date'} label="insurance_expire_date"
                                   initialValue={moment(vehicleModelData?.insurance_expire_date, dateFormat)} >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item name={'insurance_issue_date'} label="insurance_issue_date"
                                   initialValue={moment(vehicleModelData?.insurance_issue_date, dateFormat)} >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item name={'insurance_num'} label="insurance_num"
                                   initialValue={vehicleModelData?.insurance_num} >
                            <Input />
                        </Form.Item>
                        <Form.Item name={'assigned_driver'} label="assigned_driver"
                                   initialValue={vehicleModelData?.assigned_driver} >
                            <Input />
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

export default ViewAllVehicles;
