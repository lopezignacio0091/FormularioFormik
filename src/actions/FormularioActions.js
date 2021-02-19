import { 
    SET_ERROR, 
    SET_LOADING,
    SET_NACIONALIDADES,
    SET_EDADES,
    SET_NEW_USER
} from './types';
import axios from 'axios';

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}

export const getNacionalidades = () => dispatch => {
    // axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies')
    // .then(response => {
    //     let nacionalidades = response.data;
    //     dispatch({
    //         type:SET_NACIONALIDADES,
    //         payload: nacionalidades
    //     })
    // })
    fetch("/api/nacionalidades")
    .then((res) => res.json())
    .then((json) => {
        dispatch({
                    type:SET_NACIONALIDADES,
                    payload: json.nacionalities
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

export const createUser =  (user) => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: user.nombre })
    };
    fetch('/api/nacionalidades', requestOptions).then(response => response.json()).then(data => {
                console.log(data)
        dispatch({
                    type:SET_NEW_USER,
                    payload: data.nacionality
                })        
            }            
        );

}