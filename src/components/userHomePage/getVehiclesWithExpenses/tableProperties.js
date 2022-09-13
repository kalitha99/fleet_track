import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const viewVehicleExpenseColumns = (
    handleAddOdoModalShow,
    editOdoForm
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
            width:150
        },
        {
            title: 'expense_type',
            dataIndex: 'expense_type',
            key: 'expense_type',
        },
        {
            title: 'expense_date',
            dataIndex: 'expense_date',
            key: 'expense_date',
        },
        {
            title: 'expense_name',
            dataIndex: 'expense_name',
            key: 'expense_name',

        },
        {
            title: 'expense_cost',
            dataIndex: 'expense_cost',
            key: 'expense_cost',

        },
        {
            title: 'entered_by',
            dataIndex: 'entered_by',
            key: 'entered_by',

        },
        {
            title: 'entered_on',
            dataIndex: 'entered_on',
            key: 'entered_on',

        },
    ];
};

export const viewVehicleServiceExpenseColumns = (
    handleAddOdoModalShow,
    editOdoForm
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
            width:150
        },
        {
            title: 'expense_type',
            dataIndex: 'expense_type',
            key: 'expense_type',
        },
        {
            title: 'expense_date',
            dataIndex: 'expense_date',
            key: 'expense_date',
        },
        {
            title: 'expense_cost',
            dataIndex: 'expense_cost',
            key: 'expense_cost',

        },
        {
            title: 'entered_by',
            dataIndex: 'entered_by',
            key: 'entered_by',

        },
        {
            title: 'entered_on',
            dataIndex: 'entered_on',
            key: 'entered_on',

        },
    ];
};

export let viewVehicleFuelExpenseColumns = (

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
            width:150
        },
        {
            title: 'expense_type',
            dataIndex: 'expense_type',
            key: 'expense_type',
        },
        {
            title: 'expense_date',
            dataIndex: 'expense_date',
            key: 'expense_date',
        },
        {
            title: 'number_of_liters',
            dataIndex: 'number_of_liters',
            key: 'number_of_liters',

        },
        {
            title: 'expense_cost',
            dataIndex: 'expense_cost',
            key: 'expense_cost',

        },
        {
            title: 'entered_by',
            dataIndex: 'entered_by',
            key: 'entered_by',

        },
        {
            title: 'entered_on',
            dataIndex: 'entered_on',
            key: 'entered_on',

        },
    ].filter(item => !item.hidden);
};