const initialState = {
    CaseNo:'',
    DFVisit:'',
    id:'',
    isLoggedIn:false,
    isLoggingIn:false,
    Name:'',
    registrationSucceeded: false,
    };

export default function reducer(state=initialState,action){
    switch(action.type){
        case 'AUTHENTICATION_LOGIN_ATTEMPT':{
            const newState =  Object.assign({},state);
            newState.isLoggingIn=true;
            return newState;
        }
        case 'AUTHENTICATION_LOGIN_FAILURE':
        case 'AUTHENTICATION_SESSION_CHECK_FAILURE':
        case 'AUTHENTICATION_LOGOUT_SUCCESS':{
            const newState = Object.assign({},initialState);
            return newState;
        }
        case 'AUTHENTICATION_LOGIN_SUCCESS':
        case 'AUTHENTICATION_SESSION_CHECK_SUCCESS':{
            const newState =  Object.assign({},state);
            newState.id=action.json._id;
            newState.CaseNo=action.json.CaseNo;
            newState.DFVisit=action.json.DFVisit;
            newState.isLoggedIn=true;
            newState.isLoggingIn=false;
                newState.Name=action.json.Name;
                
            return newState;
        }
        case 'AUTHENTICATION_LOGOUT_FAILURE':
         case 'AUTHENTICATION_REGISTRATION_FAILURE': {
          return state;
        }
        case 'AUTHENTICATION_REGISTRATION_SUCCESS': {
      const newState = Object.assign({}, state);
      newState.registrationSucceeded = true;
      return newState;
    }
        default:{
            return state;
        }

    }
}
