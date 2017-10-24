import React from 'react';

export default class Next extends React.Component {
    render(){
        return(
            <div>
        <form id="next">
            <table class="table">
                <tr>
                    <td>
                    <div><a class="waves-effect waves-light btn-large" href="/Info">Fill Details</a></div>
                        <div><a class="waves-effect waves-light btn-large" href="/Profile">Already filled?</a></div>
                    </td>
                </tr>
            </table>
        </form>
            </div>
        );
    }


}