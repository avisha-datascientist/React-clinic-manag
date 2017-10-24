const passport = require('passport');

module.exports = function(app)
{
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
            prompt: 'select_account'}),
        (req,res) => {
        res.redirect('/Next');
        });


    app.get('/api/logout',function(req,res){
        req.logout();
res.redirect('/');
    });

    app.get('/api/current_user',function(req,res){
        res.send(req.user);


    })
};