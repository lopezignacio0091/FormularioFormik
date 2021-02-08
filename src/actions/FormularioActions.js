import { 
    SET_ERROR, 
    SET_LOADING,
    SET_NACIONALIDADES
} from './types';
import axios from 'axios';

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}

export const getNacionalidades = () => dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies')
    .then(response => {
        let nacionalidades = response.data;
        dispatch({
            type:SET_NACIONALIDADES,
            payload: nacionalidades
        })
    })
    .catch(e => {
        dispatch({
            type: SET_ERROR,
            payload: e
        })        
    })
}