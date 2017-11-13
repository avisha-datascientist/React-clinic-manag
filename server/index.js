var path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const keys = require('./config/keys');
const expressSession = require('express-session')({
  secret:'randomavisha12345',
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secure:false,
    keys: [keys.cookieKey],
  },
});
const LocalStrategy = require('passport-local').Strategy;
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');

const useremail = require('./models/useremail');
require('./models/User');
require('./routes/authRoutes');
const pass = require('./services/passport');
const user = require('./routes/findUser');
const admin = require('./routes/adminRoutes');
const app = express();

mongoose.connect(keys.mongoURI);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


app.use('/Signinpat',user);
app.use('/checksession',user);
app.use('/logout',user);
app.use('/Info',user);
app.use('/api/authentication',user);
app.use('/Admin',admin)
app.use('/AgeRange',admin);
app.use('/api/authentication',admin);


passport.use(new LocalStrategy(useremail.authenticate()));
passport.serializeUser(useremail.serializeUser());
passport.deserializeUser(useremail.deserializeUser());
require('./routes/authRoutes')(app);

app.use((req,res,next)=>{
    const err = new Error('Notfound');
    const status='400';
    next(err);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Listening on port");
module.exports = app;
