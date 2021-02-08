import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Field } from 'formik';
import {  Select  } from 'formik-material-ui';

const SelectItems = ({ listItems }) => {
    return (
        <FormControl >
            <InputLabel htmlFor="nacionalidad">Nacionalidad</InputLabel>
            <Field
                component={Select}
                name="nacionalidad"
                inputProps={{
                    id: 'nacionalidad',
                }}
            >
                {listItems.length > 0 && listItems.map((item, index) => (
                    <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
                ))
                }
            </Field>
        </FormControl>
    );
}

export default SelectItems;
