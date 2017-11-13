import React from 'react';
import {Redirect} from 'react-router';
import PropTypes from 'prop-types';
import AgeRange from './AgeRangeContain';
console.log("in admin");
export default class Admin extends React.Component{
  static contextTypes = {
      router: PropTypes.object
  }
  constructor(props,context){
    super(props,context);

    this.ViewAll=this.ViewAll.bind(this);
    this.ViewbyAge=this.ViewbyAge.bind(this);

  }
ViewAll(){
const {ViewUsers} = this.props;
ViewUsers();
}
ViewbyAge(){
  this.context.router.history.push("/AgeRange");
}

    render(){
        return(
            <div> <form id="admin">
                <table class="table">
                    <tr>
                        <td>
                            <div><a class="waves-effect waves-light btn-large" ><input type="button" value="View All" onClick={this.ViewAll} /></a></div>
                            <div><a class="waves-effect waves-light btn-large" ><input type="button" value="View by age" onClick={this.ViewbyAge} /></a></div>
                        </td>
                    </tr>
                </table>
            </form></div>
        );
    }

}
