import React from 'react';
import { connect } from 'react-redux';
import { Login } from '../reducers/loginreducer';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
    class Signin extends React.Component {
        static contextTypes = {
            router: PropTypes.object
        }
        constructor(props,context) {
            super(props,context);
            this.state = {};

            this.onSubmit = this.onSubmit.bind(this);
        }

        render() {

            return (
                <div>
                    <form id="authen" name="LoginForm" onSubmit={this.onSubmit}>
                        <table class="table">
                            <tr>

                                <div>
                                    <td>Userid</td>
                                    <td><input type="email" id="Id" name="userid"
                                               onChange={e => this.setState({userid: e.target.value})}/></td>
                                </div>
                            </tr>
                            <tr>
                                <div>
                                    <td>Password</td>
                                    <td><input type="password" id="pwd" name="userpass"
                                               onChange={e => this.setState({userpass: e.target.value})}/></td>
                                </div>
                            </tr>
                            <tr>
                                <td>
                                    <div><a class="waves-effect waves-light btn-large"><input type="submit"
                                                                                              value="Login"/></a>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>


            );


        }

        onSubmit(e) {
            e.preventDefault();
            let {userid, userpass} = this.state;
              this.props.Login(userid, userpass);
            this.context.router.history.push("/Admin");
            this.setState({

                userid:'',
                userpass:''

            });


        }
    }
    const mapStateToProps = (state) => {
        return{
          isLoginPending:state.isLoginPending,
            isLoginSuccess:state.isLoginSuccess,
LoginError:state.LoginError
        };
    }


const mapDispatchToProps = (dispatch) => {
     return{
       Login:(userid,userpass) => dispatch(Login(userid,userpass))
     };
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin);
