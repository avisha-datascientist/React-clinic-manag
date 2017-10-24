import React from 'react';
import { Link  } from 'react-router-dom';
import Info from './Info.js';




export  class Signup extends React.Component{
    render(){

        return(

            <div>Console.log("From signup");

                <Link to="/Info">Click here</Link>

            </div>        );
    }


}