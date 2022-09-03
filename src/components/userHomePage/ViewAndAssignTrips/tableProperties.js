import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const viewAllVehicleColumns = (
    cancelTrip,
    handleAssignTripModalShow
) => {
    return [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            width: 95,
            render: (value, item, index) => (1 - 1) * 10 + index + 1
        },
        {
            title: 'make',
            dataIndex: 'make',
            key: 'make',

        },
        {
            title: 'assigned_driver_id',
            dataIndex: 'assigned_driver_id',
            key: 'assigned_driver_id',
            hidden: true

        },
        {
            title: 'model',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'registration_number',
            dataIndex: 'registration_number',
            key: 'registration_number',
        },
        {
            title: 'available for trip',
            dataIndex: 'available_for_trip',
            key: 'available_for_trip',
        },
        {
            title: 'assigned_driver',
            dataIndex: 'assigned_driver',
            key: 'assigned_driver',

        },
        {
            title: 'Assign Trip',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">


                    <Button type="link" disabled={row.available_for_trip === "false"}>
                        <FontAwesomeIcon
                            icon="edit"

                            onClick={(e) => {
                                e.preventDefault();
                                handleAssignTripModalShow({
                                    registration_number: row.registration_number,
                                    driver_id: row.assigned_driver_id,
                                    name: row.assigned_driver,
                                    latest_odo_reading: row.latest_odo_reading
                                })
                            }}

                        >
                        </FontAwesomeIcon>
                    </Button>

                </Space>
            ),
        },
        {
            title: 'Cancel Trip',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">


                    <Button type="link" disabled = {sessionStorage.ROLE_TYPE !== "admin" && row.available_for_trip==="true"}>
                        <FontAwesomeIcon
                            icon="edit"

                            onClick={(e) => {
                                e.preventDefault();
                                let data = {
                                    registration_number: row.registration_number
                                }
                                cancelTrip(data)
                                // handleAddOdoModalShow({
                                //     name:row.name,
                                //     id:row._id,
                                // })
                            }}

                        >
                        </FontAwesomeIcon>
                    </Button>

                </Space>
            ),
        },
    ].filter(item => !item.hidden)
};
