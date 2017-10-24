import React from 'react';
import Header from './Header.js';
import Desc from './Desc.js';
import Signin from './Signin.js';
import Info from './Info.js';
import { Link } from 'react-router-dom';
import Signinpat from './LoginContainer';


export default class All extends React.Component {
    render() {
        return(
            <div className="container">

                <Desc />
                <h2>Patient Signin:</h2>
                <Link to="/Signinpat">Click here to Sign in</Link><br/>
                <Link to="/Signin">Click here for Admin Sign in</Link><br/>

            </div>
        );
    }
}