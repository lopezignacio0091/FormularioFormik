import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, FormControlLabel, Radio, Grid } from '@material-ui/core';
import { TextField, Select, RadioGroup } from 'formik-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SettingsPhoneRoundedIcon from '@material-ui/icons/SettingsPhoneRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
//   } from '@material-ui/pickers';
import {
    DatePicker,
  } from 'formik-material-ui-pickers';
  import { MuiPickersUtilsProvider } from '@material-ui/pickers';
  
  // Depending on the library you picked
  import DateFnsUtils from '@date-io/date-fns';
const FormularioFormik = () => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
            initialValues={{
                nombre: '',
                apellido: '',
                nacionalidad: '',
                dni: '',
                genero:'',
                email: '',
                password: '',
                age: '',
                telefono: '',
                comentarios:'',
                fechaNacimiento: new Date()
            }}
            validate={values => {
                const errors = {};

                if (!values.apellido) {
                    errors.apellido = 'Required';
                } else if (
                    !/^[a-zA-Z ]+$/i.test(values.apellido)
                ) {
                    errors.apellido = 'Invalid Name only letters';
                }

                if (!values.nombre) {
                    errors.nombre = 'Required';
                } else if (
                    !/^[a-zA-Z ]+$/i.test(values.nombre)
                ) {
                    errors.nombre = 'Invalid Name only letters';
                }

                if (!values.password) {
                    errors.password = 'Required';
                } else if (
                    // eslint-disable-next-line no-useless-escape
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(values.password)
                ) {
                    errors.password = 'Invalid password only numbers \n The string must contain at least 1 lowercase alphabetical character \n The string must contain at least 1 uppercase alphabetical character \n The string must contain at least 1 numeric character \n The string must contain at least one special character';
                }

                if (!values.dni) {
                    errors.dni = 'Required';
                } else if (
                    !/^\d+$/i.test(values.dni)
                ) {
                    errors.dni = 'Invalid DNI only numbers';
                }
                
                if (!values.telefono) {
                    errors.telefono = 'Required';
                } else if (
                    !/^\d+$/i.test(values.telefono)
                ) {
                    errors.telefono = 'Invalid telefono only numbers';
                }

                if (!values.age) {
                    errors.age = 'Required';
                } else if (
                    !/^\d+$/i.test(values.age)
                ) {
                    errors.age = 'Invalid age only numbers';
                }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (
            <Form>
                <Grid container>
                    <Grid item xs={12} md={6} lg={6}>
                        <Field
                            component={TextField}
                            name="nombre"
                            type="text"
                            label="Nombre"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Field
                            component={TextField}
                            name="apellido"
                            type="text"
                            label="Apellido"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <FormControl >
                            <InputLabel htmlFor="nacionalidad">Nacionalidad</InputLabel>
                            <Field
                                component={Select}
                                name="nacionalidad"
                                inputProps={{
                                    id: 'nacionalidad',
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Field>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                       <FormControl>
                            <InputLabel htmlFor="age-simple">Edad</InputLabel>
                            <Field
                                component={Select}
                                name="age"
                                inputProps={{
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Field>
                        </FormControl>
                    </Grid>    

                    <Grid item xs={12} md={12} lg={12}>
                        <Field component={DatePicker} label="Fecha Nacimiento" name="fechaNacimiento" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Field
                            component={TextField}
                            type="Number"
                            label="DNI"
                            name="dni"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AssignmentRoundedIcon />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>    
                    <Grid item xs={12} md={6} lg={6}>       
                        <Field
                            component={TextField}
                            name="telefono"
                            type="Number"
                            label="Telefono"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <SettingsPhoneRoundedIcon />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>    
                    <Grid item xs={12} md={12} lg={12}>
                        <Field component={RadioGroup} name="genero">
                            <InputLabel htmlFor="genero">Genero</InputLabel>
                            <FormControlLabel
                                value="hombre"
                                control={<Radio disabled={isSubmitting} />}
                                label="Hombre"
                                disabled={isSubmitting}
                            />
                            <FormControlLabel
                                value="mujer"
                                control={<Radio disabled={isSubmitting} />}
                                label="Mujer"
                                disabled={isSubmitting}
                            />
                            <FormControlLabel
                                value="nobinario"
                                control={<Radio disabled={isSubmitting} />}
                                label="No Binario"
                                disabled={isSubmitting}
                            />
                            <FormControlLabel
                                value="none"
                                control={<Radio disabled={isSubmitting} />}
                                label="None"
                                disabled
                            />
                        </Field>
                    </Grid>
                    
                    <Grid item xs={12} md={6} lg={6}>
                        <Field
                            component={TextField}
                            name="email"
                            type="Email"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <ContactMailRoundedIcon />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>  
                        <Field
                            component={TextField}
                            type="password"
                            label="Password"
                            name="password"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <LockOpenRoundedIcon />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    
                    <Grid item xs={12} md={12} lg={12}>  
                        <Field
                            component={TextField}
                            type="text"
                            label="Comentarios"
                            name="comentarios"
                            multiline
                            rowsMax={4}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <MessageRoundedIcon />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        {isSubmitting && <LinearProgress />}
                    </Grid>

                    <Grid item xs={12} md={12} lg={12} className='botonesForm'>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            disabled={isSubmitting}
                            onClick={()=>{alert('cancelado')}}
                        >
                            Cancel
                        </Button>    
                    </Grid>   
                </Grid> 
            </Form>
            )}
        </Formik>
        </MuiPickersUtilsProvider>
    );
}

export default FormularioFormik;