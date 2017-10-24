const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const usereSchema = new mongoose.Schema({
CaseNo:{type:String,unique:true},
Email_id:{type:String,unique:true},
Password:String
});
usereSchema.plugin(passportLocalMongoose);
var useremail = mongoose.model('emails2',usereSchema);
module.exports = useremail;