import React from 'react';
import 'whatwg-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementprogress,decrementprogress } from '../actions/pattype';
import Signinpat from './Signinpat';

export  class LoginContainer extends React.Component{
constructor(props){
    super(props);
    this.attemptLogin=this.attemptLogin.bind(this);
}
    async attemptLogin(userData) {
        const { decrementProgressAction, incrementProgressAction } = this.props;

        // turn on spinner
        incrementProgressAction();


      await fetch(

            '/api/authentication/Signinpat',

            {
                method: 'POST',
                body: JSON.stringify(userData),

                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                },
                credentials: 'same-origin',
            },
        ).then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
      }) .catch((error) => {
          new Error(error);
      });





        decrementProgressAction();
    }
render(){
    return(
    <div>
        <Signinpat loginFunction={this.attemptLogin} />

    </div>
);
}
}
function mapDispatchToProps(dispatch){
return bindActionCreators({
incrementProgressAction:incrementprogress,
    decrementProgressAction:decrementprogress,

    },dispatch);
    
}
export default connect(null,mapDispatchToProps)(LoginContainer);