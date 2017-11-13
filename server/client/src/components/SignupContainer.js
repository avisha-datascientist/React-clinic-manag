import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authenpat';
import Signup from './Signup';
import Info from './Info';

export class SignupContainer extends React.Component {
  constructor(props) {
    super(props);

    // bound functions
    this.registerFunction = this.registerFunction.bind(this);
  }

  registerFunction(userData) {
    const { dispatch } = this.props;
     dispatch(registerUser(userData));

  }

  render() {
    const { isLoggedIn } = this.props.authenpat;
    if (isLoggedIn) {
     return (<p>Please log out before registering a new user</p>);
   }


     return <Info registerFunction={this.registerFunction} />;
  }
}

const mapStateToProps = state => ({ authenpat: state.authenpat });

export default connect(mapStateToProps)(SignupContainer);
