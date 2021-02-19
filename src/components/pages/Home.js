import React from 'react'
import FormularioFormik from '../layout/form/FormularioFormik';
import Grid from '@material-ui/core/Grid';
import UserTable from '../layout/userTable/UserTable';

const Home = () =>( 
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{margin:'15px'}}
    >
        <Grid container item xs={12} sm={12} md={7} lg={7}>
            <UserTable />
        </Grid>
        <Grid container item xs={12} md={1} lg={1}>
            
        </Grid>
        <Grid container item xs={12} sm={12} md={4} lg={4}>
            <FormularioFormik />
        </Grid>
        
    </Grid>
)

export default Home