import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Modal, Row, Select, Table} from "antd";
import {viewAllVehicleColumns} from "./tableProperties";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";
import {getVehicleAction, setEditModalContentAction} from "../../../models/vehicleModel";
import moment from 'moment';
import {
    cancelTripAction,
    endTripAction,
    enterTripDetailsAction,
    getTripsAction,
    startTripAction
} from "../../../models/tripModel";

const ViewTrips = () => {

    const [assignTripForm] = Form.useForm();
    const dispatch = useDispatch();
    const [shoWEditModel1, setShoWEditModel1] = useState(false);
    const tripData = useSelector((state) => state.TripData.tripData);
    let tripAssignModalContent = useSelector((state) => state.vehicleData.editModalContent);
    //To add key for table rows
    const tripDataUpdated = tripData?.map((item, index) => ({key: index, ...item}));

    useEffect(() => {
        let data = {
            registration_number: "",
            name: sessionStorage.USERNAME
        }
        dispatch(getTripsAction(data));

    }, [])

    useEffect(() => {
        assignTripForm.setFieldsValue({name: tripAssignModalContent?.name});
        assignTripForm.setFieldsValue({registration_number: tripAssignModalContent?.registration_number});
        assignTripForm.setFieldsValue({destination_of_trip: tripAssignModalContent?.destination_of_trip});
        assignTripForm.setFieldsValue({id: tripAssignModalContent?.id});

    }, [tripAssignModalContent]);

    function startTrip(data) {
        let data2 = {
            registration_number: "",
            name: sessionStorage.USERNAME
        }
        dispatch(startTripAction(data));
        dispatch(getTripsAction(data2));
    }

    function handleOk() {
        setShoWEditModel1(false);
    }

    function assignTripOnSubmit(data) {
        console.log(data)
        let data2 = {
            registration_number: "",
            name: sessionStorage.USERNAME
        }
        dispatch(endTripAction(data));
        dispatch(getTripsAction(data2));
        handleOk()
    }

    function handleCancel() {
        setShoWEditModel1(false);
    }

    const handleAssignTripModalShow = (data) => {
        setShoWEditModel1(true)
        console.log(data)
        dispatch(setEditModalContentAction(data));
    };


    return (
        <div>
            <BreadCrumb/>
            <Card>
                <Table
                    style={{overflowX: "auto"}}
                    id={"VehicleDataTable"}
                    columns={viewAllVehicleColumns(
                        startTrip,
                        handleAssignTripModalShow
                    )}
                    dataSource={tripDataUpdated}
                />
            </Card>

            <>
                <Modal title="Assign Trip" visible={shoWEditModel1} onOk={handleOk}
                       onCancel={handleCancel}>

                    <Form layout={"vertical"} onFinish={assignTripOnSubmit}
                          form={assignTripForm}
                          preserve={false}
                    >
                        <Form.Item name={'id'} label="Trip id"
                                   initialValue={tripAssignModalContent?.id}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'registration_number'} label="Registration number"
                                   initialValue={tripAssignModalContent?.registration_number}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'name'} label="Driver name"
                                   initialValue={tripAssignModalContent?.name}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'destination_of_trip'} label="destination of trip"
                                   initialValue={tripAssignModalContent?.destination_of_trip}>
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item name={'finishing_odo'} label="latest odo meter reading">

                            <Input />
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

export default ViewTrips;
