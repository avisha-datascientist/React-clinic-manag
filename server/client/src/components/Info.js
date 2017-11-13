import React from 'react';
import All from './All.js';
import Signup from './Signup.js';
import {registerFunction} from './Signup';
export default class Info extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
  Name:'',
      Email_id:'',
      Password:''
    };

    this.compileFormData = this.compileFormData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  compileFormData() {
    const { registerFunction } = this.props;
    const formData = this.state;
    registerFunction(formData);
  }


  handleInputChange(e) {
    this.setState({ [e.currentTarget.id]: e.target.value });
  }


  handleKeyPress(target) {
    if (target.charCode === 13) {
      target.preventDefault();
      this.compileFormData();
    }
  }

    render() {
        return (

            <div class="row">
            <form class="col s12">
            <div class="row">
            <div class="input-field col s6">
            <input placeholder="Placeholder" id="Name" name="Name" type="text" class="validate" onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress} value={this.state.Name}/>
            <label for="Name">Name</label>
    </div>
    </div>
        <div class="row">
            <div class="input-field col s12">
                <input id="Email_id" name="Email_id" type="email" class="validate" onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress} value={this.state.Email_id}/>
                    <label for="Email_id">Email</label>
            </div>
        </div>
        <div class="row">
        <div class="input-field col s6">
            <input id="Password" name="Password" type="password" class="validate" onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress} value={this.state.Password} />
                <label for="Password">Password</label>
        </div>
        </div>
            <a class="waves-effect waves-light btn-large"><input type="button"
                                                                    value="Send"  onClick={this.compileFormData}/>Send</a>
        </form>
    </div>
        );
    }
}
