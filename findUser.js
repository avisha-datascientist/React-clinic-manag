const passport = require('passport');
const mongoose = require('mongoose');
const express = require('express');
const useremail = require('../models/useremail.js');
mongoose.Promise=global.Promise;
const app=express();
const LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
require('../index');
console.log('In finduser');

router.route('/Signinpat').post( async (req, res) => {
    console.log('step 1');

   const query =useremail.findOne({email:req.body.email});

   const foundUser=await query.exec();
console.log(foundUser);

console.log('step 2');
    if (foundUser) {
        console.log('step 3');
        req.body.Name = foundUser.Name;
    }
console.log('step *');
console.log(req.body);

  passport.authenticate('local')(req,res,() =>{
    console.log('step 4');
          if(req.user){
            console.log('in req.user');
            return res.send(JSON.stringify(req.user));
          }
              return res.send(JSON.stringify({error: 'There was an error logging in'}));
});
});

router.get('/checksession', (req, res) => {
    if (req.user === 200) {
      return res.send(JSON.stringify(req.user));
    }
      return res.send(JSON.stringify({}));
    });

router.get('/logout',(req,res) =>{
  req.logout();
  return res.send(JSON.stringify(req.user));
});

router.post('/Info', async(req, res) => {
  const query = useremail.findOne({ email: req.body.email });

const foundUser = await query.exec();



if (foundUser) { return res.send(JSON.stringify({ error: 'Email or username already exists' })); }

if (!foundUser) {

  const newUser = new useremail(req.body);


return  useremail.register(newUser, req.body.password, (err) => {
      console.log('inside .reg');
      if (err) {
        return res.send(JSON.stringify({ error: err }));
      }
        return passport.authenticate('local')(req, res, () => {
          if (req.user) {
            console.log('inside register authen');
            return res.send(JSON.stringify(req.user));
          }
    return res.send(JSON.stringify({ error: 'There was an error logging in' }));
  });
  });

}
return res.send(JSON.stringify({ error: 'There was an error registering the user' }));
});



module.exports=router;
