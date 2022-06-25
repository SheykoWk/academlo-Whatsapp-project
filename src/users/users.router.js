const router = require('express').Router();
const passport = require('passport');
const userHttpHandler = require('./users.http');
require('../tools/auth')(passport);

router.route('/my-profile')
    .get(
        passport.authenticate('jwt', { session: false }),
        userHttpHandler.getMyUserData
    );

module.exports = {
    router
}