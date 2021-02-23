import React from "react";
import { connect } from 'react-redux';
import { getUsers } from '../../../actions/HomeActions';
import {  useEffect } from 'react';
import MUIDataTable from "mui-datatables";

const UserTable = ({homeReducer: {users}, getUsers}) => {

    useEffect(() => {
        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const columns = ["Id", "Name", "Year"];

    const options = {
        filter: true,
        filterType: "dropdown",
    };

    return (
        <React.Fragment>

            <MUIDataTable
                title={"Employee list"}
                data={users.map(e=>{
                    return [
                        e.id,
                        e.name,
                        e.year
                    ]
                })}
                columns={columns}
                options={options}
            />
        </React.Fragment>
    );
}

const mapProps = state => ({
    homeReducer: state.homeReducer
})

export default connect(mapProps, { getUsers })(UserTable)