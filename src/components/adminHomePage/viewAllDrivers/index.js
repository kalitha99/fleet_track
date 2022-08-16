import React, {useEffect} from 'react';
import {Card, Table} from "antd";
import {viewAllDriverColumns} from "./tableProperties";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";
import {getDriversAction} from "../../../models/driverModel";

const ViewAllDrivers = () => {
    const dispatch = useDispatch();

    const driverData = useSelector((state) => state.driverData.driverDetails);
    //To add key for table rows
    const driverDataUpdated = driverData?.map((item,index) => ({key: index, ...item}));

    useEffect(()=>{
        dispatch(getDriversAction());
    },[])
    return (
        <div>
            <BreadCrumb />
            <Card>
                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllDriverColumns()}
                    dataSource={driverDataUpdated}
                />
            </Card>
        </div>
    );
};

export default ViewAllDrivers;
