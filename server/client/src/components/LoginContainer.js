import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {logUserIn} from '../actions/authenpat';
import Signinpat from './Signinpat';

console.log('In logincont');
export  class LoginContainer extends React.Component{
constructor(props){
    super(props);
    this.logUserInFunction=this.logUserInFunction.bind(this);
}
logUserInFunction(userData) {
  console.log('Inloguserinf');
  const { dispatch } = this.props;
  dispatch(logUserIn(userData));
}
render(){
    const { authenpat } = this.props;
    if(authenpat.isLoggedIn){
        return(
            <Redirect to='/Next' />
        );
    }
      return(
        <div>
          <Signinpat loginFunction={this.logUserInFunction} />

        </div>
      );
    }
}

function mapStateToProps(state) {
    console.log('In mapStateToProps');
    return {
    authenpat: state.authenpat,
  };
}
export default connect( mapStateToProps)(LoginContainer);
