import React, {useEffect} from 'react';
import {Card, Table} from "antd";
import {viewAllDriverColumns} from "./tableProperties";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumb from "../../../Comp/breadCrumb";
import {
    assignVehicleToDriverAction,
    searchAssignedDriversAction,
    searchDriversAction
} from "../../../models/driverModel";

const ViewAssignedVehiclesAndDrivers = () => {
    const dispatch = useDispatch();

    const driverData = useSelector((state) => state.driverData.driverDetails);
    //To add key for table rows
    const driverDataUpdated = driverData?.map((item, index) => ({key: index, ...item}));

    useEffect(() => {
        let data = {
            assigned_vehicle: "unassigned"
        }
        dispatch(searchAssignedDriversAction(data));
    }, [])

    function unAssignVehicle(data) {
        data.status = "unassigned"
        console.log(data)
        dispatch(assignVehicleToDriverAction(data));
        let data2 = {
            assigned_vehicle: "unassigned"
        }
        dispatch(searchAssignedDriversAction(data2));
    }

    return (
        <div>
            <BreadCrumb/>
            <Card>
                <Table
                    id={"VehicleDataTable"}
                    columns={viewAllDriverColumns(
                        unAssignVehicle
                    )}
                    dataSource={driverDataUpdated}
                />
            </Card>
        </div>
    );
};

export default ViewAssignedVehiclesAndDrivers;
