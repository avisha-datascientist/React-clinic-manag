const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');


const useremailSchema = new Schema({
    CaseNo:String,
    email:String,
    password:String,
    Name:String,
    DFVisit:Date,
});


useremailSchema.plugin(passportLocalMongoose);

var useremail = mongoose.model('emails2', useremailSchema);
module.exports = useremail;
