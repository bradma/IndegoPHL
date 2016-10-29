import React from 'react';
import Table from 'rc-table';

class RiderTable extends React.Component {
    render() {
        if (this.props.data.length > 0) {
            const Columns = [
                    {title: 'Bike Id', dataIndex: 'bike_id', key: 'bike_id', width: 50},
                    {title: 'Duration', dataIndex: 'duration', key: 'duration', width: 50},
                    {title: 'End Latitude', dataIndex: 'end_lat', key: 'end_lat', width: 50},
                    {title: 'End Longitude', dataIndex: 'end_lon', key: 'end_lon', width: 50},
                    {title: 'End Station Id', dataIndex: 'end_station_id', key: 'end_station_id', width: 50},
                    {title: 'End Time', dataIndex: 'end_time', key: 'end_time', width: 50},
                    {title: 'Passholder Type', dataIndex: 'passholder_type', key: 'passholder_type', width: 50},
                    {title: 'Plan Duration', dataIndex: 'plan_duration', key: 'plan_duration', width: 50},
                    {title: 'Start Latitude', dataIndex: 'start_lat', key: 'start_lat', width: 50},
                    {title: 'Start Longitude', dataIndex: 'start_lon', key: 'start_lon', width: 50},
                    {title: 'Start Time', dataIndex: 'start_time', key: 'start_time', width: 50},
                    {title: 'Start Station Id', dataIndex: 'start_station_id', key: 'start_station_id', width: 50},
                    {title: 'Trip Route Category', dataIndex: 'trip_route_category', key: 'trip_route_category', width: 50}
                ],
                Data = this.props.data.splice(1, this.props.data.length);

            return (
                <div>
                    <Table columns={Columns} data={Data} />
                </div>
            )
        }
        else return <div></div>
    }
}

export default RiderTable
