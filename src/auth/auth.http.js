const authControllers = require('./auth.controller');
const userContollers = require('../users/users.controller');
const config = require('../config');
const jwt = require('jsonwebtoken');
const { toPromise } = require('../tools/toPromise');

const loginUser = async (req, res) => {
    console.log(req.body);
    if (!req.body) {
        return res.status(400).json({ message: 'Missing data' });
    } else if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Missing data' });
    }

    const [response, err] = await toPromise(authControllers.checkUsersCredential(
        req.body.email,
        req.body.password
    ));

    if (err || !response) {
        return res.status(401).json({ message: 'Invalid Credential' });
    }

    const [user, error] = await toPromise(userContollers.getUserByEmail(req.body.email));
    if(error || !user){
        return res.status(401).json({ message: 'Invalid Credential' });
    }
    const token = jwt.sign(
        {
            id: user.id,
            email: req.body.email,
        },
        config.jwtSecret
    );
    res.status(200).json({ token: token });
};

module.exports = {
    loginUser,
};