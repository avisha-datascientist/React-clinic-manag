import React from 'react';
import { logUserOut } from '../actions/authenpat';
import { connect } from 'react-redux';


import Header from './Header';
class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.logUserOutFunction = this.logUserOutFunction.bind(this);
  }
  logUserOutFunction() {
      const { dispatch } = this.props;
      dispatch(logUserOut());
    }
  render() {
    const { authenpat } = this.props;
    return (
      <Header authenpat={authenpat} logUserOutFunction={this.logUserOutFunction} />
    );
  }
}


export default connect()(HeaderContainer);
