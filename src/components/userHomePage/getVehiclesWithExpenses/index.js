import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Modal, Row, Select, Table, Tabs} from "antd";
import './style.css'
import BreadCrumb from "../../../Comp/breadCrumb";
import {
    getVehiclesWithExpensesAction,
    searchVehicleDataAction, searchVehiclesAssignedDriverAction, setDriverAssignModalContentAction,
    setEditModalContentAction,
    updateInsuranceDetailsAction,
} from "../../../models/vehicleModel";
import {useDispatch, useSelector} from "react-redux";
import {
    viewAllDriverColumns,
    viewAllVehicleColumns,
    viewVehicleExpenseColumns,
    viewVehicleFuelExpenseColumns, viewVehicleServiceExpenseColumns
} from "./tableProperties";
import {assignVehicleToDriverAction, searchDriversAction} from "../../../models/driverModel";

const ViewExpenses = () => {
    const {Option} = Select;
    const {TabPane} = Tabs;
    const [searchForm] = Form.useForm();
    const dispatch = useDispatch();

    const vehicleData = useSelector((state) => state.vehicleData.vehicleDetails);
    const driverData = useSelector((state) => state.driverData.driverDetails);
    let editRevenueLicense = useSelector((state) => state.vehicleData.editModalContent);
    //To add key for table rows
    const vehicleDataUpdated = vehicleData?.map((item) => ({key: item.registration_number, ...item}));

    function onFinish(values) {
        dispatch(getVehiclesWithExpensesAction(values));
    }

    useEffect(() => {
        const data = {
            registration_number: searchForm.getFieldValue("registration_number")
        }
        dispatch(getVehiclesWithExpensesAction(data));

    }, []);

    console.log(editRevenueLicense)

    const onChange = (key) => {
        console.log(key);
    };


    return (
        <div>
            <BreadCrumb/>
            <Card className={"card1"}>
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
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="vehicle expenses" key="1">
                        {vehicleDataUpdated ?
                            <Card style={{overflowX: "auto"}}>
                                <Table
                                    id={"VehicleDataTable"}
                                    columns={viewVehicleExpenseColumns()}
                                    dataSource={vehicleDataUpdated[0]?.expenses}
                                />
                            </Card>
                            : <Card style={{overflowX: "auto"}}>
                                <Table

                                />
                            </Card>}
                    </TabPane>


                    <TabPane tab="vehicle service expenses" key="2">
                        {vehicleDataUpdated ?
                            <Card style={{overflowX: "auto"}}>
                                <Table
                                    id={"VehicleDataTable"}
                                    columns={viewVehicleServiceExpenseColumns()}
                                    dataSource={vehicleDataUpdated[0]?.service_expenses}
                                />
                            </Card>
                            : <Card style={{overflowX: "auto"}}>
                                <Table

                                />
                            </Card>}

                    </TabPane>


                    <TabPane tab="vehicle fuel expenses" key="3">
                        {vehicleDataUpdated ?
                            <Card style={{overflowX: "auto"}}>
                                <Table
                                    id={"VehicleDataTable"}
                                    columns={viewVehicleFuelExpenseColumns()}
                                    dataSource={vehicleDataUpdated[0]?.fuel_expenses}
                                />
                            </Card>
                            : <Card style={{overflowX: "auto"}}>
                                <Table

                                />
                            </Card>}

                    </TabPane>

                </Tabs>
            </Card>
        </div>

    );
};

export default ViewExpenses;
