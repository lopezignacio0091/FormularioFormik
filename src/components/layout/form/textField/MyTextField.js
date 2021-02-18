import React from 'react';
import { useField, Field } from 'formik';
import { TextField } from 'formik-material-ui';

const MyTextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
    <>
      <Field
          component={TextField}
          {...props}
          {...field}
      />
      {meta.errors && meta.touched ? (
        <div>{meta.errors}</div>) : null}
    </>
    );
  };
 export default MyTextField;
 