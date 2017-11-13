import React from 'react';
import {connect} from 'react-redux';
import {checkSession} from '../actions/authenpat';
import {fetchUser} from '../actions/index';
import * as actions from '../actions';
import App from './App';
console.log('In TempContainer');

export class TempContainer extends React.Component{

constructor(props){
super(props);
this.checkUserSession = this.checkUserSession.bind(this);
}
componentWillMount(){
this.checkUserSession();

}
   checkUserSession(){
    const { dispatch } = this.props;
 dispatch(checkSession());
  }


  render() {
      const { authenpat} = this.props;
      return (
        <App  authenpat={authenpat}  />
      );
    }

    componentDidMount(){
     const {fetchUser} =this.props;
    fetchUser;
       }
  }


function mapStateToProps (state){
return  {
authenpat:state.authenpat,
};
}

export default connect(mapStateToProps)(TempContainer);
