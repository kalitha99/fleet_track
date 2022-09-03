import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Modal, Row, Select, Table} from "antd";
import {viewAllVehicleColumns} from "./tableProperties";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";
import {getVehicleAction, setEditModalContentAction} from "../../../models/vehicleModel";
import moment from 'moment';
import {cancelTripAction, enterTripDetailsAction} from "../../../models/tripModel";

const ViewAndAssignTrips = () => {

    const [assignTripForm] = Form.useForm();
    const dispatch = useDispatch();
    const [shoWEditModel1, setShoWEditModel1] = useState(false);

    const driverData = useSelector((state) => state.vehicleData.vehicleDetails);
    let tripAssignModalContent = useSelector((state) => state.vehicleData.editModalContent);
    //To add key for table rows
    const driverDataUpdated = driverData?.map((item, index) => ({key: index, ...item}));

    useEffect(() => {
        dispatch(getVehicleAction());
    }, [])

    useEffect(() => {
        assignTripForm.setFieldsValue({name: tripAssignModalContent?.name});
        assignTripForm.setFieldsValue({registration_number: tripAssignModalContent?.registration_number});
        assignTripForm.setFieldsValue({driver_id: tripAssignModalContent?.driver_id});
        assignTripForm.setFieldsValue({latest_odo_reading: tripAssignModalContent?.latest_odo_reading});
    }, [tripAssignModalContent]);

    function cancelTrip(data) {
        console.log(data)
        dispatch(cancelTripAction(data));
        dispatch(getVehicleAction())
    }

    function handleOk() {
        setShoWEditModel1(false);
    }

    function assignTripOnSubmit(data) {
        console.log(data)
        dispatch(enterTripDetailsAction(data));
        dispatch(getVehicleAction());
        assignTripForm.setFieldsValue({destination: ""});
        assignTripForm.setFieldsValue({distance_of_trip: ""});
        assignTripForm.setFieldsValue({trip_date: ""});
        handleOk()
    }

    function handleCancel() {
        setShoWEditModel1(false);
    }

    const handleAssignTripModalShow = (data) => {
        setShoWEditModel1(true)
        dispatch(setEditModalContentAction(data));
    };

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    };

    return (
        <div>
            <BreadCrumb/>
            <Card>
                <Table
                    style={{overflowX: "auto"}}
                    id={"VehicleDataTable"}
                    columns={viewAllVehicleColumns(
                        cancelTrip,
                        handleAssignTripModalShow
                    )}
                    dataSource={driverDataUpdated}
                />
            </Card>

            <>
                <Modal title="Assign Trip" visible={shoWEditModel1} onOk={handleOk}
                       onCancel={handleCancel}>

                    <Form layout={"vertical"} onFinish={assignTripOnSubmit}
                          form={assignTripForm}
                          preserve={false}
                    >
                        <Form.Item name={'registration_number'} label="Registration number"
                                   initialValue={tripAssignModalContent?.registration_number}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'name'} label="Driver name"
                                   initialValue={tripAssignModalContent?.name}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'latest_odo_reading'} label="latest odo meter reading"
                                   initialValue={tripAssignModalContent?.latest_odo_reading}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'destination'} label="Destination">
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'distance_of_trip'} label="Total estimated Distance ">
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'trip_date'} label="trip date">
                            <DatePicker format="YYYY/MM/DD" disabledDate={disabledDate}/>
                        </Form.Item>

                        <Form.Item name={'driver_id'} label="Driver id"
                                   initialValue={tripAssignModalContent?.driver_id} hidden>
                            <Input disabled/>
                        </Form.Item>


                        <Row style={{width: '100%'}}>
                            <Col offset={18}>
                                <Form.Item>
                                    <Button htmlType="submit" type="primary">
                                        Assign
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

export default ViewAndAssignTrips;
