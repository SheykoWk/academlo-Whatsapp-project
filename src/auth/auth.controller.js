const userControllers = require('../users/users.controller');
const crypto = require('../tools/crypto');
const { toPromise } = require('../tools/toPromise');

const checkUsersCredential = async (email, password) => {
    const [user, err] = await toPromise(userControllers.getUserByEmail(email));
    if (!err && user.dataValues) {
        console.log(user)
        return crypto.comparePassword(password, user.password);
    } else {
        return null;
    }
};

module.exports = {
    checkUsersCredential,
};
