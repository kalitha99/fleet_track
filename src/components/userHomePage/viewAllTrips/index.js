import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Modal, Row, Select, Table} from "antd";
import {viewAllVehicleColumns} from "./tableProperties";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";
import {getVehicleAction, setEditModalContentAction} from "../../../models/vehicleModel";
import moment from 'moment';
import {cancelTripAction, enterTripDetailsAction, getTripsAction} from "../../../models/tripModel";

const ViewTrips = () => {

    const dispatch = useDispatch();
    const tripData = useSelector((state) => state.TripData.tripData);
    //To add key for table rows
    const tripDataUpdated = tripData?.map((item, index) => ({key: index, ...item}));

    useEffect(() => {
        let data = {
            registration_number:"",
            name:""
        }
        dispatch(getTripsAction(data));
    }, [])


    return (
        <div>
            <BreadCrumb/>
            <Card>
                <Table
                    style={{overflowX: "auto"}}
                    id={"VehicleDataTable"}
                    columns={viewAllVehicleColumns()}
                    dataSource={tripDataUpdated}
                />
            </Card>


        </div>
    );
};

export default ViewTrips;
