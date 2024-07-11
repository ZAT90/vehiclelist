import React from 'react';
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useGetVehicleListQuery } from '../services/queries/vehicle';
import './stylings/VehicleListStyling.css'
const columns = [
    { render: (id, record, index) => { ++index; return index; }, },
    {
        title: 'Vehicle id',
        dataIndex: 'id',
        //    defaultSortOrder: 'descend',
        sorter: true,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => true,
    },
    {
        title: 'Lock/Unlock',
        dataIndex: 'isLocked',
        render: (isLocked) => isLocked ? 'Locked' : 'Unlocked',
        // defaultSortOrder: 'descend',
        sorter: true,
    },
    {
        title: 'Current Speed',
        dataIndex: 'currentSpeed',
        render: (speed) => speed + ' km/h',
        // defaultSortOrder: 'descend',
        sorter: true,
    },
    {
        title: 'Battery Level',
        dataIndex: 'battery',
        render: (battery) => battery + '%',
        // defaultSortOrder: 'descend',
        sorter: true,
    },
    {
        title: 'Parking',
        dataIndex: 'status',
        render: (status) => status.toUpperCase(),
        // defaultSortOrder: 'descend',
        sorter: true,
    },
    {
        title: 'Location',
        dataIndex: 'location',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => true,
    },
    {
        title: 'Last Updated',
        dataIndex: 'lastUpdated',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => true,
    },
];

// const onChange = (pagination, filters, sorter, extra) => {
//     console.log('params', pagination, filters, sorter, extra);
// };

function VehicleList(params) {
    const { data, error, isLoading } = useGetVehicleListQuery();
    return (
        // <div style={{ height: '300px',backgroundColor: 'red' }}>
        <div>
            <div className="centered-container">
                <h4 className="centered-heading">Vehicle Management</h4>
            </div>
            <div className="button-container">

                <Button type="primary" shape="round" style={{ background: "#7adeae", color: '#808080' }} icon={<PlusOutlined />} size={10}>
                    New Vehicle
                </Button>

            </div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <Table
                    className="custom-table"
                        columns={columns}
                        rowKey={(record) => record.id}
                        dataSource={data}
                    //   onChange={onChange}
                    // showSorterTooltip={{
                    //     target: 'sorter-icon',
                    // }}
                    />
                </>
            ) : null}
        </div>
        // </div>
    )
    // return(
    //     <Table
    //     columns={columns}
    //     dataSource={data}
    //     onChange={onChange}
    //     showSorterTooltip={{
    //       target: 'sorter-icon',
    //     }}
    //   />
    // )
}
// const VehicleList = () => (
//   <Table
//     columns={columns}
//     dataSource={data}
//     onChange={onChange}
//     showSorterTooltip={{
//       target: 'sorter-icon',
//     }}
//   />
// );
export default VehicleList;