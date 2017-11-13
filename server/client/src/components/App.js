import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import {Redirect } from 'react-router';
import All from './All';
import Info from './SignupContainer';
import Signin from './Signin';
import Header from './HeaderContainer';
import Admin from './AdminContainer';
import Signup from './SignupContainer';
import {connect } from 'react-redux';
import * as actions from '../actions';
import Profile from './Profile';
import Next from './Next';
import ViewAll from './ViewAll'
import Signinpat from './LoginContainer';
import AgeRange from './AgeRangeContain';
import ViewByAge from './ViewByAge';
import {checkUserSession} from './TempContainer';
import TempContainer from './TempContainer';
import ChartofAll from './ChartofAll';
import ChartofAllPie from './ChartofAllPie';
 export default function App(props) {
  const {authenpat} = props;
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header title="Dr. Subash Eye Clinic" authenpat={authenpat}/>
                        <Route exact path="/" component={All}/>
                        <Route path="/Info" component={Info}/>
                        <Route exact path="/Signin"  component={Signin} />
                        <Route path="/Next" component={Next} />
                        <Route path="/Admin" component={Admin} />
                        <Route path="/ViewAll" component={ViewAll} />
                        <Route path="/AgeRange" component={AgeRange} />
                        <Route path="/ViewByAge" component={ViewByAge} />
                        <Route  path="/Signinpat"  component={Signinpat} />
                        <Route path="/Profile/:userid" component={Profile} />
                        <Route path="/Signup" component={Signup} />
                        <Route path="/ChartofAll" component={ChartofAll} />
                        <Route path="/ChartofAllPie" component={ChartofAllPie} />
                    </div>
                </BrowserRouter>
            </div>
        );
};
