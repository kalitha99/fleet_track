import { Space, Table, Tag } from 'antd';
import React from 'react';


export const viewAllVehicleColumns = (

) => {
    return [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            width:95,
            render: (value, item, index) => (1 - 1) * 10 + index + 1
        },
        {
            title: 'Registration Number',
            dataIndex: 'registration_number',
            key: 'Registration Number',
            width:400
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'Year',
        },
        {
            title: 'Make',
            dataIndex: 'make',
            key: 'Make',
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'Model',

        }
    ];
};