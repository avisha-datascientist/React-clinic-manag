import React from 'react';
import Info from './Info';
import { connect } from 'react-redux';
import Signinpat from './Signinpat';
import {isLoggedIn} from '../reducers/authenpatreducer';

const elserenderContent = () => (
<li><a href="/Signinpat">Login</a></li>
);
 class Header extends React.Component{
   constructor(props) {
       super(props);

       this.logOutClick = this.logOutClick.bind(this);
       this.renderGreeting = this.renderGreeting.bind(this);
     }

     logOutClick(e) {
    e.preventDefault();
    const { logUserOutFunction } = this.props;
    logUserOutFunction();
  }

  renderGreeting() {
    return (

        <h3>  Welcome | <a href="/logout" onClick={this.logOutClick}>Log Out</a></h3>

    );
  }


     renderContent(){
         switch (this.props.auth){
             case null:
                 return;
             case false:
                 return(
                     <li><a href="/auth/google">Login with Google</a></li>
                 );
             default:
                 return <li><a href="/api/logout">Logout</a></li>;
         }

     }




    render(){
const { isLoggedIn } = this.props;
        return(
<div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" class="brand-logo">{this.props.title}</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/Info">Signup</a></li>
                            <li>{this.renderContent()}</li>
                            <li>{ isLoggedIn ? this.renderGreeting() : elserenderContent() }</li>

                        </ul>
                    </div>
                </nav>


            </div>

        );


    }


}
function mapStateToProps({auth}) {
return {auth};
}

export default connect(mapStateToProps)(Header);
