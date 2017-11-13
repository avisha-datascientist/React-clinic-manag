const mongoose = require('mongoose');
const express = require('express');
const user = require('../models/useremail');
var app = express();
var router = express.Router();

router.get('/Admin', (req,res) =>{
user.find({},function(err,users){
if(users)
  return res.status(200).send(JSON.stringify(users));
  else {
     console.log('err');
  return  res.send(JSON.stringify({error:'There was error'}));
  }
});
});

router.route('/AgeRange').post((req,res)=>{

  var newStartTime=req.body.bdFrom ;
  var newEndTime=req.body.bdTo;
var foundUser=[];

  foundUser=user.find({}).where('Age').and([{gte:newStartTime},{lte:newEndTime}]);
  console.log(foundUser);
  return res.send({foundUser:foundUser});

});
module.exports = router;
