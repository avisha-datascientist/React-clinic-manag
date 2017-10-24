import React from 'react';
import All from './All.js';
import Signup from './Signup.js';

export default class Info extends React.Component {
    render() {
        return (

            <div class="row">
            <form class="col s12">
            <div class="row">
            <div class="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
            <label for="first_name">First Name</label>
    </div>
        <div class="input-field col s6">
            <input id="Middle_name" type="text" class="validate" />
                <label for="Middle_name">Middle Name</label>
        </div>
        <div class="input-field col s6">
            <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
        </div>
        </div>
                    <div class="row">
                    <div class="input-field col s12">
                        <p>
                            <input name="group1" type="radio" id="male" />
                            <label for="male">Male</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="Female" />
                            <label for="Female">Female</label>
                        </p>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input type="text" class="datepicker" />
                    </div>
            </div>
    <div class="row">
        <div class="input-field col s12">
            <input type="number" id="conm" />
            <label for="conm">Contact(Mobile)</label>
        </div>
    </div>
        <div class="row">
            <div class="input-field col s12">
                <input type="number" id="conh" />
                <label for="conh">Contact(Home)</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input id="email" type="email" class="validate" />
                    <label for="email">Email</label>
            </div>
        </div>
            <div class="row">
            <div class="input-field col s6">
                <input id="Add" type="text" class="validate" />
                    <label for="Add">Address</label>
            </div>
            </div>

            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
        </button>

    </form>
    </div>
        );
    }
}

