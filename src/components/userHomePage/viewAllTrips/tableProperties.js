import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const viewAllVehicleColumns = () => {
    return [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            width: 95,
            render: (value, item, index) => (1 - 1) * 10 + index + 1
        },
        {
            title: 'registration_number',
            dataIndex: 'registration_number',
            key: 'registration_number',
        },
        {
            title: 'driver name',
            dataIndex: 'driver_name',
            key: 'driver_name',
        },
        {
            title: 'destination_of_trip',
            dataIndex: 'destination_of_trip',
            key: 'destination_of_trip',
        },
        {
            title: 'distance_of_trip',
            dataIndex: 'distance_of_trip',
            key: 'distance_of_trip',
        },
        {
            title: 'starting_odo',
            dataIndex: 'starting_odo',
            key: 'starting_odo',
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'finishing_odo',
            dataIndex: 'finishing_odo',
            key: 'finishing_odo',
            render: ((data, row) => {
                    if (row.finishing_odo) {
                        return row.finishing_odo;
                    } else {
                        return 'Not yet Updated';
                    }
                }
            )

        },

    ].filter(item => !item.hidden)
};
