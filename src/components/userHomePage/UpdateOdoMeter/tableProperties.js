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
            title: 'Initial ODO',
            dataIndex: 'initial_odo_reading',
            key: 'initial_odo_reading',
        },
        {
            title: 'Latest ODO',
            dataIndex: 'latest_odo_reading',
            key: 'latest_odo_reading',
        },
        {title: 'Enter ODO Reading',
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
                                    initial_odo_reading:row.initial_odo_reading,
                                    latest_odo_reading:row.latest_odo_reading,
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