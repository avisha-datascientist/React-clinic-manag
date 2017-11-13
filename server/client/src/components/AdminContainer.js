import React from 'react';
import 'whatwg-fetch';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Admin from './Admin';
import axios from 'axios';
import ViewAll from './ViewAll';
import {onChangedatausers} from './ViewAll';
 export  class AdminContainer extends React.Component{
   constructor(props){
     super(props);

     this.Viewallusers=this.Viewallusers.bind(this);
     this.state={
       redirect:false,
       data:[]
     };
     this.changedataUsers=this.changedataUsers.bind(this);
   }

   async Viewallusers(){
     console.log('in admincont');
     await fetch(

           '/api/authentication/Admin',

           {
               method: 'GET',
               body: JSON.stringify(),

               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   'Access-Control-Allow-Origin':'*',
               },


               credentials: 'same-origin',
               credentials: 'include',
           },
       ).then((response) => {
         if (response.status === 200) {
           console.log(response.data);
           this.setState({  data: response.data,
             redirect:!this.state.redirect });

             return response.json();
         }
         return 'Error';
     }).catch((error) => {
         new Error(error);
     });
   }

changedataUsers(){
  console.log('in changeUsers');
  console.log(this.state.data);
  this.props.onChangedatausers(this.state.data);
}
   render(){
       const {redirect } = this.state;
       if(redirect){
         console.log(redirect);
           return(
               <Redirect to='/ViewAll' />

           );
       }
       return(
       <div>
           <Admin ViewUsers={this.Viewallusers} />
        </div>
   );

   }
 }
export default connect()(AdminContainer);
