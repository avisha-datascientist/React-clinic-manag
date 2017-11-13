import React from 'react';
import {Link} from 'react-router-dom';
import ChartofAll from './ChartofAll';
import ChartofAllPie from './ChartofAllPie';
export default class ViewAll extends React.Component{
  constructor(props){
    super(props);

    this.onChangedatausers=this.onChangedatausers.bind(this);

    this.state={
      Users:null
    };
  }
  onChangedatausers(newUsers){
    console.log(newUsers);
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
      <tr>
      <td><Link to="/ChartofAll">Bar Representation</Link></td>
      <td><Link to="/ChartofAllPie">Pie Representation</Link></td>
      </tr>
      </table>
      </div>
    );
  }
}
