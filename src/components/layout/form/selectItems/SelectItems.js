import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const SelectItems = ({listItems}) => {
    return (
        listItems.length > 0 && listItems.map( (item,index) => (
            <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
        ))
    );
}

export default SelectItems;
