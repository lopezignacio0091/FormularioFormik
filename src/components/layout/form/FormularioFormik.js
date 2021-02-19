import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNacionalidades, getEdades, createUser } from '../../../actions/FormularioActions';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, FormControlLabel, Radio, Grid } from '@material-ui/core';
import { RadioGroup } from 'formik-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import InputLabel from '@material-ui/core/InputLabel';
import SettingsPhoneRoundedIcon from '@material-ui/icons/SettingsPhoneRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Logo from '../../../img/formulario1.jpg';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import {  Select  } from 'formik-material-ui';
import MyTextField from '../form/textField/MyTextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as Yup from "yup";

const FormularioFormik = ({ formularioReducer: { nacionalidades, edades },createUser, getNacionalidades, getEdades }) => {

    useEffect(() => {
        getNacionalidades();
        getEdades();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const SignupSchema = Yup.object().shape({
        nombre: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid Name only letters").required('Required'),
        apellido: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid SurName only letters").required('Required'),
        email: Yup.string().email('Invalid Mail Format').required('Required'),
        // eslint-disable-next-line no-useless-escape
        password: Yup.string().min(6,'Too Short!').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'Invalid password only numbers \n The string must contain at least 1 lowercase alphabetical character \n The string must contain at least 1 uppercase alphabetical character \n The string must contain at least 1 numeric character \n The string must contain at least one special character').required('Required'),
        nacionalidad: Yup.string().required('Required'),
        dni: Yup.number().required('Required'),
        genero: Yup.string().required('Required'),
        age: Yup.number().required().min(17, 'Min age is 10'),
        telefono: Yup.number().min(8,'Not valid Telefone too short').required('Required'),
        comentarios: Yup.string().required('Required'),
        fechaNacimiento: Yup.date().required('Required')
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    nacionalidad: '',
                    dni: '',
                    genero: '',
                    email: '',
                    password: '',
                    age: '',
                    telefono: '',
                    comentarios: '',
                    fechaNacimiento: new Date()
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        createUser(values);
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting, errors, touched }) => (
                    <Form>
                        <Grid container>

                            <img src={Logo} alt='imagenlogo' style={{marginBottom:'5%'}}/>

                            <Grid item xs={12} md={6} lg={6}>

                                <MyTextField name="nombre" type="text" label="Nombre" placeholder="Nombre" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}/>

                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <MyTextField name="apellido" type="text" label="Apellido" placeholder="Apellido" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}/>

                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                               
                                <FormControl >
                                    <InputLabel htmlFor="nacionalidad">Nacionalidad</InputLabel>
                                    <Field
                                        component={Select}
                                        name='nacionalidad'
                                        inputProps={{
                                            id: 'nacionalidad',
                                        }}
                                    >
                                        {nacionalidades.length > 0 && nacionalidades.map((item, index) => (
                                            <MenuItem value={index} key={index}>{item.name}</MenuItem>
                                        ))
                                        }
                                    </Field>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <FormControl >
                                    <InputLabel htmlFor="age">Edad</InputLabel>
                                    <Field
                                        component={Select}
                                        name='age'
                                        inputProps={{
                                            id: 'age',
                                        }}
                                    >
                                        {edades.length > 0 && edades.map((item, index) => (
                                            <MenuItem value={item.val} key={index}>{item.name}</MenuItem>
                                        ))
                                        }
                                    </Field>
                                    <FormHelperText>{(errors.age && touched.age) && errors.age}</FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <Field component={DatePicker} label="Fecha Nacimiento" name="fechaNacimiento" />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <MyTextField name="dni" type="Number" label="DNI" placeholder="DNI"  InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AssignmentRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}/>

                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <MyTextField name="telefono" type="Number" label="Telefono" placeholder="Telefono" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SettingsPhoneRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}/>
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
                                <MyTextField name="email" type="Email" label="Email" placeholder="Email"  InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <ContactMailRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}/>

                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <MyTextField name="password" type="password" label="Password" placeholder="Password" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOpenRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}/>

                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <MyTextField name="comentarios" type="text" multiline rowsMax={4} label="Comentarios" placeholder="Comentarios" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MessageRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}/>

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
                                    onClick={() => { alert('cancelado') }}
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

const mapProps = state => ({
    formularioReducer: state.formularioReducer
})

export default connect(mapProps, { getNacionalidades, getEdades, createUser })(FormularioFormik);