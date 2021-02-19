import { 
    SET_ERROR, 
    SET_LOADING,
    SET_NEW_USER
} from './types';

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