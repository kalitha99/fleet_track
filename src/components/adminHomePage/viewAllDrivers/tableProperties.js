import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const viewAllDriverColumns = (
    handleEditDriverDetailsModalShow
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

        },
        {title: 'Edit Details',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">

                    <Button type="link" disabled={sessionStorage.ROLE_TYPE !== "admin"}>
                        <FontAwesomeIcon
                            icon="edit"
                            data-tip="Download Master Data File"
                            onClick={(e) => {
                                e.preventDefault();
                                handleEditDriverDetailsModalShow({
                                    id:row._id,
                                    name:row.name,
                                    email:row.email,
                                    age:row.age,
                                    nic:row.nic,
                                    address:row.address,
                                    tpNo:row.tpNo,
                                    licenseNum:row.licenseNum,
                                    bloodGroup:row.bloodGroup,
                                    assigned_vehicle:row.assigned_vehicle,
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