

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    };
}

export function Login(email,password){
    return dispatch => {
       dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginAPI(email,password,error => {
dispatch(setLoginPending(false));
if(!error){
    dispatch(setLoginSuccess(true));
}
else{
 dispatch(setLoginError(error));
}});

    }
}

export default function reducer(state={
    isLoginPending:false,
    isLoginSuccess:false,
    loginError:null

},action) {
    switch (action.type){
        case SET_LOGIN_PENDING:
            return Object.assign({},state,{
                isLoginPending:action.isLoginPending
            });
        case SET_LOGIN_SUCCESS:
            return Object.assign({},state,{
                isLoginSuccess:action.isLoginSuccess

            });
        case SET_LOGIN_ERROR:
            return Object.assign({},state,{
                LoginError:action.LoginError

            });
        default:
            return state;
    }
    
}

 function callLoginAPI(email,password,callback)
{
    setTimeout(() => {
        if(email==='admin@example.com' && password==='admin'){
            return callback(null);
        }
        else
        {
            return callback = 'Invalid';
        }
    },1000)
}

