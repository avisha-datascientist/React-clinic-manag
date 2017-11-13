import 'whatwg-fetch';
import {incrementProgress,decrementProgress } from './pattype';
export const loginAttempt =() =>({type:'AUTHENTICATION_LOGIN_ATTEMPT'});
export const loginSuccess = json =>({type:'AUTHENTICATION_LOGIN_SUCCESS',json});
export const loginFailure = error =>({type:'AUTHENTICATION_LOGIN_FAILURE',error});
export const logoutFailure = error => ({ type: 'AUTHENTICATION_LOGOUT_FAILURE', error });
export const logoutSuccess = () => ({ type: 'AUTHENTICATION_LOGOUT_SUCCESS' });
export const sessionCheckFailure = () => ({ type: 'AUTHENTICATION_SESSION_CHECK_FAILURE' });
export const sessionCheckSuccess = json => ({ type: 'AUTHENTICATION_SESSION_CHECK_SUCCESS', json });
export const registrationFailure = () => ({ type: 'AUTHENTICATION_REGISTRATION_FAILURE' });
export const registrationSuccess = () => ({ type: 'AUTHENTICATION_REGISTRATION_SUCCESS' });

export function logUserIn(userData){
    return async (dispatch) => {
      console.log('in loguserin');
      dispatch(incrementProgress());
      dispatch(loginAttempt());

        await fetch(

          '/api/authentication/Signinpat',

        {
            method: 'POST',
            body: JSON.stringify(userData),

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
            },

            credentials:'same-origin',
            credentials:'include'
        },
    ).then((response) => {
      if (response.status === 200) {
          return response.json();
      }
      return null;
  }) .then((json) => {
      if (json) {
         dispatch(loginSuccess(json));
      } else {
        console.log('in else');
         dispatch(loginFailure(new Error('Authentication Failed')));
      }
  }).catch((error) => {
    console.log('in catch');
     dispatch(loginFailure( new Error(error)));
  });


return  dispatch(decrementProgress());
};
}

export function logUserOut()  {
return async (dispatch) =>{
  await fetch(

    '/api/authentication/logout',

    {
      method: 'GET',
      credentials: 'same-origin',
      credentials: 'include',
    },
  )
  .then((response) => {
    if (response.status === 200) {
      return dispatch(logoutSuccess());
    }
    return dispatch(logoutFailure(`Error: ${response.status}`));
  })
  .catch((error) => {
    dispatch(logoutFailure(error));
  });


};
}

export function checkSession() {
  console.log('In checkSession');
  return async (dispatch) => {
console.log('Inside');
    await fetch(

      '/api/authentication/checksession',

      {
        method: 'GET',
        credentials: 'same-origin',
        credentials: 'include',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((json) => {
      if (json.Email_id) {
        return dispatch(sessionCheckSuccess(json));
      }
      return dispatch(sessionCheckFailure());
    })
    .catch(error => dispatch(sessionCheckFailure(error)));
  };
}

export function registerUser(userData) {
  return async (dispatch) => {
    dispatch(incrementProgress());


    await fetch(
            '/api/authentication/Info',

      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        credentials: 'include',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then(async (json) => {
      if (json) {
        await dispatch(loginSuccess(json));
        await dispatch(registrationSuccess());
      } else {
        dispatch(registrationFailure(new Error('Registration Failed')));
      }
    })
    .catch((error) => {
      dispatch(registrationFailure(new Error(error)));
    });

    return dispatch(decrementProgress());
  };
}
