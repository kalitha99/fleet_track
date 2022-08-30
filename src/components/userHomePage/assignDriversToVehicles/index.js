import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Modal, Row, Select, Table, Tabs} from "antd";
import './style.css'
import BreadCrumb from "../../../Comp/breadCrumb";
import {
    searchVehicleDataAction, searchVehiclesAssignedDriverAction, setDriverAssignModalContentAction,
    setEditModalContentAction,
    updateInsuranceDetailsAction,
} from "../../../models/vehicleModel";
import {useDispatch, useSelector} from "react-redux";
import {viewAllDriverColumns, viewAllVehicleColumns} from "./tableProperties";
import {assignVehicleToDriverAction, searchDriversAction} from "../../../models/driverModel";

const AssignDriversToVehicles = () => {
    const {Option} = Select;
    const {TabPane} = Tabs;
    const [assignVehicleToDriverForm] = Form.useForm();
    const [assignVehicleToDriverForm2] = Form.useForm();
    const [searchForm] = Form.useForm();
    const [searchFormWithName] = Form.useForm();
    const dispatch = useDispatch();
    const [shoWEditModel1, setShoWEditModel1] = useState(false);
    const [shoWEditModel2, setShoWEditModel2] = useState(false);

    const vehicleData = useSelector((state) => state.vehicleData.vehicleDetails);
    const driverData = useSelector((state) => state.driverData.driverDetails);
    let editRevenueLicense = useSelector((state) => state.vehicleData.editModalContent);
    let driverAssignModalContent = useSelector((state) => state.vehicleData.driverAssignModalContent);
    //To add key for table rows
    const vehicleDataUpdated = vehicleData?.map((item) => ({key: item.registration_number, ...item}));
    const driverDataUpdated = driverData?.map((item) => ({key: item._id, ...item}));


    const onChangeSelect = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearchSelect = (value: string) => {
        console.log('search:', value);
    };

    const onChangeSelect2 = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearchSelect2 = (value: string) => {
        console.log('search:', value);
    };

    function onFinish(values) {
        values.assigned_driver= "unassigned"
        dispatch(searchVehiclesAssignedDriverAction(values));
        //searchForm.setFieldsValue({registration_number:""})
    }
    function driverSearchOnFinish(values) {
        values.assigned_vehicle= "unassigned"
        dispatch(searchDriversAction(values));
    }

    useEffect(() => {
        assignVehicleToDriverForm.setFieldsValue({registration_number: editRevenueLicense?.registration_number});
    }, [editRevenueLicense]);

    useEffect(() => {
        assignVehicleToDriverForm2.setFieldsValue({name: driverAssignModalContent?.id});
        assignVehicleToDriverForm2.setFieldsValue({nme: driverAssignModalContent?.name});
    }, [driverAssignModalContent]);

    useEffect(() => {
        const data = {
            registration_number: "",
            make: "",
            model: "",
            assigned_driver: "unassigned"
        }
        dispatch(searchVehicleDataAction(data));

        const data2 = {
            name:"",
            assigned_vehicle: "unassigned"
        }
        dispatch(searchDriversAction(data2));

    }, []);

    const handleAssignDriversModalShow = (data) => {
        setShoWEditModel1(true)
        dispatch(setEditModalContentAction(data));
    };

    const handleOk = () => {
        setShoWEditModel1(false);


    };

    const handleCancel = () => {
        setShoWEditModel1(false);
    };

const handleAssignDriversModalShow2 = (data) => {
        setShoWEditModel2(true)
        dispatch(setDriverAssignModalContentAction(data));
    };

    const handleOk2 = () => {
        setShoWEditModel2(false);


    };

    const handleCancel2 = () => {
        setShoWEditModel2(false);
    };

    function assignVehicleToDriverOnSubmit(values) {

        dispatch(assignVehicleToDriverAction(values));

        const data = {
            registration_number: "",
            make: "",
            model: "",
            assigned_driver: "unassigned"
        }
        dispatch(searchVehicleDataAction(data));

        const data2 = {
            name:"",
            assigned_vehicle: "unassigned"
        }
        dispatch(searchDriversAction(data2));
        assignVehicleToDriverForm.setFieldsValue({name: ""})
        handleOk()
    }

    function assignVehicleToDriverOnSubmit2(values) {

        dispatch(assignVehicleToDriverAction(values));

        const data = {
            registration_number: "",
            make: "",
            model: "",
            assigned_driver: "unassigned"
        }
        dispatch(searchVehicleDataAction(data));

        const data2 = {
            name:"",
            assigned_vehicle: "unassigned"
        }
        dispatch(searchDriversAction(data2));
        handleOk2()
        assignVehicleToDriverForm.setFieldsValue({name: ""})

    }

    console.log(editRevenueLicense)

    const onChange = (key) => {
        console.log(key);
    };



    return (
        <div>
            <BreadCrumb/>
            <Card className={"card1"}>
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Search by vehicle" key="1">
                        <Card className={"card1"}>
                            <Form layout={"vertical"} onFinish={onFinish}
                                  form={searchForm}
                            >
                                <Row style={{width: '100%'}}>
                                    <Col span={6}>
                                        <Form.Item name={'registration_number'} label="Registration number"
                                                   initialValue={""}>
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row style={{width: '100%'}}>
                                    <Col offset={4}>
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
                                    handleAssignDriversModalShow,
                                    assignVehicleToDriverForm
                                )}
                                dataSource={vehicleDataUpdated}
                            />
                        </Card>

                        <>
                            <Modal title="Assign Driver to vehicle" visible={shoWEditModel1} onOk={handleOk}
                                   onCancel={handleCancel}>

                                <Form layout={"vertical"} onFinish={assignVehicleToDriverOnSubmit}
                                      form={assignVehicleToDriverForm}
                                      preserve={false}
                                >
                                    <Form.Item name={'registration_number'} label="Registration number"
                                               initialValue={editRevenueLicense?.registration_number}>
                                        <Input disabled/>
                                    </Form.Item>

                                    <Form.Item name={'name'} label="Driver name">
                                        <Select
                                            showSearch
                                            placeholder="Select a person"
                                            optionFilterProp="children"
                                            onChange={onChangeSelect}
                                            onSearch={onSearchSelect}
                                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                        >

                                            {driverData &&
                                            driverData.map((item) => (
                                                <Select.Option key={item._id}
                                                               value={item._id}>{item.name}</Select.Option>
                                            ))}
                                        </Select>
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
                    </TabPane>


                    <TabPane tab="Search by driver" key="2">
                        <Card className={"card1"}>
                            <Form layout={"vertical"} onFinish={driverSearchOnFinish}
                                  form={searchFormWithName}
                            >
                                <Row style={{width: '100%'}}>
                                    <Col span={6}>
                                        <Form.Item name={'name'} label="Driver name"
                                                   initialValue={""}>
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row style={{width: '100%'}}>
                                    <Col offset={4}>
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
                                columns={viewAllDriverColumns(
                                    handleAssignDriversModalShow2,
                                    assignVehicleToDriverForm
                                )}
                                dataSource={driverDataUpdated}
                            />
                        </Card>
                        <>
                            <Modal title="Assign vehicle to driver" visible={shoWEditModel2} onOk={handleOk2}
                                   onCancel={handleCancel2}>

                                <Form layout={"vertical"} onFinish={assignVehicleToDriverOnSubmit2}
                                      form={assignVehicleToDriverForm2}
                                      preserve={false}
                                >
                                    <Form.Item name={'name'} label="driver id"
                                               initialValue={driverAssignModalContent?.id}>
                                        <Input disabled/>
                                    </Form.Item>
                                    <Form.Item name={'nme'} label="driver name"
                                               initialValue={driverAssignModalContent?.name}>
                                        <Input disabled/>
                                    </Form.Item>

                                    <Form.Item name={'registration_number'} label="Vehicle reg no">
                                        <Select
                                            showSearch
                                            placeholder="Select a Reg. no"
                                            optionFilterProp="children"
                                            onChange={onChangeSelect2}
                                            onSearch={onSearchSelect2}
                                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                        >

                                            {vehicleData &&
                                            vehicleData.map((item) => (
                                                <Select.Option key={item.registration_number}
                                                               value={item.registration_number}>{item.registration_number}</Select.Option>
                                            ))}
                                        </Select>
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
                    </TabPane>

                </Tabs>
            </Card>
        </div>

    );
};

export default AssignDriversToVehicles;
