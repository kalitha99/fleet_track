import { Space, Table, Tag } from 'antd';
import React from 'react';


export const viewAllDriverColumns = (

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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'NIC',
            dataIndex: 'nic',
            key: 'nic',

        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',

        },
        {
            title: 'Phone no.',
            dataIndex: 'tpNo',
            key: 'tpNo',

        },
        {
            title: 'License no.',
            dataIndex: 'licenseNum',
            key: 'licenseNum',

        },
        {
            title: 'Blood type',
            dataIndex: 'bloodGroup',
            key: 'bloodGroup',

        }
    ];
};