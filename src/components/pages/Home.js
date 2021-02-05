import React from 'react'
import FormularioFormik from '../layout/form/FormularioFormik';
import Grid from '@material-ui/core/Grid';

const Home = () =>( 
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{margin:'15px'}}
    >
        
        <FormularioFormik />

    </Grid>
)

export default Home