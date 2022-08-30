import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const viewAllVehicleColumns = (
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

        },
        {
            title: 'Assigned Driver',
            dataIndex: 'assigned_driver',
            key: 'assigned_driver',

        },
        {title: 'Assign driver',
            key: 'action',
            render: (text, row) => (
            <Space size="middle">


                    <Button type="link">
                        <FontAwesomeIcon
                            icon="edit"
                            data-tip="Download Master Data File"
                            onClick={(e) => {
                                e.preventDefault();
                                handleAddOdoModalShow({
                                    registration_number:row.registration_number,
                                    insurance_num:row.insurance_num,
                                    insurance_issue_date:row.insurance_issue_date,
                                    insurance_expire_date:row.insurance_expire_date,
                                })
                            }}

                        >
                        </FontAwesomeIcon>
                    </Button>

            </Space>
        ),
    },
    ];
};

export let viewAllDriverColumns = (
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
            title: '_id',
            dataIndex: '_id',
            key: 'id',
            hidden: true
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width:150
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'tpNo',
            dataIndex: 'tpNo',
            key: 'tpNo',

        },
        {
            title: 'Assigned vehicle',
            dataIndex: 'assigned_vehicle',
            key: 'assigned_vehicle',

        },
        {title: 'Assign vehicle',
            key: 'action',
            render: (text, row) => (
            <Space size="middle">


                    <Button type="link">
                        <FontAwesomeIcon
                            icon="edit"
                            data-tip="Download Master Data File"
                            onClick={(e) => {
                                e.preventDefault();
                                handleAddOdoModalShow({
                                    name:row.name,
                                    id:row._id,
                                })
                            }}

                        >
                        </FontAwesomeIcon>
                    </Button>

            </Space>
        ),
    },
    ].filter(item => !item.hidden);
};