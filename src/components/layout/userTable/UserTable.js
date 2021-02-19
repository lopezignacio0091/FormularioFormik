import React from "react";
import { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";

const UserTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((json) => {
                setData(json.users)
            })

    }, [])

    const columns = ["Id", "Name", "Year"];

    const options = {
        filter: true,
        filterType: "dropdown",
    };

    return (
        <React.Fragment>

            <MUIDataTable
                title={"Employee list"}
                data={data.map(e=>{
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

export default UserTable