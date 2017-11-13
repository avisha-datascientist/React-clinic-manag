import React from 'react';

export default class ViewByAge extends React.Component{
  constructor(props){
    super(props);

    this.onChangeageusers=this.onChangeageusers.bind(this);

    this.state={
      Users:null
    };
  }
  onChangeageusers(newUsers){
    console.log('in oncageusers');
    this.setState({
      Users:newUsers
    });
  }

  render(){
    return(<div>
      <h4>List of all users registered</h4>
      <table>
      <tr>
      <td>{this.state.Users}</td>
      </tr>
      </table>
      </div>
    );
  }
}
