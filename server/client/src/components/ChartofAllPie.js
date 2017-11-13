import React from 'react';
import {connect} from 'react-redux';
import {Bar,Line,Pie} from 'react-chartjs-2';


export class ChartofAllPie extends React.Component{
  constructor(props){
    super(props);
    this.state={
      chartData:{
      labels:[2010,2011,2012,2013,2014,2015,2016,2017],
      datasets:[
        {
          label:'Patients',
          data:[
            108,
            1183,
            1349,
            1142,
            952,
            825,
            911,
            519
          ],
          backgroundColor:['rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,206,85,0.6)',
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,169,64,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(255,120,55,0.6)'

        ],
                }
      ]
    }
  };
}


  render(){
      return(
        <div>
          <Pie data={this.state.chartData} options={{}} />
        </div>
      )
  }

}
export default connect()(ChartofAllPie);
