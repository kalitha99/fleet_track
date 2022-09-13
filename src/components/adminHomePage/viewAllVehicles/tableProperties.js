import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const viewAllVehicleColumns = (
    handleEditVehicleDetailsModalShow
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
            title: 'Registration Number',
            dataIndex: 'registration_number',
            key: 'Registration Number',
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
            title: 'fuel type',
            dataIndex: 'fuel_type',
            key: 'fuel_type',

        },
        {
            title: 'assigned driver ',
            dataIndex: 'assigned_driver',
            key: 'assigned_driver',

        },
        {
            title: 'insurance_expire_date',
            dataIndex: 'insurance_expire_date',
            key: 'insurance_expire_date',

        },
        {
            title: 'revenue_license_expire_date',
            dataIndex: 'revenue_license_expire_date',
            key: 'revenue_license_expire_date',

        },
        {
            title: 'fuel type',
            dataIndex: 'fuel_type',
            key: 'fuel_type',

        },
        {
            title: 'Detailed View',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">

                    <Button type="link" disabled={sessionStorage.ROLE_TYPE !== "admin"}>
                        <FontAwesomeIcon
                            icon="edit"
                            data-tip="Download Master Data File"
                            onClick={(e) => {
                                e.preventDefault();
                                handleEditVehicleDetailsModalShow({
                                    id: row._id,
                                    make: row.make,
                                    model: row.model,
                                    year: row.year,
                                    initial_odo_reading: row.initial_odo_reading,
                                    registration_number: row.registration_number,
                                    revenue_license_num: row.revenue_license_num,
                                    revenue_license_issue_date: row.revenue_license_issue_date,
                                    revenue_license_expire_date: row.revenue_license_expire_date,
                                    fuel_type: row.fuel_type,
                                    vehicle_type: row.vehicle_type,
                                    latest_odo_reading: row.latest_odo_reading,
                                    insurance_expire_date: row.insurance_expire_date,
                                    insurance_issue_date: row.insurance_issue_date,
                                    insurance_num: row.insurance_num,
                                    assigned_driver: row.assigned_driver,

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