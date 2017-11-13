import React from 'react';
import 'whatwg-fetch';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewbyAge from './ViewByAge';
import AgeRange from './AgeRange';

export class AgeRangeContain extends React.Component{
constructor(props){
  super(props);
  this.state={
    data:[],
    redirect:false
  }
  this.onChangeage = this.onChangeage.bind(this);
  this.attemptFind=this.attemptFind.bind(this);
}
  async attemptFind(userData) {

    await fetch(

          '/api/authentication/AgeRange',

          {
              method: 'POST',
              body: JSON.stringify(userData),

              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin':'*',
              },
              mode: 'cors',

              credentials: 'same-origin',
              credentials: 'include',
          },
      ).then((response) => {
        if (response.status === 200) {
          this.setState({  data: response.data,
            redirect:!this.state.redirect });
            return response.json();
        }
        return null;
    }) .catch((error) => {
         new Error(error);
});
  }

onChangeage(){
  const {onChangeageusers} = this.props;
  onChangeageusers(this.state.data);

}

  render(){
      const {redirect } = this.state;
      if(redirect){
          return(
              <Redirect to='/ViewByAge' />
          );
      }
      return(
      <div>
          <AgeRange findFunction={this.attemptFind} />
          <ViewbyAge onChangeage={this.onChangeageusers} />
      </div>
  );
  }

}
export default connect()(AgeRangeContain);
