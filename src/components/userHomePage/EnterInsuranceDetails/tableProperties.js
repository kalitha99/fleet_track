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
            title: 'insurance num',
            dataIndex: 'insurance_num',
            key: 'insurance_num',
        },
        {
            title: 'insurance issue date',
            dataIndex: 'insurance_issue_date',
            key: 'insurance_issue_date',
        },
        {
            title: 'insurance expire date',
            dataIndex: 'insurance_expire_date',
            key: 'insurance_expire_date',
        },
        {title: 'Enter insurance details',
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