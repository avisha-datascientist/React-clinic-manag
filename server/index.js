const express = require('express');
const app = express();

app.get('/',function(req,res){

res.send({hey: 'there'});

});
const PORT = process.env.PORT || 5000;
app.listen(PORT);