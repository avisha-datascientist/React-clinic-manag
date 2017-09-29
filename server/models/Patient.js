const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patSchema = new Schema({
SrNo:number,
Prefix:String,
Seq:number,
CaseNo:String,
Name:String,
FName:String,
MName:String,
SName:String,
DOB:date,
ACheck:String,
DFVisit:String,
RegDate:date,
Contact:number,
Mobile:number,
SPBSRNO:String,
add2:String
});
mongoose.model('Patient',patSchema);