import React from 'react';
import Info from './Info';
import { connect } from 'react-redux';

 class Header extends React.Component{
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

        return(
<div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" class="brand-logo">{this.props.title}</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/Info">Signup</a></li>
                            <li>{this.renderContent()}</li>

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