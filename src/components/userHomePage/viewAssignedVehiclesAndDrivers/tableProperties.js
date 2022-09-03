import {Button, Space, Table, Tag} from 'antd';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const viewAllDriverColumns = (
    unAssignVehicle
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
            title: '_id',
            dataIndex: '_id',
            key: 'id',
            hidden: true
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
            title: 'assigned vehicle',
            dataIndex: 'assigned_vehicle',
            key: 'assigned_vehicle',

        },
        {
            title: 'Unassign vehicle',
            key: 'action',
            render: (text, row) => (
                <Space size="middle">


                    <Button type="link">
                        <FontAwesomeIcon
                            icon="edit"
                            data-tip="Download Master Data File"
                            onClick={(e) => {
                                e.preventDefault();
                                let data={
                                    name:row._id,
                                    registration_number:row.assigned_vehicle
                                }
                                unAssignVehicle( data)
                                // handleAddOdoModalShow({
                                //     name:row.name,
                                //     id:row._id,
                                // })
                            }}

                        >
                        </FontAwesomeIcon>
                    </Button>

                </Space>
            ),
        },
    ].filter(item => !item.hidden)
};