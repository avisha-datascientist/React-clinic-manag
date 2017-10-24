import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import {Redirect } from 'react-router';
import All from './All';
import Info from './Info';
import Signin from './Signin';
import Header from './Header';
import Admin from './Admin';
import {connect } from 'react-redux';
import * as actions from '../actions';
import Profile from './Profile';
import Next from './Next';
import Signinpat from './LoginContainer';
class App extends React.Component{
    componentDidMount(){
this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header title="Dr. Subash Eye Clinic"/>
                        <Route exact path="/" component={All}/>
                        <Route path="/Info" component={Info}/>
                        <Route exact path="/Signin"  component={Signin} />
                        <Route path="/Next" component={Next} />
                        <Route path="/Admin" component={Admin} />
                        <Route exact path="/Signinpat"  component={Signinpat} />
                        <Route path="/Profile/:userid" component={Profile} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};
export default connect(null,actions)(App);