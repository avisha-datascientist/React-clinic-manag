import { combineReducers } from 'redux';
import authreducer from './authReducer';
import loginreducer from './loginreducer';
import loginpatreducer from './loginpatreducer';
import authenpatreducer from './authenpatreducer';
const Reducers = {
    auth:authreducer,
    loginadmin:loginreducer,
    loginpat:loginpatreducer,
    authenpat:authenpatreducer,
};

export default combineReducers(Reducers);
