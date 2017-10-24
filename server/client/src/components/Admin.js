import React from 'react';

export default class Admin extends React.Component{
    render(){
        return(
            <div> <form id="admin">
                <table class="table">
                    <tr>
                        <td>
                            <div><a class="waves-effect waves-light btn-large" >View All</a></div>
                            <div><a class="waves-effect waves-light btn-large" >Search by age</a></div>
                        </td>
                    </tr>
                </table>
            </form></div>
        );
    }

}