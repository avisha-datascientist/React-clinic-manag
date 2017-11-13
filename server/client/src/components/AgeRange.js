import React from 'react';

export default class AgeRange extends React.Component{

  constructor(props){
    super(props);
    this.state={
      bdFrom:'',
      bdTo:'',
    };
    this.handleFromChange=this.handleFromChange.bind(this);
    this.handleToChange=this.handleToChange.bind(this);
    this.processData=this.processData.bind(this);
  }

  handleFromChange(e){
      this.setState({bdFrom: e.target.value });
  }
      handleToChange(e){
          this.setState({bdTo: e.target.value });
      }

      processData(){
        const {findFunction,onchangedLabels} =this.props;
        const formData=this.state;
        findFunction(formData);

        }
render(){
  return(
<div>

    <form id="add" name="ageRangeForm" >
          Enter the Birthdate range:
        <table class="table">
            <tr>

                <div>
                    <td>BirthdateFrom</td>
                    <td><input type="date" id="From" name="bdFrom" value={this.state.bdFrom} onChange={this.handleFromChange} /></td>
                </div>
                <div>
                    <td>BirthdateTo</td>
                    <td><input type="date" id="To" name="bdTo" value={this.state.bdTo} onChange={this.handleToChange} /></td>
                </div>

            </tr>
            <tr>
                <td>
                    <div><a class="waves-effect waves-light btn-large"><input type="button"
                                                                            value="ageRange"  onClick={this.processData}/></a>
                    </div>
                </td>
            </tr>
            </table>
            </form>
</div>
  );
}

}
