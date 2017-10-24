const passport = require('passport');
const mongoose = require('mongoose');
const express = require('express');
const User = require('../models/useremail');
mongoose.Promise=global.Promise;
const app=express();
const router = express.Router();
module.exports = function (app) {


    router.post('/Signinpat', async (req, res) => {
        const query = User.findOne({email: req.body.email});
        const foundUser = await query.exec();

        if (foundUser) {
            req.body.Email_id = foundUser.Email_id;
        }
        passport.authenticate('local')(req, res, () => {
            if (req.user) {
                return res.send(JSON.stringify(req.user));
            }
            return res.send(JSON.stringify('Error while logging in'));
        });

    });

};