import React from 'react';
export  default  class Signinpat extends React.Component {
constructor(props){
    super(props);
    this.state ={
email:'',
        password:'',
    };
    this.compileFormData=this.compileFormData.bind(this);
    this.handleEmailChange=this.handleEmailChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);

}
handleEmailChange(e){
    this.setState({email: e.target.value });
}
    handlePasswordChange(e){
        this.setState({password: e.target.value });
    }
    compileFormData(){
        const {loginFunction}=this.props;
        const formData=this.state;
        loginFunction(formData);
}


    render() {

        return (
            <div>
                <form id="authen" name="LoginForm" >
                    <table class="table">
                        <tr>

                            <div>
                                <td>Userid</td>
                                <td><input type="email" id="Id" name="email" value={this.state.email} onChange={this.handleEmailChange} /></td>
                            </div>
                        </tr>
                        <tr>
                            <div>
                                <td>Password</td>
                                <td><input type="password" id="pwd" name="password" value={this.state.password} onChange={this.handlePasswordChange} /></td>
                            </div>
                        </tr>
                        <tr>
                            <td>
                                <div><a class="waves-effect waves-light btn-large"><input type="button"
                                                                                        value="Login"  onClick={this.compileFormData}/></a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>


        );


    }

    }