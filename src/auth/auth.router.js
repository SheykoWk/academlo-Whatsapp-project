const router = require('express').Router()
const authHttpHandler = require('./auth.http')

router.route('/login')
    .post(authHttpHandler.loginUser)


module.exports = {
    router
}