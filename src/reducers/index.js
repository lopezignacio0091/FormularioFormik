import {combineReducers} from 'redux';
import FormularioReducer from './FormularioReducer';
import HomeReducer from './HomeReducer';

export default combineReducers({
    formularioReducer: FormularioReducer,
    homeReducer: HomeReducer
});