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
            title: 'revenue license num',
            dataIndex: 'revenue_license_num',
            key: 'revenue_license_num',
        },
        {
            title: 'revenue license issue date',
            dataIndex: 'revenue_license_issue_date',
            key: 'revenue_license_issue_date',
        },
        {
            title: 'revenue license expire date',
            dataIndex: 'revenue_license_expire_date',
            key: 'revenue_license_expire_date',
        },
        {title: 'Enter revenue license Details',
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
                                    revenue_license_num:row.revenue_license_num,
                                    revenue_license_issue_date:row.revenue_license_issue_date,
                                    revenue_license_expire_date:row.revenue_license_expire_date,
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