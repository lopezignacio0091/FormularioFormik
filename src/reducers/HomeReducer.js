import {
    SET_ERROR, 
    SET_LOADING,
    SET_NEW_USER
} from '../actions/types';
 
const initialState = {
    loading: false,
    error: '',
    users:[]
}
export default (state = initialState, action) => {
    switch(action.type){
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
                users: state.users.push(action.payload)
            }
        default:
            return state;
    }
} 