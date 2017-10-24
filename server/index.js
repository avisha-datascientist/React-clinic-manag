const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const logger = require('morgan');
require('./routes/authRoutes');
require('./models/User');
require('./services/passport');
const user = require('./routes/findUser');
const usere = require('./models/useremail');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local').Strategy;

mongoose.connect(keys.mongoURI);
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
    keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','ejs');
passport.use(new LocalStrategy(usere.authenticate()));
require('./routes/authRoutes')(app);
require('./routes/findUser')(app);
app.use('/api/authentication',user);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
