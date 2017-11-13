import React from 'react';
import { Link  } from 'react-router-dom';
import {connect} from 'react-redux';
import Info from './Info.js';
import {registerFunction} from './SignupContainer';



export  class Signup extends React.Component{
    render(){

        return(

            <div>Console.log("From signup");
              <Info registerFunction={this.registerFunction} />
                <Link to="/Info">Click here</Link>

            </div>        );
    }


}
export default connect()(Signup);
