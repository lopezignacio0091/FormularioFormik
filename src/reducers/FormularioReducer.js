import {
    SET_ERROR, 
    SET_LOADING,
    SET_NACIONALIDADES,
    SET_EDADES,
    SET_NEW_USER
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
    nacionalidades: [],
    edades: []
}
export default (state = initialState, action) => {
    switch(action.type){
        case SET_EDADES:
            return{
                ...state,
                edades: action.payload
            }
        case SET_NACIONALIDADES:
            return{
                ...state,
                nacionalidades: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_NEW_USER:
            return {
                ...state,
                nacionalidades: state.nacionalidades.push(action.payload)
            }
        default:
            return state;
    }
} 