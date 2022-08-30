import React, {useEffect} from 'react';
import {Card, Table} from "antd";
import {viewAllVehicleColumns} from "./tableProperties";
import {getVehicleAction} from "../../../models/vehicleModel";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";

const ViewAllVehicles = () => {
    const dispatch = useDispatch();

    const vehicleData = useSelector((state) => state.vehicleData.vehicleDetails);
    //To add key for table rows
    const vehicleDataUpdated = vehicleData?.map((item) => ({key: item.registration_number, ...item}));

    useEffect(()=>{
        dispatch(getVehicleAction());
    },[])
    return (
        <div>
            <BreadCrumb />
            <Card style={{overflowX: "auto"}}>

                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllVehicleColumns()}
                    dataSource={vehicleDataUpdated}
                />
            </Card>
        </div>
    );
};

export default ViewAllVehicles;
