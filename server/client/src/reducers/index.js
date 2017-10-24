import { combineReducers } from 'redux';
import authreducer from './authReducer';
import loginreducer from './loginreducer';
import loginpatreducer from './loginpatreducer';
export default combineReducers({
    auth:authreducer,
    loginadmin:loginreducer,
    loginpat:loginpatreducer
});