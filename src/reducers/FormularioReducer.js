import {
    SET_ERROR, 
    SET_LOADING,
    SET_NACIONALIDADES
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
    nacionalidades: []
}
export default (state = initialState, action) => {
    switch(action.type){
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
        default:
            return state;
    }
} 