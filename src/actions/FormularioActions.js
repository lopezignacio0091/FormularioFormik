import { 
    SET_ERROR, 
    SET_LOADING,
    SET_NACIONALIDADES,
    SET_EDADES,
} from './types';
import axios from 'axios';

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}

export const getNacionalidades = () => dispatch => {
    axios.get("/api/nacionalidades")
    .then((json) => {
        dispatch({
                    type:SET_NACIONALIDADES,
                    payload: json.data.nacionalities
                })
            })
    .catch(e => {
        dispatch({
            type: SET_ERROR,
            payload: e 
        })        
    })
}

export const getEdades = () => dispatch => {
    let edades = [{name:'Menor 18',val: 1},{name:'Mayor 18', val:18}];
    dispatch({
        type:SET_EDADES,
        payload: edades
    })
}